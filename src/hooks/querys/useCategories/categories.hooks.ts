import { useQuery } from 'react-query';
import {
  CategoriesServices,
  GetCategoriesResponse,
  GetCategoryAttributes,
  RequestErrors,
} from '../../../api';
import { CategoriesQueryKeys } from '.';

export const useAllCategories = () => {
  return useQuery<GetCategoriesResponse, RequestErrors>({
    queryFn: CategoriesServices.getAllCategorias,
    queryKey: CategoriesQueryKeys.getAllCategories,
  });
};

export const useCategoryAttributes = (categoryId: number) => {
  return useQuery<GetCategoryAttributes, RequestErrors>({
    queryFn: () => CategoriesServices.getCategoryAttributes(categoryId),
    queryKey: [CategoriesQueryKeys.getCategoryAttributes, categoryId],
  });
};
