import React from 'react';
import { AttributeAd } from '../../api';

interface Props {
  atribute?: AttributeAd;
}

const NumberOne: React.FC<Props> = ({ atribute }) => {
  return (
    <div>
      <div className="fs-4 text text-font-r-h-d text-color-5 fw-bold">
        {atribute?.name}
      </div>
      <div className="fs-6 text text-font-helvetica text-color-5">
        {typeof atribute?.value == 'string' && atribute?.value}
      </div>
    </div>
  );
};

export { NumberOne };
