// import React from 'react';

import { AdAddButtonOne } from '../../inputs/buttons/AdAddButtonOne';

const CardThree = () => {
  return (
    <div className="card-custom card-custom-three ps-5">
      <div className="card-custom-heading fw-bold text text-color-5 py-4">
        Encuentra cualquier cosa a tu alrededor
      </div>
      <div className="text text-font-georgia text-description">
        Publicar un anuncio es fácil, ¡sólo toma unos sencillos pasos! Elige la
        categoría adecuada y publica tu anuncio clasificado de forma fácil y
        rápido.
      </div>
      <div className="d-flex justify-content-center py-3">
        <AdAddButtonOne />
      </div>
    </div>
  );
};

export { CardThree };
