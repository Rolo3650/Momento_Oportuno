import React from 'react';
import { AttributeAd } from '../../api';

interface Props {
  atribute?: AttributeAd;
}

const TextOne: React.FC<Props> = ({ atribute }) => {
  return (
    <div>
      <div className="fs-4 text text-font-r-h-d text-color-5 fw-bold">
        {atribute?.name}
      </div>
      <div className="fs-6 text text-font-helvetica text-color-5">
      {atribute?.id == 14 && (
          <>
            ${' '}
            {parseInt(
              typeof atribute?.value == 'string' ? atribute?.value : '0'
            )?.toLocaleString('es-MX', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}{' '}
            MXN
          </>
        )}
        {atribute?.id != 14 && typeof atribute?.value == 'string' && atribute?.value}
      </div>
    </div>
  );
};

export { TextOne };
