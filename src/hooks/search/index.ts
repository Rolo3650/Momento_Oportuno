// import React from 'react';

import { useParams } from 'react-router';
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

  return { searchCategory, searchCategoryChildren };
};

export { useSearch };
