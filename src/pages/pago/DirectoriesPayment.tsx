import { useState, useEffect } from 'react';

import { LayoutOne } from '../../containers/layout/LayoutOne';
import { useForm } from '../../hooks';
import { Button, useTheme } from '@mui/material';
import { OrdersServices } from '../../api/Orders';
import { TextFieldTwo } from '../../components/inputs/text/TextFieldTwo';
import Swal from 'sweetalert2';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { PayTwo } from '../../components/pay/PayTwo';
// import SouthIcon from '@mui/icons-material/South';

const stripe = loadStripe(
  // (() => {
  //   const key = config.STRIPE.PK_DEV;
  //   console.log('on IIFE', key);
  //   return key;
  // })()
  'pk_test_51O3l3TKsMUZdYHBYf1tQxzYgxuI3AnwaHApYA8GFH9QR0mFkq222o9ISceK4Ucg1nQqZt9nkr4wr5Ryn1LBXwKRs00m40i9780'
);

const DirectoriesPayment = () => {
  const { newAdForm, newDirectoryForm } = useForm();
  const theme = useTheme();
  const [dir, SetDir] = useState('');

  const onClickPP = async () => {
    if (dir.length == 0) {
      Swal.fire('Error', 'Ingresa una dirección de pago válida', 'error');
    } else {
      const response_3 = await OrdersServices.createOrder({
        billing_address: 'dir',
        package_id: 7,
        payment_method: 'paypal',
        related_id: newAdForm.responseForm ? newAdForm.responseForm.data.id : 0,
        type: 'directory',
      });

      if (response_3.paypal_link) {
        window.location.assign(response_3.paypal_link.replace('\\/', '/'));
      }
    }
  };

  // const getTotal = (price: number) => {
  //   // console.log(newAdForm)
  //   let total = price;

  //   if (newAdForm.print.set) {
  //     if (newAdForm.print.value == '1') total += 100;
  //     if (newAdForm.print.value == '2') total += 150;
  //   }
  //   if (newAdForm.feature) total += 100;
  //   if (newAdForm.socialMedia) total += 100;
  //   if (newAdForm.extraVideo.set) total += 100;
  //   if (newAdForm.extraStates.set) {
  //     if (newAdForm.extraStates.value == '1') total += 100;
  //     if (newAdForm.extraStates.value == '2') total += 100;
  //     if (newAdForm.extraStates.value == '3') total += 150;
  //   }

  //   if (newAdForm.extraImgs.quantity == 5) total += 100;
  //   if (newAdForm.extraImgs.quantity == 10) total += 200;

  //   return total;
  // };

  useEffect(() => {
    console.log(newDirectoryForm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // useEffect(() => {
  //   console.log(newAdForm);

  //   // const response_3 = await OrdersServices.createOrder({
  //   //     billing_address: 'dir',
  //   //     package_id: 4,
  //   //     payment_method: 'paypal',
  //   //     related_id: response_1.data.id,
  //   //     type: 'listing',
  //   //   });

  //   //   console.log(response_3)
  // }, [newAdForm]);

  return (
    <LayoutOne>
      <div className="pay-page" style={{ padding: 30 }}>
        <h1 className="title text text-font-georgia fw-bold fs-2 text-color-5">
          Pago
        </h1>
        <div className="mt-4 fw-bold fs-3 text text-color-secondary text-font-rubik subtitle mb-3 text-center">
          Resumen de tu Órden
        </div>
        <div className="mt-4 fw-bold text text-center text-color-5 text-font-l-d subtitle">
          Nombre del Paquete
        </div>
        <div className="fw-bold fs-4 text text-color-8 text-font-l-d subtitle mb-3 text-center">
          {newAdForm.package?.name}
        </div>
        <div className="mt-4 fw-bold text text-center text-color-5 text-font-l-d subtitle">
          Precio del paquete
        </div>
        <div className="fw-bold fs-1 text text-color-primary text-font-georgia subtitle mb-3 text-center">
          $ 100
          {/* {getTotal(newAdForm.package?.price ?? 0).toLocaleString('es-MX', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}{' '} */}
          MXN
        </div>
        <div className="mt-4 fw-bold text text-center text-color-5 text-font-l-d subtitle">
          Descripción del paquete
        </div>
        <div className="mt-2 pb-3 body mx-auto mb-5">
          <div className="mt-4 fw-bold text text-color-5 text-font-l-d subtitle mb-3">
            Dirección de Pago{' '}
            <span className="text text-color-secondary">*</span>
          </div>
          <div className="d-flex justify-content-center mb-3">
            <TextFieldTwo
              color={{
                variant: 'secondary',
                text: '#464748',
                field: theme.palette.secondary.main,
                backgroundColor: '#fff',
              }}
              text={'Direción de pago'}
              onChange={(e) => {
                SetDir(e.target.value);
              }}
              value={dir}
            />
          </div>
          <div className="d-flex justify-content-center my-4">
            <Button
              onClick={onClickPP}
              variant="contained"
              color="secondary"
              size="large"
              // disabled={!token || token.trim().length === 0 || dir.length == 0}
            >
              Pagar con Paypal
            </Button>
          </div>
          <div className="pay pay-one stripe">
            <div className="mb-2 fw-bold text text-color-5 text-font-l-d subtitle">
              Ingresa una tarjeta
            </div>
            <div className="">
              <Elements stripe={stripe}>
                <PayTwo
                  disabled={dir.length == 0}
                  type="directory"
                  billing_address={dir}
                />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </LayoutOne>
  );
};

export { DirectoriesPayment };
