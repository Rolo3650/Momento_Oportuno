import { useQuery } from 'react-query';
import type {
  GetPackagesResponse,
  GetUserPackages,
  RequestErrors,
  TypePackage,
} from '../../../api';
import { PackagesServices } from '../../../api';
import { PackagesQuerysKeys } from './packages.querys';

export const usePackages = (type?: TypePackage) => {
  return useQuery<GetPackagesResponse, RequestErrors>({
    queryKey: [PackagesQuerysKeys.getAllPaquetes, type],
    queryFn: () => PackagesServices.getAllPaquetes(type),
  });
};

export const useUserPackages = () => {
  return useQuery<GetUserPackages, RequestErrors>({
    queryKey: PackagesQuerysKeys.getUserPaquetes,
    queryFn: PackagesServices.getUserPaquetes,
  });
};
