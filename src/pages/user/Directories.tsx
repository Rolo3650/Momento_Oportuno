import React from 'react';
import { LayoutThree } from '../../containers/layout/LayoutThree';
import { EmptyBoxOne } from '../../components/module/box/EmptyBoxOne';
import { GeneralButton } from '../../components/inputs/buttons/GeneralButton';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

interface Props {}

const Directories: React.FC<Props> = () => {
  const navigateTo = useNavigate();
  return (
    <LayoutThree>
      <div className="d-flex justify-content-between">
        <h1 className="title text text-font-georgia fw-bold fs-2 text-color-5">
          Directorios
        </h1>
      </div>

      <EmptyBoxOne
        text="No has agregado ningún directorio"
        imgSrc="/svg/icons/box_one.svg"
        button={
          <GeneralButton
            onClick={() => navigateTo('/panel/directories/create')}
            title="Agregar Directorio"
            colorPrimary="secondary"
            hoverColor="secondary"
            endIcon={<ArrowForward />}
          />
        }
      />
    </LayoutThree>
  );
};

export { Directories };
