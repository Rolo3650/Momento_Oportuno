import { useInfiniteQuery } from 'react-query';
import { FilterParams } from '../../../context';
import { AdsQuerysKeys } from '.';
import { AdsServices } from '../../../api';

type useInfiniteAdsProps = FilterParams;

export const useInfiniteAds = (params?: useInfiniteAdsProps) => {
  return useInfiniteQuery({
    queryKey: [AdsQuerysKeys.getAds, params],
    queryFn: ({ pageParam = 1 }) =>
      AdsServices.getAllAds({ page: pageParam, ...params }),
    getNextPageParam: (lastPage) => {
      if (lastPage.meta.current_page === lastPage.meta.last_page) {
        return undefined;
      }

      return lastPage.meta.current_page + 1;
    },
  });
};
