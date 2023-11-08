// import React from 'react';
import { useEffect, useState } from 'react';
import { LayoutThree } from '../../containers/layout/LayoutThree';
import { useParams } from 'react-router';
import { OrdersServices } from '../../api/Orders';
import moment from 'moment';

const Confirmacion = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [order, setOrder] = useState<any>({ id: 0 });
  const { orderid } = useParams();

  const init = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: any = await OrdersServices.myOrder({
      id: parseInt(orderid ?? '0'),
    });

    // console.log(response);
    if (response.data && response.status === 200) {
      console.log(response.data.data);
      setOrder(response.data.data);
    }
  };

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LayoutThree>
      <h1 className="mt-3 title text text-font-georgia fw-bold fs-2 text-color-5">
        Comproban de Pago
      </h1>
      {order?.id > 0 && (
        <>
          <div className="mt-5 fw-bold fs-3 text text-color-secondary text-font-rubik subtitle mb-3 text-center">
            Resumen de tu Orden
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
            {order?.status?.replace("paid", "Pagado").replace("pending", "Pendiente")}
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
