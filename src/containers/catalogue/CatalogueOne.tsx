import React, { useEffect, useState } from 'react';
import { ProductOne } from '../../components/product/ProductOne';
import { useParams } from 'react-router';
import { useSearch } from '../../hooks';
import { ProductTwo } from '../../components/product/ProductTwo';

interface Props {}

const CatalogueOne: React.FC<Props> = () => {
  const params = useParams();
  const initalStateTwo = 'card';
  const [orderByTwo, setOrderByTwo] = useState<string>(initalStateTwo);
  const { searchParam } = useSearch();

  useEffect(() => {
    if (searchParam('view')) {
      setOrderByTwo(`${searchParam('view')}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <div className={`mt-3 contain-${orderByTwo}`}>
      <div className={`mt-3 view-card`}>
        <ProductOne
          product={{
            id: 1,
            imgs: ['../img/examples/img_1.webp', '../img/examples/img_2.webp'],
            title: 'Porsche Cayman 2.7 Coupe Pdk At',
            price: 375000,
            views: 10,
            is_featured: true,
          }}
        />
      </div>
      <div className={`mt-3 view-row`}>
        <ProductTwo
          product={{
            id: 1,
            imgs: ['../img/examples/img_1.webp', '../img/examples/img_2.webp'],
            title: 'Porsche Cayman 2.7 Coupe Pdk At',
            price: 375000,
            views: 10,
            is_featured: false,
          }}
        />
        <ProductTwo
          product={{
            id: 1,
            imgs: ['../img/examples/img_1.webp', '../img/examples/img_2.webp'],
            title: 'Porsche Cayman 2.7 Coupe Pdk At',
            price: 375000,
            views: 10,
            is_featured: true,
          }}
        />
      </div>
    </div>
  );
};

export { CatalogueOne };
