import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { CreateOrderParams, OrdersServices } from '../../api/Orders';
import { useForm } from '../../hooks';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

type PayTwoProps = {
  disabled?: boolean;
};

const PayTwo = ({ disabled }: PayTwoProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const nav = useNavigate();

  const { newDirectoryForm } = useForm();

  const [validForm, setValidForm] = React.useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validForm) return;

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    // console.log({ elements, CardElement });
    if (!cardElement) return console.log('No card element');

    const res = await stripe.createToken(cardElement);

    if (res.error) {
      console.log(res.error);
      return;
    }

    const obj: CreateOrderParams = {
      billing_address: 'dir',
      package_id: 7,
      payment_method: 'paypal',
      related_id: newDirectoryForm.responseForm
        ? newDirectoryForm.responseForm.data.id
        : 0,
      type: 'directory',
    };

    console.log('OBJ', obj);

    const orderCreated = await OrdersServices.createOrder(obj);

    // console.log('ORDER', {
    //   cardElement,
    //   token: res.token,
    //   card: res.token?.card,
    //   orderCreated,
    // });

    // example

    if (orderCreated.order.id) {
      await Swal.fire(
        'Success',
        `Orden #${orderCreated.order.id} creada `,
        'success'
      ).then(() => {
        nav('/comprobante/' + orderCreated.order.id);
      });
      // nav('/panel/list');
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

export { PayTwo };
