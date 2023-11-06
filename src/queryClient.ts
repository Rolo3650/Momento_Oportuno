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
      retry(failureCount, error) {
        if (error instanceof AxiosError) {
          if (error.response?.status === 404 || error.response?.status === 401)
            return false;
        }
        return failureCount < 3;
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
