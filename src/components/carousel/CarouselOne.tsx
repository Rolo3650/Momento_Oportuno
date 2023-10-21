import React from 'react';

interface Props {
  product: {
    id: string;
    imgs: string[];
  };
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
      className="carousel slide w-100"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner w-100">
        {product?.imgs?.map((img, index) => (
          <div className={`carousel-item w-100 ${index == 0 ? 'active' : ''}`}>
            <img src={img} className="d-block w-100" loading="lazy" />
          </div>
        ))}
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
