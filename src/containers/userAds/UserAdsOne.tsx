import React from 'react';
import { ProductOne } from '../../components/product/ProductOne';
import { Ad } from '../../api';

interface Props {
  products: Ad[];   
}

const UserAdsOne: React.FC<Props> = ({ products,  }) => {

  return (
    <div className="last-ads last-ads-one mx-auto">
      <div className="d-flex justify-content-center align-items-center fw-bold title text text-font-georgia mt-3 mb-5 text-color-5">
        <div>
          Anuncios
        </div>
        <div className="container-userads-quantity">
            <div className="container-userads-quantity-number">
                {products.length}
            </div>
        </div>
      </div>
      <div className="products">
        {products?.map((product, index) => (
          <ProductOne key={`${product?.id}-${index}`} product={product} />
        ))}
      </div>
      <div className="results d-flex">
        Mostrando<div className="number">1</div> a <div className="number">1</div> de <div className="number">{products.length}</div> resultados
      </div>
    </div>
  );
};

export { UserAdsOne };
