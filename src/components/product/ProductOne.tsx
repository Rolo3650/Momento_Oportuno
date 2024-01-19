import React from 'react';
import { CarouselOne } from '../carousel/CarouselOne';
import { ActionsOne } from '../actions/ActionsOne';
import { Ad, AdFavorite } from '../../api';
import { useNavigate } from 'react-router-dom';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useTheme } from '@mui/material';

interface Props {
  product: Ad | AdFavorite;
  fav?: boolean | undefined;
}

const ProductOne: React.FC<Props> = ({ product, fav }) => {
  const navigateTo = useNavigate();
  const theme = useTheme();

  // console.log(product)

  return (
    <div
      className={`w-100 product product-one ${
        product?.is_featured ? 'feauture' : ''
      }`}
    >
      <div
        onClick={() => {
          window.scrollTo(0, 0);
          if (product.is_active) {
            // window.location.assign(`/ad/${product.id}`);
            navigateTo(`/ad/${product.id}`)
          }
        }}
      >
        <CarouselOne product={product} />
        <div className="info fs-5 fw-bold text text-color-5 text-font-rubik">
          <div className="name">{product.title}</div>
          <div className="mt-3 fs-6 fw-normal d-flex align-items-center">
            {product.state?.name && <LocationOnOutlinedIcon
              sx={{
                color: 'white',
                backgroundColor: theme.palette.secondary.main,
                height: '30px',
                width: '30px',
              }}
              className='rounded'
            />}
            <span className="ms-2">{product.state?.name}</span>
          </div>
          <div className="mt-3 fs-6 fw-normal">
            {product.price && (
              <>
                $
                {product.price?.toLocaleString('es-MX', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </>
            )}
            {product?.attributes?.find((atr) => atr.id == 4) &&
            product?.attributes?.find((atr) => atr.id == 4)?.value ? (
              <>
                $
                {parseInt(
                  product?.attributes &&
                    product?.attributes?.find((atr) => atr.id == 4) &&
                    product?.attributes?.find((atr) => atr.id == 4)?.value
                    ? product?.attributes
                        ?.find((atr) => atr.id == 4)
                        ?.value?.toString() ?? '0'
                    : '0'
                )?.toLocaleString('es-MX', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </>
            ) : (
              ''
            )}
            {product?.attributes?.find((atr) => atr.id == 14) &&
            product?.attributes?.find((atr) => atr.id == 14)?.value ? (
              <>
                $
                {parseInt(
                  product?.attributes &&
                    product?.attributes?.find((atr) => atr.id == 14) &&
                    product?.attributes?.find((atr) => atr.id == 14)?.value
                    ? product?.attributes
                        ?.find((atr) => atr.id == 14)
                        ?.value?.toString() ?? '0'
                    : '0'
                )?.toLocaleString('es-MX', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </>
            ) : (
              ''
            )}
          </div>
          {location.pathname.includes('micrositio') && <div className="mt-3 fs-6 fw-normal">
              {product.description}
          </div> }
          <span className="fw-bold badge bg-secondary text-color-5 text text-font-l-d fw-normal fs-6 py-2 mx-auto background background-color-14 px-3 mt-3">
            {product.category?.name}
          </span>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center actions">
        <ActionsOne product={product} fav={fav} />
        <div className="text text-font-l-d views">{product?.views} Vistas</div>
      </div>
    </div>
  );
};

export { ProductOne };
