import { useMutation } from 'react-query';
import { FavoritesMutationsKeys } from './favorites.mutations';
import { FavoritesServices } from '../../../api';

export const useAddFavorite = () => {
  return useMutation({
    mutationKey: FavoritesMutationsKeys.addFavorite,
    mutationFn: FavoritesServices.addFavorite,
  });
};

export const useRemoveFavorite = () => {
  return useMutation({
    mutationKey: FavoritesMutationsKeys.removeFavorite,
    mutationFn: FavoritesServices.removeFavorite,
  });
};
