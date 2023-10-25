import React, { useEffect } from 'react';
import { useAds } from '../../hooks';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useTheme } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Chip } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

interface Props {}

const ProductDescriptionOne: React.FC<Props> = () => {
  const { adSingleState } = useAds();
  const theme = useTheme();

  useEffect(() => {
    console.log(adSingleState);
  }, [adSingleState]);

  return (
    <div className="product-decription product-decription-one card-custom">
      <div className="d-flex my-4 px-4 justify-content-between align-items-center">
        <div>
          <AccessTimeIcon
            sx={{
              color: 'white',
              backgroundColor: theme.palette.secondary.main,
            }}
            className=" p-1 rounded-circle"
          />
          {adSingleState?.ad?.create_at?.toLocaleDateString && (
            <span className="fs-bold ms-2 text text-font-helvetica">
              {adSingleState?.ad?.create_at?.toLocaleDateString()}
            </span>
          )}
        </div>
        <div>
          <VisibilityIcon
            sx={{
              color: 'white',
              backgroundColor: theme.palette.secondary.main,
            }}
            className=" p-1 rounded-circle"
          />
          {adSingleState?.ad?.create_at?.toLocaleDateString && (
            <span className="fs-bold ms-2 text text-font-helvetica">
              {adSingleState?.ad?.create_at?.toLocaleDateString()}
            </span>
          )}
        </div>
      </div>
      <div className="my-4 d-flex px-4 justify-content-between align-items-center">
        <div className="fs-3 text text-font-r-h-d text-color-5 fw-bold">
          {adSingleState?.ad?.title}
        </div>
      </div>
      <div className="my-4 d-flex px-4 justify-content-between align-items-center">
        <Chip
          sx={{
            borderRadius: '5px',
            fontSize: '16px',
            borderColor: '#F9A03F',
          }}
          label={adSingleState?.ad?.category.name}
          variant="outlined"
          className="text text-font-helvetica"
        />
      </div>
      <div className="my-4 d-flex px-4 justify-content-between align-items-center">
        <div className="fs-3 text text-font-r-h-d text-color-5 fw-bold">
          {adSingleState?.ad?.price?.toLocaleString('es-MX')}
        </div>
      </div>
      <div className="my-4 d-flex px-4 justify-content-between align-items-center">
        <div className="fs-4 text text-font-r-h-d text-color-5 fw-bold">
          Descripción
        </div>
      </div>
      <div className="my-4 d-flex px-4 justify-content-between align-items-center">
        <div className="fs-6 text text-font-helvetica text-color-5">
          {adSingleState?.ad?.description}
          <br />
          <br />
          Seminuevos Certificados y Garantía de 1 año en Transmisión y Motor*
          <br />
          <br />
          Tenemos una nueva manera de vender y comprar autos seminuevos. +140
          autos certificados y garantizados. Tenemos un crédito sin revisar
          buró. Contamos con los mejores planes de Financiamiento.
        </div>
      </div>
      <div className="my-4 d-flex px-4 justify-content-between align-items-center">
        <div className="fs-4 text text-font-r-h-d text-color-5 fw-bold">
          Características
        </div>
      </div>
      <div className="my-4 px-4">
        <div className="row my-3 w-100">
          <div className="col d-flex align-items-center">
            <CheckIcon
              sx={{
                background: theme?.palette?.primary.main,
                color: 'white',
              }}
              className="p-1 rounded-circle"
            />
            <span className="ms-3 fs-6">ABS</span>
          </div>
          <div className="col d-flex align-items-center">
            <CheckIcon
              sx={{
                background: theme?.palette?.primary.main,
                color: 'white',
              }}
              className="p-1 rounded-circle"
            />
            <span className="ms-3 fs-6">Arranque sin llave</span>
          </div>
        </div>
        <div className="row my-3 w-100">
          <div className="col d-flex align-items-center">
            <CheckIcon
              sx={{
                background: theme?.palette?.primary.main,
                color: 'white',
              }}
              className="p-1 rounded-circle"
            />
            <span className="ms-3 fs-6">ABS</span>
          </div>
          <div className="col d-flex align-items-center">
            <CheckIcon
              sx={{
                background: theme?.palette?.primary.main,
                color: 'white',
              }}
              className="p-1 rounded-circle"
            />
            <span className="ms-3 fs-6">Arranque sin llave</span>
          </div>
        </div>
        <div className="row my-3 w-100">
          <div className="col d-flex align-items-center">
            <CheckIcon
              sx={{
                background: theme?.palette?.primary.main,
                color: 'white',
              }}
              className="p-1 rounded-circle"
            />
            <span className="ms-3 fs-6">ABS</span>
          </div>
          <div className="col d-flex align-items-center">
            <CheckIcon
              sx={{
                background: theme?.palette?.primary.main,
                color: 'white',
              }}
              className="p-1 rounded-circle"
            />
            <span className="ms-3 fs-6">Arranque sin llave</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductDescriptionOne };
