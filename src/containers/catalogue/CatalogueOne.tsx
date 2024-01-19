import React, { useEffect, useState } from 'react';
import { ProductOne } from '../../components/product/ProductOne';
import { useParams } from 'react-router-dom';
import { useInfiniteAds, useNavigateCustom, useSearch } from '../../hooks';
import { ProductTwo } from '../../components/product/ProductTwo';
import { Pagination, Stack, useTheme } from '@mui/material';

interface Props {}

const CatalogueOne: React.FC<Props> = () => {
  const theme = useTheme();
  const params = useParams();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [filter, setFilter] = useState<any>({});
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(1);
  const initalStateTwo = 'card';
  const [orderByTwo, setOrderByTwo] = useState<string>(initalStateTwo);
  const { searchParam, searchCategory, searchCategoryChildren } = useSearch();
  const { data: ads, hasNextPage } = useInfiniteAds(filter);
  const { navigatePersistQuery } = useNavigateCustom();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const reducer = (obj: any, query: string, property: string) => {
    if (searchParam(query)) {
      obj[property] = searchParam(query);
    } else {
      delete obj[property];
    }
  };

  const pageChange = (_e: React.ChangeEvent<unknown>, page: number) => {
    window.scroll(0, 0);
    navigatePersistQuery('page', page?.toString());
  };

  useEffect(() => {
    if (searchParam('view')) {
      setOrderByTwo(`${searchParam('view')}`);
    }
    const obj = { ...filter };
    reducer(obj, 'city', 'state');
    reducer(obj, 'keyword', 'query');
    reducer(obj, 'page', 'page');
    if (searchParam('page')) {
      const actual_page = parseInt(searchParam('page') ?? '1');
      // if (ads?.pages && ads?.pages.length < actual_page) {
      //   navigatePersistQuery('page', '1');
      // } else {
      setPage(actual_page);
      // }
    }
    if (searchCategory()) {
      obj.category = searchCategory()?.id;
    } else {
      delete obj.category;
    }
    if (searchCategoryChildren()) {
      obj.category = searchCategoryChildren()?.id;
    } else {
      // delete obj.subCategory;
    }
    if (searchParam('sort-by')) {
      obj.sortBy = searchParam('sort-by');
    }
    setFilter(obj);
    // console.log(obj)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  useEffect(() => {
    // console.log(ads)
    // console.log(searchParam('page'))
    // if (hasNextPage && pages == searchParam('page')) {
    if (ads?.pages[0].meta.last_page) {
      setPages(ads?.pages[0].meta.last_page);
    }
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasNextPage]);

  return (
    <div className={`mt-3 contain-${orderByTwo}`}>
      <div className={`mt-3 view-card`}>
        {ads?.pages[0]?.data?.map((data) => {
          const obj = { ...data };
          if (!obj.media || obj.media.length === 0) {
            obj.imgs = [ '/img/noimagen.png'];
          } else {
            obj.imgs = obj.media.map((img) => img.original_url);
          }
          return <ProductOne product={obj} />;
        })}
      </div>
      <div className={`mt-3 view-row`}>
        {ads?.pages[0]?.data?.map((data) => {
          const obj = { ...data };
          if (!obj.media || obj.media.length === 0) {
            obj.imgs = [ '/img/noimagen.png'];
          } else {
            obj.imgs = obj.media.map((img) => img.original_url);
          }
          return <ProductTwo product={obj} />;
        })}
      </div>
      <div className="pagination pagination-one d-flex justify-content-end my-3">
        <Stack color={'secondary'}>
          <Pagination
            sx={{
              '& button': {
                height: '50px',
                width: '50px',
                backgroundColor: `${theme.palette.secondary.main} !important`,
                color: `white !important`,
              },
            }}
            count={pages}
            color="secondary"
            variant="outlined"
            shape="rounded"
            // defaultPage={page}
            page={page}
            onChange={pageChange}
          />
        </Stack>
      </div>
    </div>
  );
};

export { CatalogueOne };
