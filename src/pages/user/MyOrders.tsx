import React, { useEffect, useState } from 'react';
import { LayoutThree } from '../../containers/layout/LayoutThree';
import { EmptyBoxOne } from '../../components/module/box/EmptyBoxOne';
import { GeneralButton } from '../../components/inputs/buttons/GeneralButton';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import { OrdersServices } from '../../api/Orders';
// import { OrderOne } from '../../components/order/OrderOne';

interface Props {}

const MyOrders: React.FC<Props> = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  const [orders, _setOrders] = useState<object[]>([]);

  const init = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: any = await OrdersServices.myOrders();

    // console.log(response);
    // console.log(response.data && response.status);
    if (response.data && response.data.data.length && response.status === 200) {
      _setOrders(response.data.data);
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
      {(orders?.length && orders?.length == 0) && (
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
      {(orders?.length && orders?.length > 0) && (
        <>
          <h1 className="title text text-font-georgia fw-bold fs-2 text-color-5">
            Mis Ordenes
          </h1>
          <div className="orders-one mt-5 mb-5 pb-5">
            {/* {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              orders?.map((order: any) => (
                <OrderOne
                  key={order?.id}
                  desc={order?.title ?? ''}
                  total={order?.total ?? 0}
                  name={order?.type ?? ''}
                  id={order?.id ?? 0}
                />
              ))
            } */}
          </div>
        </>
      )}
    </LayoutThree>
  );
};

export { MyOrders };
