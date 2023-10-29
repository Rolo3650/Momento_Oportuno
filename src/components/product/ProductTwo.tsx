import React from 'react';
import { CarouselOne } from '../carousel/CarouselOne';
import { ActionsOne } from '../actions/ActionsOne';
import { Ad } from '../../api';

interface Props {
  product: Ad;
}

const ProductTwo: React.FC<Props> = ({ product }) => {
  return (
    <div
      className={`d-grid w-100 product product-two ${
        product?.is_featured ? 'feauture' : ''
      }`}
      onClick={() => {
        window.location.assign('/');
      }}
    >
      <CarouselOne product={product} />
      <div>
        <div className="info fs-5 fw-bold text text-color-5 text-font-rubik h-100">
          <div className="d-flex justify-content-between actions">
            Hola
            <ActionsOne product={product} />
          </div>
          <div className="description d-grid">
            <div className="name">{product.title}</div>
            <div className="mt-3 price">
              $
              {product.price?.toLocaleString('es-MX', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductTwo };
