// import React from 'react';

import { AdAddButtonOne } from '../../inputs/buttons/AdAddButtonOne';

const CardThree = () => {
  return (
    <div className="card-custom card-custom-three ">
      <div className="text-center card-custom-heading fw-bold text text-color-5 py-4">
        Anuncia, compra y vende
      </div>
      <div className="text-center text text-font-georgia text-description mb-4">
        El Momento Oportuno contigo y en cualquier lugar
      </div>
      <div className="d-flex justify-content-center py-3">
        <AdAddButtonOne />
      </div>
    </div>
  );
};

export { CardThree };
