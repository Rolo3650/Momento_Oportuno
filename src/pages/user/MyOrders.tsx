import React, { useEffect, useState } from 'react';
import { LayoutThree } from '../../containers/layout/LayoutThree';
import { EmptyBoxOne } from '../../components/module/box/EmptyBoxOne';
import { GeneralButton } from '../../components/inputs/buttons/GeneralButton';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import { Order, OrdersServices } from '../../api/Orders';
import { OrderOne } from '../../components/order/OrderOne';

interface Props {}

const MyOrders: React.FC<Props> = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  const [orders, _setOrders] = useState<Order[]>([]);

  const init = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response = await OrdersServices.myOrders();

    // console.log(response);
    // console.log(response.data && response.status);
    if (response.data.length) {
      _setOrders(response.data);
    }
  };

  useEffect(() => {
    console.log('holaa:', orders?.length);
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigateTo = useNavigate();
  return (
    <LayoutThree>
      {orders?.length && orders?.length == 0 && (
        <EmptyBoxOne
          text="Aún no tienes ningún pedido."
          imgSrc="/svg/icons/box_one.svg"
          button={
            <GeneralButton
              onClick={() => navigateTo('/panel/create')}
              title="Crear Anuncio"
              colorPrimary="secondary"
              hoverColor="secondary"
              endIcon={<ArrowForward />}
            />
          }
        />
      )}
      {orders?.length && orders?.length > 0 && (
        <>
          <h1 className="title text text-font-georgia fw-bold fs-2 text-color-5">
            Mis Ordenes
          </h1>
          <div className="orders-one mt-5 mb-5 pb-5">
            {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              orders?.map((order) => {
                // const orderId = order.id ? order.id : 0;
                // const title = order.title ? order.title : '';
                // const desc = order?.type ? order?.type : '';
                // const total = order?.total ? order?.total : 0;
                // return <div key={order?.id}>Hola</div>;
                return (
                  <OrderOne
                    key={`${order.id}`}
                    desc={order.title}
                    total={order.total}
                    name={order.type}
                    id={order.id}
                  />
                );
              })
            }
          </div>
        </>
      )}
    </LayoutThree>
  );
};

export { MyOrders };
