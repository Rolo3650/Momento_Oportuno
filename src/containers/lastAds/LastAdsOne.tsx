import React from 'react';
import { ProductOne } from '../../components/product/ProductOne';
import FinesseButton from '../../components/inputs/buttons/FinesseButton';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Ad } from '../../api';
import { useNavigate } from 'react-router-dom';
import { useMyFavorites } from '../../hooks';
import Slider from 'react-slick';

interface Props {
  products: Ad[] | undefined;
  title: string;
  span: string;
  state?: number;
}

const LastAdsOne: React.FC<Props> = ({ products, title, span, state }) => {
  const navigateTo = useNavigate();
  const { data: favorites } = useMyFavorites();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    appendDots: (dots: any) => (
      <div>
        <ul style={{ margin: '0px' }} className="slider-dots">
          {' '}
          {dots}{' '}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: '15px',
          height: '15px',
          borderRadius: '50%',
          backgroundColor: '#FD542A',
          marginTop: '10px',
        }}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
            onClick={() => {
              window.scroll(0, 0);
              navigateTo(`/ads?${state ? `city=${state}` : ''}`);
            }}
          />
        </div>
      </div>
      <div className="products slider">
        {Array.isArray(products) && products?.length > 1 && (
          <Slider {...settings}>
            {products?.map((product, index) => (
              <div className="slider-container">
                <ProductOne
                  key={`${product?.id}-${index}`}
                  product={product}
                  fav={favorites?.data.some((fav) => fav.id === product.id)}
                />
              </div>
            ))}
          </Slider>
        )}

        {Array.isArray(products) && products?.length == 1 && (
          <div className="slider-container" style={{ maxWidth: '300px' }}>
            <ProductOne
              key={`${products[0]?.id}-${0}`}
              product={products[0]}
              fav={favorites?.data.some((fav) => fav.id === products[0].id)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export { LastAdsOne };
