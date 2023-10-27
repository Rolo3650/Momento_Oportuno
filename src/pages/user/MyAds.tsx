import React from 'react';
import { LayoutThree } from '../../containers/layout/LayoutThree';

interface Props {}

const MyAds: React.FC<Props> = () => {
  return (
    <LayoutThree>
      <h1 className="title text text-font-georgia fw-bold fs-2 text-color-5">
        Mis Anuncios
      </h1>
    </LayoutThree>
  );
};

export { MyAds };
