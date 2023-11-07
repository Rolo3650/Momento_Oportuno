import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { OrdersServices } from '../../api/Orders';
import { useForm } from '../../hooks';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

type PayOneProps = {
  disabled?: boolean;
};

const PayOne = ({ disabled }: PayOneProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const nav = useNavigate();

  const { newAdForm } = useForm();

  const [validForm, setValidForm] = React.useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validForm) return;

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    console.log({ elements, CardElement });
    if (!cardElement) return console.log('No card element');

    const res = await stripe.createToken(cardElement);

    if (res.error) {
      console.log(res.error);
      return;
    }

    const orderCreated = await OrdersServices.createOrder({
      billing_address: 'dir',
      package_id: 4,
      payment_method: 'stripe',
      related_id: newAdForm.responseForm ? newAdForm.responseForm.data.id : 0,
      type: 'listing',
      token: res.token?.id,
    });

    console.log({
      cardElement,
      token: res.token,
      card: res.token?.card,
      orderCreated,
    });

    // example

    if (orderCreated.order.id) {
      await Swal.fire(
        'Success',
        `Órden #${orderCreated.order.id} creada `,
        'success'
      );
      nav('/panel/list');
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        onChange={(p) => {
          console.log(p);
          setValidForm(p.complete);
        }}
        options={{
          hidePostalCode: true,
        }}
      />
      <div className="w-100 d-flex justify-content-center">
        <Button
          disabled={!stripe || !elements || !validForm || disabled}
          type="submit"
          className="btn btn-primary mt-4"
          variant="contained"
          sx={{
            textTransform: 'none',
          }}
        >
          Pagar con Stripe
        </Button>
      </div>
    </form>
  );
};

export { PayOne };
