import React from 'react';
import { CarouselOne } from '../carousel/CarouselOne';
import { ActionsOne } from '../actions/ActionsOne';
import { Ad } from '../../api';

interface Props {
  product: Ad;
}

const ProductOne: React.FC<Props> = ({ product }) => {
  return (
    <div
      className={`w-100 product product-one ${
        product?.is_featured ? 'feauture' : ''
      }`}
      onClick={() => {
        window.location.assign('/');
      }}
    >
      <CarouselOne product={product} />
      <div className="info fs-5 fw-bold text text-color-5 text-font-rubik">
        <div className="name">{product.title}</div>
        <div className="mt-3">
          $
          {product.price?.toLocaleString('es-MX', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center actions">
        <ActionsOne />
        <div className="text text-font-l-d views">{product?.views} Vistas</div>
      </div>
    </div>
  );
};

export { ProductOne };