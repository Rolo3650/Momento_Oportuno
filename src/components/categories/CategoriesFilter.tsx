// import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import { SelectOne } from '../inputs/selecet/SelectOne';
import { useAllCategories, useNavigateCustom, useSearch } from '../../hooks';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

interface Option {
  label: string;
  value: number | string;
  quantity?: number;
}

const CategoriesFilter = () => {
  const allCategories = useAllCategories();
  const initialState = {
    label: 'Cualquier',
    value: 0,
    quantity: 30,
  };

  const [categorySelected, setCategorySelected] =
    useState<Option>(initialState);
  const [categoryChildSelected, setCategoryChildSelected] =
    useState<Option>(initialState);
  const { searchCategory, searchCategoryChildren } = useSearch();
  const { navigatePersistParams } = useNavigateCustom();
  const params = useParams();

  const [categoryChildren, setCategoryChildren] = useState<Option[]>([]);

  const navigateCategory = (option: Option) => {
    if (option.value != 0) {
      setCategorySelected(option);
      navigatePersistParams(`/ads/${option.value}`);
    } else {
      setCategorySelected(initialState);
      navigatePersistParams('/ads/');
    }
  };

  const navigateCategoryChildren = (option: Option) => {
    if (option.value != 0) {
      setCategoryChildSelected(option);
      navigatePersistParams(`/ads/${searchCategory()?.slug},${option.value}`);
    } else {
      setCategoryChildSelected(initialState);
      navigatePersistParams(`/ads/${searchCategory()?.slug}`);
    }
  };

  useEffect(() => {
    const optionsChildren = searchCategory()?.children.map((category) => ({
      label: category.name,
      value: category.slug,
      quantity: 0,
    }));
    setCategoryChildren(optionsChildren ?? []);
    if (!searchCategoryChildren()) {
      setCategoryChildSelected(initialState);
    } else {
      setCategoryChildSelected({
        label: `${searchCategoryChildren()?.name}`,
        value: `${searchCategoryChildren()?.slug}`,
        quantity: 0,
      });
    }
    if (!searchCategory()) {
      setCategorySelected(initialState);
    } else {
      setCategorySelected({
        label: `${searchCategory()?.name}`,
        value: `${searchCategory()?.slug}`,
        quantity: 0,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params, allCategories.data?.data]);

  return (
    <div className="categories categories-filter fw-bold text text-font-rubik">
      <div className="d-flex justify-content-between align-items-center text text-color-5">
        Categoría
        <CircleIcon color="secondary" className="fs-6" />
      </div>
      <div className="mt-3">
        <SelectOne
          options={allCategories.data?.data.map((category) => ({
            label: category.name,
            value: category.slug,
            quantity: 0,
          }))}
          option={categorySelected}
          onChange={navigateCategory}
        />
        {searchCategoryChildren() == undefined && searchCategory()?.name}
      </div>
      {categoryChildren.length > 0 && (
        <div className="mt-3">
          <SelectOne
            options={categoryChildren}
            onChange={navigateCategoryChildren}
            option={categoryChildSelected}
          />
          {searchCategoryChildren()?.name}
        </div>
      )}
    </div>
  );
};

export { CategoriesFilter };
