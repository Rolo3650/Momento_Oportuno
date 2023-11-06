import { useQuery } from 'react-query';
import { StatesQuerysKeys } from './states.querys';
import { StatesServices } from '../../../api';

export const useGetStates = () => {
  return useQuery({
    queryKey: StatesQuerysKeys.getAllStates,
    queryFn: StatesServices.getAllEstados,
  });
};
