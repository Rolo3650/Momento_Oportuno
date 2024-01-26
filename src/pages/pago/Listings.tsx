import { useState } from 'react';

import { LayoutThree } from '../../containers/layout/LayoutThree';
import { useForm } from '../../hooks';
import { Button, useTheme } from '@mui/material';
import { CreateOrderParams, OrdersServices } from '../../api/Orders';
import { TextFieldTwo } from '../../components/inputs/text/TextFieldTwo';
import Swal from 'sweetalert2';
import { PayOne } from '../../components/pay/PayOne';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
// import SouthIcon from '@mui/icons-material/South';

const stripe = loadStripe(
  // (() => {
  //   const key = config.STRIPE.PK_DEV;
  //   console.log('on IIFE', key);
  //   return key;
  // })()
  'pk_test_51O3l3TKsMUZdYHBYf1tQxzYgxuI3AnwaHApYA8GFH9QR0mFkq222o9ISceK4Ucg1nQqZt9nkr4wr5Ryn1LBXwKRs00m40i9780'
);

const Listings = () => {
  const { newAdForm } = useForm();
  const theme = useTheme();
  const [dir, SetDir] = useState('');

  const onClickPP = async () => {
    if (dir.length == 0) {
      Swal.fire('Error', 'Ingresa una dirección de pago válida', 'error');
    } else {
      const obj: CreateOrderParams = {
        billing_address: 'dir',
        package_id: newAdForm.package?.id ?? 4,
        payment_method: 'paypal',
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

      const response_3 = await OrdersServices.createOrder(obj);

      if (response_3.paypal_link) {
        window.location.assign(response_3.paypal_link.replace('\\/', '/'));
      }
    }
  };

  const getTotal = (price: number) => {
    // console.log(newAdForm)
    let total = price;

    if (newAdForm.print.set) {
      if (newAdForm.print.value == 'medio-nac') total += 200;
      if (newAdForm.print.value == 'medio-qro') total += 100;
      if (newAdForm.print.value == 'medio-cam') total += 100;
      if (newAdForm.print.value == 'medio-yuc') total += 100;
      if (newAdForm.print.value == 'medio-tab') total += 100;
      if (newAdForm.print.value == 'medio-chi') total += 100;
      if (newAdForm.print.value == 'medio-ver') total += 100;
      if (newAdForm.print.value == 'medio-baj') total += 100;

      if (newAdForm.print.size == 'impreso-4x4') total += 100;
      if (newAdForm.print.size == 'impreso-4x8') total += 110;
      if (newAdForm.print.size == 'impreso-4x13') total += 120;
      if (newAdForm.print.size == 'impreso-8x4') total += 130;
      if (newAdForm.print.size == 'impreso-8x8') total += 140;
      if (newAdForm.print.size == 'impreso-12x3') total += 150;
      if (newAdForm.print.size == 'impreso-12x8') total += 160;
      if (newAdForm.print.size == 'impreso-12x13') total += 170;
      if (newAdForm.print.size == 'impreso-8x13') total += 180;
      if (newAdForm.print.size == 'impreso-21x8') total += 190;
      if (newAdForm.print.size == 'impreso-21x13') total += 200;
      if (newAdForm.print.size == 'impreso-24x15') total += 210;
    }
    if (newAdForm.feature) total += 100;
    if (newAdForm.socialMedia) total += 100;
    if (newAdForm.extraVideo.set) total += 100;
    if (newAdForm.extraStates.set) {
      if (newAdForm.extraStates.value == '1') total += 100;
      if (newAdForm.extraStates.value == '2') total += 100;
      if (newAdForm.extraStates.value == '3') total += 150;
    }

    if (newAdForm.extraImgs.quantity == 5) total += 100;
    if (newAdForm.extraImgs.quantity == 10) total += 200;

    return total;
  };

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
    <LayoutThree>
      <div className="pay-page">
        <h1 className="title text text-font-georgia fw-bold fs-2 text-color-5">
          Pago
        </h1>
        <div className="mt-4 fw-bold fs-3 text text-color-secondary text-font-rubik subtitle mb-3 text-center">
          Resumen de tu Orden
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
          ${' '}
          {getTotal(newAdForm.package?.price ?? 0).toLocaleString('es-MX', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}{' '}
          MXN
        </div>
        <div className="mt-4 fw-bold text text-center text-color-5 text-font-l-d subtitle">
          Descripción del paquete
        </div>
        <div className="fw-bold fs-5 text text-color-8 text-font-l-d subtitle mb-3 text-center">
          {newAdForm.package?.description}
        </div>
        <div className="mt-4 fw-bold text text-center text-color-5 text-font-l-d subtitle">
          Cantidad de Imágenes
        </div>
        <div className="fw-bold fs-5 text text-color-8 text-font-l-d subtitle mb-3 text-center">
          {newAdForm.package?.number_of_images}
        </div>
        <div className="mt-4 fw-bold text text-center text-color-5 text-font-l-d subtitle">
          Complementos
        </div>
        <div className="fw-bold fs-5 text text-color-8 text-font-l-d subtitle mb-3 text-center">
          {/* <ul> */}
          {/* {newAdForm.extraStates.set && <li>{newAdForm.extraStates.value}</li>} */}
          {newAdForm.extraImgs.quantity > 3 && (
            <li>
              {newAdForm.extraImgs.quantity == 5
                ? '5 Imágenes +$100'
                : `10 Imágenes +$200`}
            </li>
          )}
          {newAdForm.extraStates.set && (
            <li>
              {newAdForm.extraStates.value == '1'
                ? 'Estados del Sureste +$100'
                : `${
                    newAdForm.extraStates.value == '2'
                      ? 'Nacional +$100'
                      : 'Todos los estados +$200'
                  }`}
            </li>
          )}
          {newAdForm.print.set && (
            <>
              <li>
                {newAdForm.print.value == 'medio-nac' && (
                  <>El Momento Nacional +$200</>
                )}
                {newAdForm.print.value == 'medio-qro' && (
                  <>El Momento Quintana Roo +$100</>
                )}
                {newAdForm.print.value == 'medio-cam' && (
                  <>El Momento Campeche +$100</>
                )}
                {newAdForm.print.value == 'medio-yuc' && (
                  <>El Momento Yucatán +$100</>
                )}
                {newAdForm.print.value == 'medio-tab' && (
                  <>El Momento Tabasco +$100</>
                )}
                {newAdForm.print.value == 'medio-chi' && (
                  <>El Momento Chiapas +$100</>
                )}
                {newAdForm.print.value == 'medio-ver' && (
                  <>El Momento Veracruz +$100</>
                )}
                {newAdForm.print.value == 'medio-baj' && (
                  <>El Momento Baja California Sur +$100</>
                )}
              </li>
              <li>
                {newAdForm.print.size == 'impreso-4x4' && (
                  <>Anuncio Impreso Modular 4x4cm +$100</>
                )}
                {newAdForm.print.size == 'impreso-4x8' && (
                  <>Anuncio Impreso Modular 4x8.7cm +$110</>
                )}
                {newAdForm.print.size == 'impreso-4x13' && (
                  <>Anuncio Impreso Modular 4x13.4cm +$120</>
                )}
                {newAdForm.print.size == 'impreso-8x4' && (
                  <>Anuncio Impreso Modular 8.3x4cm +$130</>
                )}
                {newAdForm.print.size == 'impreso-8x8' && (
                  <>Anuncio Impreso Modular 8.3x8.7cm +$140</>
                )}
                {newAdForm.print.size == 'impreso-12x3' && (
                  <>Anuncio Impreso Modular 12.7x3.7cm +$150</>
                )}
                {newAdForm.print.size == 'impreso-12x8' && (
                  <>Anuncio Impreso Modular 12.7x8.7cm +$160</>
                )}
                {newAdForm.print.size == 'impreso-12x13' && (
                  <>Anuncio Impreso Modular 12.7x13.3cm +$170</>
                )}
                {newAdForm.print.size == 'impreso-8x13' && (
                  <>Anuncio Impreso Modular 8.3x13.4cm +$180</>
                )}
                {newAdForm.print.size == 'impreso-21x8' && (
                  <>Anuncio Impreso Modular 21.5x8.7cm +$190</>
                )}
                {newAdForm.print.size == 'impreso-21x13' && (
                  <>Anuncio Impreso Modular 21.5x13.4cm+$200</>
                )}
                {newAdForm.print.size == 'impreso-24x15' && (
                  <>Anuncio Impreso Modular 21.5x13.4cm +$210</>
                )}
              </li>
            </>
          )}
          {newAdForm.feature && <li>Destacado +$100</li>}
          {newAdForm.socialMedia && <li>Redes Social +$100</li>}
          {newAdForm.extraVideo.set && <li>Agregar Video +$100</li>}
          {/* </ul> */}
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
                <PayOne disabled={dir.length == 0} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </LayoutThree>
  );
};

export { Listings };
