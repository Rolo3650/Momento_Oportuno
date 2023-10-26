import React from 'react';
import { CarouselOne } from '../carousel/CarouselOne';
import { ActionsOne } from '../actions/ActionsOne';
import { Ad } from '../../api';
import { useNavigate } from 'react-router-dom';

interface Props {
  product: Ad;
}

const ProductOne: React.FC<Props> = ({ product }) => {
  const navigateTo = useNavigate();

  return (
    <div
      className={`w-100 product product-one ${
        product?.is_featured ? 'feauture' : ''
      }`}
      
    >
      <div onClick={() => {
        window.scrollTo(0, 0);
        navigateTo('/ad/13');
      }}>
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
      </div>

      <div className="d-flex justify-content-between align-items-center actions">
        <ActionsOne product={product}/>
        <div className="text text-font-l-d views">{product?.views} Vistas</div>
      </div>
    </div>
    
  );
};

export { ProductOne };
