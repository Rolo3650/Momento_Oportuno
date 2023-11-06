import { useInfiniteQuery, useMutation, useQuery } from 'react-query';
import { FilterParams } from '../../../context';
import { AdsQuerysKeys } from '.';
import {
  AdsServices,
  CreateAnuncioParams,
  CreateAnuncioResponse,
  GetAdByIdResponse,
  GetAllAdsResponse,
  RequestErrors,
} from '../../../api';

export type useInfiniteAdsProps = FilterParams;

export const useInfiniteAds = (params?: useInfiniteAdsProps) => {
  return useInfiniteQuery<GetAllAdsResponse, RequestErrors, GetAllAdsResponse>({
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

export const useAdById = (id: string | number) => {
  return useInfiniteQuery<GetAdByIdResponse, RequestErrors, GetAdByIdResponse>({
    queryKey: [AdsQuerysKeys.getAd, id],
    queryFn: () => AdsServices.getAd(id),
  });
};

export const useMyAds = ({ page }: { page?: number }) => {
  return useQuery<GetAllAdsResponse, RequestErrors>({
    queryKey: [AdsQuerysKeys.getMyAds],
    queryFn: () => AdsServices.getMyAds({ page }),
  });
};

export const useCreateAnuncio = () => {
  return useMutation<CreateAnuncioResponse, RequestErrors, CreateAnuncioParams>(
    {
      mutationKey: AdsQuerysKeys.createAdd,
      mutationFn: AdsServices.createAd,
    }
  );
};
