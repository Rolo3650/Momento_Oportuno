// import React from 'react';

import { PopularCategories } from '../../categories/PopularCategories';

const CardOne = () => {
  return (
    <div className="card-custom card-custom-one">
      <div className="card-custom-heading fw-bold text text-color-5 py-4">
        Encuentra cualquier cosa a tu alrededor
      </div>
      <div className="text text-font-helvetica text-description">
        Publicar un anuncio es fácil, ¡sólo toma unos sencillos pasos! Elige la
        categoría adecuada y publica tu anuncio clasificado de forma fácil y
        rápido .
      </div>
      <div className="mt-5">
        <PopularCategories />
      </div>
    </div>
  );
};

export { CardOne };
