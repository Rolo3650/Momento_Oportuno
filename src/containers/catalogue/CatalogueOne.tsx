import React, { useEffect, useState } from 'react';
import { ProductOne } from '../../components/product/ProductOne';
import { useParams } from 'react-router';
import { useInfiniteAds, useSearch } from '../../hooks';
import { ProductTwo } from '../../components/product/ProductTwo';

interface Props {}

const CatalogueOne: React.FC<Props> = () => {
  const params = useParams();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [filter, setFilter] = useState<any>({});
  const initalStateTwo = 'card';
  const [orderByTwo, setOrderByTwo] = useState<string>(initalStateTwo);
  const { searchParam, searchCategory } = useSearch();
  const { data: ads } = useInfiniteAds(filter);

  useEffect(() => {
    if (searchParam('view')) {
      setOrderByTwo(`${searchParam('view')}`);
    }
    if (searchCategory()) {
      const obj = { ...filter };
      obj.category = searchCategory()?.id;
      setFilter(obj);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <div className={`mt-3 contain-${orderByTwo}`}>
      <div className={`mt-3 view-card`}>
        {ads?.pages[0]?.data?.map((data) => {
          const obj = { ...data };
          if (!obj.imgs || obj.imgs.length === 0) {
            obj.imgs = ['/img/examples/img_1.webp', '/img/examples/img_2.webp'];
          }
          return <ProductOne product={obj} />;
        })}
      </div>
      <div className={`mt-3 view-row`}>
        {ads?.pages[0]?.data?.map((data) => {
          const obj = { ...data };
          if (!obj.imgs || obj.imgs.length === 0) {
            obj.imgs = ['/img/examples/img_1.webp', '/img/examples/img_2.webp'];
          }
          return <ProductTwo product={obj} />;
        })}
      </div>
    </div>
  );
};

export { CatalogueOne };
