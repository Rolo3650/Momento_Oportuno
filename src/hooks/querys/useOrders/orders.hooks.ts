import { useQuery } from 'react-query';
import { OrdersQuerysKeys } from './orders.keys';
import { OrdersServices } from '../../../api/Orders';

export const useOrderById = (id: string | number | undefined) => {
  const idParsed = Number(id);

  return useQuery({
    queryKey: OrdersQuerysKeys.getOrderById(idParsed),
    queryFn: () => OrdersServices.myOrder({ id: idParsed }),
    enabled: !!idParsed,
  });
};
