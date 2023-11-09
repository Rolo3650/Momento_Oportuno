import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { CreateOrderParams, OrdersServices } from '../../api/Orders';
import { useForm } from '../../hooks';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

type PayTwoProps = {
  disabled?: boolean;
  type?: 'microsite' | 'directory';
  billing_address: string;
};

const PayTwo = ({
  disabled,
  type = 'directory',
  billing_address,
}: PayTwoProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const nav = useNavigate();

  const { newDirectoryForm, newMicrositeForm } = useForm();

  const [validForm, setValidForm] = React.useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validForm) return console.log('invalid form');

    if (!stripe || !elements) {
      return console.log('no stripe or elements');
    }

    const cardElement = elements.getElement(CardElement);
    // console.log({ elements, CardElement });
    if (!cardElement) return console.log('No card element');

    const res = await stripe.createToken(cardElement);
    console.log({ res });

    if (res.error) {
      console.log(res.error);
      return;
    }
    let obj: CreateOrderParams;
    if (type === 'microsite') {
      if (!newMicrositeForm.responseForm)
        return Swal.fire(
          'Error',
          'Ocurrió un error al procesar el pago',
          'error'
        );
      obj = {
        billing_address,
        package_id: 2,
        payment_method: 'paypal',
        related_id: parseInt(`${newMicrositeForm.responseForm.data.id}`),
        type,
      };
    } else if (type === 'directory') {
      if (!newDirectoryForm.responseForm?.data.data.id)
        return Swal.fire(
          'Error',
          'Ocurrió un error al procesar el pago',
          'error'
        );
      obj = {
        billing_address,
        package_id: 7,
        payment_method: 'paypal',
        related_id: newDirectoryForm.responseForm.data.data.id,
        type: 'directory',
      };
    } else {
      return Swal.fire(
        'Error',
        'Ocurrió un error al procesar el pago',
        'error'
      );
    }

    console.log({ obj });

    const orderCreated = await OrdersServices.createOrder(obj);

    console.log({
      orderCreated,
    });

    // example

    if (orderCreated.order.id) {
      await Swal.fire(
        '¡Listo!',
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
