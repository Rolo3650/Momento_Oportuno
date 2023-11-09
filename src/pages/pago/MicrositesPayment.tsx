import { useState, useCallback } from 'react';

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
  'pk_test_51O3l3TKsMUZdYHBYf1tQxzYgxuI3AnwaHApYA8GFH9QR0mFkq222o9ISceK4Ucg1nQqZt9nkr4wr5Ryn1LBXwKRs00m40i9780'
);

const MicrositesPayment = () => {
  const { newMicrositeForm } = useForm();
  const theme = useTheme();
  const [dir, SetDir] = useState('');

  const onClickPP = useCallback(async () => {
    try {
      if (dir.trim().length == 0) {
        Swal.fire('Error', 'Ingresa una dirección de pago válida', 'error');
      } else {
        if (!newMicrositeForm.responseForm) throw Error();
        const related_id = newMicrositeForm.responseForm.data.id;

        const response_3 = await OrdersServices.createOrder({
          billing_address: 'dir',
          package_id: 2,
          payment_method: 'paypal',
          related_id,
          type: 'microsite',
        });

        if (response_3.paypal_link) {
          window.location.assign(response_3.paypal_link.replace('\\/', '/'));
        }
      }
    } catch (error) {
      Swal.fire('Error', 'Ocurrió un error al procesar el pago', 'error');
    }
  }, [dir, newMicrositeForm.responseForm]);

  return (
    <LayoutOne>
      <div className="pay-page" style={{ padding: 30 }}>
        <h1 className="title text text-font-georgia fw-bold fs-2 text-color-5">
          Pago
        </h1>
        <div className="mt-4 fw-bold fs-3 text text-color-secondary text-font-rubik subtitle mb-3 text-center">
          Resumen de tu Órden
        </div>
        {/* <div className="mt-4 fw-bold text text-center text-color-5 text-font-l-d subtitle">
          Nombre del Paquete
        </div>
        <div className="fw-bold fs-4 text text-color-8 text-font-l-d subtitle mb-3 text-center">
          {newMicrositeForm.responseForm?.data.title}
        </div>
        <div className="mt-4 fw-bold text text-center text-color-5 text-font-l-d subtitle">
          Precio del paquete
        </div>
        <div className="fw-bold fs-1 text text-color-primary text-font-georgia subtitle mb-3 text-center">
          $ 100
          
          MXN
        </div>
        <div className="mt-4 fw-bold text text-center text-color-5 text-font-l-d subtitle">
          Descripción del paquete
        </div> */}
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
                  type="microsite"
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

export { MicrositesPayment };
