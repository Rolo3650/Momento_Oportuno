import React from 'react';
import { LayoutThree } from '../../containers/layout/LayoutThree';
import { useMyAds } from '../../hooks';
import { EmptyBoxOne } from '../../components/module/box/EmptyBoxOne';

interface Props {}

const MyAds: React.FC<Props> = () => {
  const { data } = useMyAds();
  // console.log(data);

  return (
    <LayoutThree>
      <h1 className="title text text-font-georgia fw-bold fs-2 text-color-5">
        Mis Anuncios
      </h1>
      {(!data?.data || data?.data?.length == 0) && (
        <EmptyBoxOne text="No has agregado ningún anuncio" />
      )}
    </LayoutThree>
  );
};

export { MyAds };
