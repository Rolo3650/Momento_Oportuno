import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { CreateOrderParams, OrdersServices } from '../../api/Orders';
import { useForm } from '../../hooks';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Button, CircularProgress } from '@mui/material';

type PayOneProps = {
  disabled?: boolean;
};

const PayOne = ({ disabled }: PayOneProps) => {
  const stripe = useStripe();
  const [loading, setLoading] = useState(false);
  const elements = useElements();
  const nav = useNavigate();

  const { newAdForm } = useForm();

  const [validForm, setValidForm] = React.useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
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

    const obj: CreateOrderParams = {
      billing_address: 'dir',
      package_id: newAdForm.package?.id ?? 4,
      payment_method: 'stripe',
      related_id: newAdForm.responseForm ? newAdForm.responseForm.data.id : 0,
      type: 'listing',
    };

    if (newAdForm.extraImgs.quantity == 3) obj['addons[1]'] = 1;
    if (newAdForm.extraImgs.quantity == 5) obj['addons[2]'] = 1;
    if (newAdForm.extraImgs.quantity == 10) obj['addons[3]'] = 1;
    if (newAdForm.extraVideo.set) obj['addons[4]'] = 1;
    if (newAdForm.feature) obj['addons[5]'] = 1;
    if (newAdForm.print.set) {
      if (newAdForm.print.value == 'medio-nac') obj['addons[21]'] = 1;
      if (newAdForm.print.value == 'medio-qro') obj['addons[22]'] = 1;
      if (newAdForm.print.value == 'medio-cam') obj['addons[23]'] = 1;
      if (newAdForm.print.value == 'medio-yuc') obj['addons[24]'] = 1;
      if (newAdForm.print.value == 'medio-tab') obj['addons[25]'] = 1;
      if (newAdForm.print.value == 'medio-chi') obj['addons[26]'] = 1;
      if (newAdForm.print.value == 'medio-ver') obj['addons[27]'] = 1;
      if (newAdForm.print.value == 'medio-baj') obj['addons[28]'] = 1;

      if (newAdForm.print.size == 'impreso-4x4') obj['addons[9]'] = 1;
      if (newAdForm.print.size == 'impreso-4x8') obj['addons[10]'] = 1;
      if (newAdForm.print.size == 'impreso-4x13') obj['addons[11]'] = 1;
      if (newAdForm.print.size == 'impreso-8x4') obj['addons[12]'] = 1;
      if (newAdForm.print.size == 'impreso-8x8') obj['addons[13]'] = 1;
      if (newAdForm.print.size == 'impreso-12x3') obj['addons[14]'] = 1;
      if (newAdForm.print.size == 'impreso-12x8') obj['addons[15]'] = 1;
      if (newAdForm.print.size == 'impreso-12x13') obj['addons[16]'] = 1;
      if (newAdForm.print.size == 'impreso-8x13') obj['addons[17]'] = 1;
      if (newAdForm.print.size == 'impreso-21x8') obj['addons[18]'] = 1;
      if (newAdForm.print.size == 'impreso-21x13') obj['addons[19]'] = 1;
      if (newAdForm.print.size == 'impreso-24x15') obj['addons[20]'] = 1;
    }
    if (newAdForm.socialMedia) obj['addons[8]'] = 1;


    const orderCreated = await OrdersServices.createOrder(obj);

    
    // example
    setLoading(false);

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
          disabled={!stripe || !elements || !validForm || disabled || loading}
          type="submit"
          className="btn btn-primary mt-4"
          variant="contained"
          sx={{
            textTransform: 'none',
          }}
        >
          {loading ? (
            <CircularProgress sx={{ color: 'white' }} />
          ) : (
            'Pagar con Stripe'
          )}
        </Button>
      </div>
    </form>
  );
};

export { PayOne };
