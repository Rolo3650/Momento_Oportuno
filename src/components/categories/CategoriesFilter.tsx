// import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import { SelectOne } from '../inputs/selecet/SelectOne';
import { useAllCategories, useSearch } from '../../hooks';
import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';

interface Option {
  label: string;
  value: number | string;
  quantity?: number;
}

const CategoriesFilter = () => {
  const allCategories = useAllCategories();
  const [categorySelected, setCategorySelected] = useState<Option>({
    label: 'Cualquier',
    value: 0,
    quantity: 30,
  });
  const [categoryChildSelected, setCategoryChildSelected] = useState<Option>({
    label: 'Cualquier',
    value: 0,
    quantity: 30,
  });
  const { searchCategory, searchCategoryChildren } = useSearch();
  const navigateTo = useNavigate();
  const params = useParams();

  const [categoryChildren, setCategoryChildren] = useState<Option[]>([]);

  const navigateCategory = (option: Option) => {
    if (option.value != 0) {
      setCategorySelected(option);
      navigateTo(`/ads/${option.value}`);
    } else {
      setCategorySelected({
        label: 'Cualquier',
        value: 0,
        quantity: 30,
      });
      navigateTo('/ads/');
    }
  };

  const navigateCategoryChildren = (option: Option) => {
    if (option.value != 0) {
      setCategoryChildSelected(option);
      navigateTo(`/ads/${searchCategory()?.slug},${option.value}`);
    } else {
      setCategoryChildSelected({
        label: 'Cualquier',
        value: 0,
        quantity: 30,
      });
      navigateTo(`/ads/${searchCategory()?.slug}`);
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
      setCategoryChildSelected({
        label: 'Cualquier',
        value: 0,
        quantity: 30,
      });
    }
    if (!searchCategory()) {
      setCategorySelected({
        label: 'Cualquier',
        value: 0,
        quantity: 30,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

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
