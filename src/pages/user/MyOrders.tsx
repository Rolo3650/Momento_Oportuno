import React from 'react';
import { LayoutThree } from '../../containers/layout/LayoutThree';
import { EmptyBoxOne } from '../../components/module/box/EmptyBoxOne';
import { GeneralButton } from '../../components/inputs/buttons/GeneralButton';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

interface Props { }

const MyOrders: React.FC<Props> = () => {
  const navigateTo = useNavigate(); 
  return (
    <LayoutThree>
      {/* <h1 className="title text text-font-georgia fw-bold fs-2 text-color-5">
        Mis Ordenes
      </h1> */}
      <EmptyBoxOne
        text="Aún no tienes ningún pedido."
        imgSrc="/svg/icons/box_one.svg"
        button={
          <GeneralButton
            onClick={() => navigateTo('/panel/create')}
            title="Comprar Paquete"
            colorPrimary="secondary"
            hoverColor="secondary"
            endIcon={<ArrowForward />}
          />
        }
      />
    </LayoutThree>
  );
};

export { MyOrders };