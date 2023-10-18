import { useMutation, useQueryClient } from 'react-query';
import { FavoritesMutationsKeys } from './favorites.mutations';
import { FavoritesServices } from '../../../api';
import { FavoritesQuerysKeys } from '../..';

export const useAddFavorite = () => {
  const qC = useQueryClient();

  return useMutation({
    mutationKey: FavoritesMutationsKeys.addFavorite,
    mutationFn: FavoritesServices.addFavorite,
    onSettled: () => {
      qC.invalidateQueries(FavoritesQuerysKeys.getMyFavorites);
    },
  });
};

export const useRemoveFavorite = () => {
  const qC = useQueryClient();

  return useMutation({
    mutationKey: FavoritesMutationsKeys.removeFavorite,
    mutationFn: FavoritesServices.removeFavorite,
    onSettled: () => {
      qC.invalidateQueries(FavoritesQuerysKeys.getMyFavorites);
    },
  });
};
