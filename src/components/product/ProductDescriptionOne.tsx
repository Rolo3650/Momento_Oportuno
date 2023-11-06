import React, { useEffect } from 'react';
import { useAds } from '../../hooks';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useTheme } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Chip } from '@mui/material';
import { NumberOne } from '../atributes/NumberOne';
import { TextOne } from '../atributes/TextOne';
import { SelectOne } from './SelectOne';

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
      <div className="my-4 d-flex px-4 justify-content-start align-items-center flex-wrap">
        <Chip
          sx={{
            borderRadius: '5px',
            fontSize: '16px',
            borderColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
          }}
          label={adSingleState?.ad?.category?.name}
          variant="outlined"
          className="text text-font-helvetica me-2 mt-2"
        />
        {adSingleState?.ad?.category?.children.map((child) => (
          <Chip
            sx={{
              borderRadius: '5px',
              fontSize: '16px',
              borderColor: '#F9A03F',
              // color: theme.palette.primary.main,y
            }}
            label={child?.name}
            variant="outlined"
            className="text text-font-helvetica me-2 mt-2"
          />
        ))}
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
      {adSingleState?.ad?.attributes?.map((attribute) => {
        if (attribute?.type == 'number') {
          return (
            <div className="my-4 px-4">
              <NumberOne atribute={attribute} />
            </div>
          );
        } else if (attribute?.type == 'text') {
          return (
            <div className="my-4 px-4">
              <TextOne atribute={attribute} />
            </div>
          );
        } else if (attribute?.type == 'select') {
          return (
            <div className="my-4 px-4">
              <SelectOne atribute={attribute} />
            </div>
          );
        }
      })}
    </div>
  );
};

export { ProductDescriptionOne };
