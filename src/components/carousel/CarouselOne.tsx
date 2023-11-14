import React from 'react';
import { Ad, AdFavorite } from '../../api';

interface Props {
  product: Ad | AdFavorite;
}

const CarouselOne: React.FC<Props> = ({ product }) => {
  const onClickNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  const onClickBefore = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      id={`carouserl-${product?.id}`}
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner w-100">
        {product?.media &&
          product?.media?.map((img, index) => (
            <div
              key={img.original_url}
              className={`carousel-item w-100 ${index == 0 ? 'active' : ''}`}
            >
              <div className="carousel-item-container w-100 d-flex align-items-center justify-content-center">
                <img
                  src={img.original_url}
                  className="d-block"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        {(!product?.media?.length || product?.media?.length == 0) && (
          <>
            <div
              key={'/img/examples/img_1.webp'}
              className={`carousel-item w-100 active`}
            >
              <div className="w-100 d-flex align-items-center justify-content-center">
                <img
                  src={'/img/examples/img_1.webp'}
                  className="d-block"
                  loading="lazy"
                />
              </div>
            </div>
            <div
              key={'/img/examples/img_2.webp'}
              className={`carousel-item w-100 active`}
            >
              <div className="w-100 d-flex align-items-center justify-content-center">
                <img
                  src={'/img/examples/img_2.webp'}
                  className="d-block"
                  loading="lazy"
                />
              </div>
            </div>
          </>
        )}
      </div>
      <button
        className="carousel-control carousel-control-prev"
        type="button"
        data-bs-target={`#carouserl-${product?.id}`}
        data-bs-slide="prev"
        onClick={onClickBefore}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className=" carousel-control carousel-control-next"
        type="button"
        data-bs-target={`#carouserl-${product?.id}`}
        data-bs-slide="next"
        onClick={onClickNext}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export { CarouselOne };
