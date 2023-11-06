// import React from 'react';

import { useLocation, useParams } from 'react-router-dom';
// import { Categorie } from '../../api';
import { useAllCategories } from '..';

// interface Option {
//   label: string;
//   value: number | string;
//   quantity?: number;
// }

const useSearch = () => {
  const params = useParams();
  const allCategories = useAllCategories();
  const location = useLocation();

  const searchCategory = () => {
    const param = params.param_category?.split(',');
    if (param && param?.length > 0) {
      const category = allCategories?.data?.data?.find(
        (category) => category.slug == param[0]
      );
      return category;
    } else return undefined;
  };

  const searchCategoryChildren = () => {
    const param = params.param_category?.split(',');
    if (param && param?.length > 1) {
      const children = searchCategory()?.children?.find(
        (child) => child.slug == param[1]
      );
      return children;
    } else return undefined;
  };

  const searchParam = (query: string) => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(query);
  };

  return { searchCategory, searchCategoryChildren, searchParam };
};

export { useSearch };
