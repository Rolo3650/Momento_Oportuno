// import React from 'react';
import { LayoutThree } from '../../containers/layout/LayoutThree';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { useOrderById } from '../../hooks';

const Confirmacion = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const params = useParams();
  const { data: { data: order } = {}, isLoading } = useOrderById(
    params.orderid
  );

  return (
    <LayoutThree>
      <h1 className="mt-3 title text text-font-georgia fw-bold fs-2 text-color-5">
        Comprobante de Pago
      </h1>
      {!isLoading && order && order?.id > 0 && (
        <>
          <div className="mt-5 fw-bold fs-3 text text-color-secondary text-font-rubik subtitle mb-3 text-center">
            Resumen de tu Orden
          </div>
          <div className="mt-4 fw-bold text text-center text-color-5 text-font-l-d subtitle">
            Número de Orden
          </div>
          <div className="fw-bold fs-4 text text-color-8 text-font-l-d subtitle mb-3 text-center">
            # {order?.id}
          </div>
          <div className="mt-4 fw-bold text text-center text-color-5 text-font-l-d subtitle">
            Nombre de la Orden
          </div>
          <div className="fw-bold fs-4 text text-color-8 text-font-l-d subtitle mb-3 text-center">
            {order?.title
              ?.replace('Order for', 'Orden para')
              .replace('listing', 'anuncio')
              .replace('directory', 'directorio')
              .replace('with addons', 'con complementos')
              .replace('microsite', 'micrositio')}
          </div>
          <div className="mt-4 fw-bold text text-center text-color-5 text-font-l-d subtitle">
            Método de Pago
          </div>
          <div className="fw-bold fs-4 text text-color-8 text-font-l-d subtitle mb-3 text-center">
            {order?.payment_method}
          </div>
          <div className="mt-4 fw-bold text text-center text-color-5 text-font-l-d subtitle">
            Tipo de Orden
          </div>
          <div className="fw-bold fs-4 text text-color-8 text-font-l-d subtitle mb-3 text-center">
            {order?.type
              ?.replace('Order for', 'Orden para')
              .replace('listing', 'Anuncio')
              .replace('directory', 'Directorio')
              .replace('with addons', 'Con complementos')
              .replace('microsite', 'Micrositio')}
          </div>
          <div className="mt-4 fw-bold text text-center text-color-5 text-font-l-d subtitle">
            Estatus
          </div>
          <div className="fw-bold fs-4 text text-color-8 text-font-l-d subtitle mb-3 text-center">
            {order?.status
              ?.replace('paid', 'Pagado')
              .replace('pending', 'Pendiente')}
          </div>
          <div className="mt-4 fw-bold text text-center text-color-5 text-font-l-d subtitle">
            Dirección de Pago
          </div>
          <div className="fw-bold fs-4 text text-color-8 text-font-l-d subtitle mb-3 text-center">
            {order?.billing_address}
          </div>
          <div className="mt-4 fw-bold text text-center text-color-5 text-font-l-d subtitle">
            Fecha de Creación
          </div>
          <div className="fw-bold fs-4 text text-color-8 text-font-l-d subtitle mb-3 text-center">
            {moment(order.created_at ?? new Date()).format('DD/MM/YYYY')}
          </div>
          <div className="mt-4 fw-bold text text-center text-color-5 text-font-l-d subtitle">
            Precio de la Orden
          </div>
          <div className="fw-bold fs-1 text text-color-primary text-font-georgia subtitle mb-5 text-center">
            ${' '}
            {order.total?.toLocaleString('es-MX', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}{' '}
            MXN
          </div>
        </>
      )}
    </LayoutThree>
  );
};

export { Confirmacion };
