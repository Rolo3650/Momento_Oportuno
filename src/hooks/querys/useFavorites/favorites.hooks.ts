import { useQuery } from 'react-query';
import { FavoritesQuerysKeys } from './favorites.querys';
import {
  FavoritesServices,
  type GetMyFavoritesResponse,
  type RequestErrors,
} from '../../../api';

export const useMyFavorites = () => {
  return useQuery<GetMyFavoritesResponse, RequestErrors>({
    queryKey: FavoritesQuerysKeys.getMyFavorites,
    queryFn: FavoritesServices.getMyFavorites,
  });
};
