import { AxiosError } from 'axios';
import { QueryClient } from 'react-query';
import { ZodError } from 'zod';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError(e) {
        if (e instanceof AxiosError) {
          console.log('ERROR ---------------___>');
          console.error(e.response?.data);
        } else if (e instanceof ZodError) {
          console.log('ERROR ---------------___>');
          console.error(e.issues);
        }
      },
    },
    mutations: {
      onError(e) {
        if (e instanceof AxiosError) {
          console.log('ERROR ---------------___>');
          console.error(e.response?.data);
        } else if (e instanceof ZodError) {
          console.log('ERROR ---------------___>');
          console.error(e.issues);
        }
      },
    },
  },
});
