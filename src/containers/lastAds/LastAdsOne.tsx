import React from 'react';
import { ProductOne } from '../../components/product/ProductOne';
import FinesseButton from '../../components/inputs/buttons/FinesseButton';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

interface Props {
  products: {
    id: string;
    imgs: string[];
    name: string;
    price: number;
    views: number;
    feauture?: boolean;
  }[];
  title: string;
  span: string;
}

const LastAdsOne: React.FC<Props> = ({ products, title, span }) => {
  return (
    <div className="last-ads last-ads-one mx-auto">
      <span className="badge bg-secondary text text-font-l-d fw-normal fs-6 py-2 mx-auto background background-color-15 px-3">
        Últimos anuncios
      </span>
      <div className="d-flex justify-content-between fw-bold title text text-font-georgia mt-3 mb-5 text-color-5">
        <div>
          {title} <span className="text text-color-primary">{span}</span>
        </div>
        <div className="btn-container">
          <FinesseButton
            color={{ text: 'white', background: '#FF5B52' }}
            icon={{ muiIcon: <ArrowForwardIosOutlinedIcon /> }}
            text="Ver más"
            onClick={() => {}}
          />
        </div>
      </div>
      <div className="products">
        {products?.map((product) => (
          <ProductOne product={product} />
        ))}
      </div>
    </div>
  );
};

export { LastAdsOne };
