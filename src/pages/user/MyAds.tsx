import React from 'react';
import { LayoutThree } from '../../containers/layout/LayoutThree';
import { useMyAds } from '../../hooks';
import { EmptyBoxOne } from '../../components/module/box/EmptyBoxOne';
import { GeneralButton } from '../../components/inputs/buttons/GeneralButton';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

interface Props { }

const MyAds: React.FC<Props> = () => {
  const navigateTo = useNavigate();
  const { data } = useMyAds();
  console.log(data);

  return (
    <LayoutThree>
      <h1 className="title text text-font-georgia fw-bold fs-2 text-color-5">
        Mis Anuncios
      </h1>
      {(!data?.data || data?.data?.length == 0) && (
        <EmptyBoxOne
          text="No has agregado ningún anuncio"
          imgSrc="/svg/icons/box_one.svg"
          button={
            <GeneralButton
              onClick={() => navigateTo('/panel/create')}
              title="Publicar Anuncio"
              colorPrimary="secondary"
              hoverColor="secondary"
              endIcon={<ArrowForward />}
            />
          }
        />
      )}
    </LayoutThree>
  );
};

export { MyAds };
