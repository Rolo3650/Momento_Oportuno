import React from 'react';
import { useAds } from '../../hooks';

interface Props {}

const ProductDescriptionOne: React.FC<Props> = () => {
  const { setSingleAd } = useAds();
  return <div className="product-decription product-decription-one card-custom">
    Hola
  </div>;
};

export { ProductDescriptionOne };
