import { useMutation, useQueryClient } from 'react-query';
import { UserMutationsKeys } from './user.mutations';
import {
  UsersServices,
  registerRes,
  type logInParams,
  type logInRes,
  registerParams,
} from '../../../api';
import { ZodError } from 'zod';
import { AxiosError, isAxiosError } from 'axios';
import { AppTypes, useAppContext } from '../../../context';
import { setToken } from '../../../utils';

export function useLogin(cbOnSuccess?: (data: logInRes) => void) {
  const { dispatch } = useAppContext();

  const mutation = useMutation<
    logInRes,
    ZodError | AxiosError,
    logInParams,
    unknown
  >({
    mutationFn: UsersServices.logIn,
    mutationKey: UserMutationsKeys.LOGIN,
    onSuccess: (data) => {
      cbOnSuccess?.(data);
      dispatch({
        type: AppTypes.Login,
        payload: data,
      });
      //FIXME: SHOULD DELETE THIS
      setToken(data.token);
    },
    onError: (err) => {
      if (isAxiosError(err)) {
        console.log(err.response?.data);
        if (err.response?.status === 401) {
          alert('Invalid credentials');
          return;
        }
        // alert('Something went wrong');
        return;
      }
      // alert('Something went wrong');
    },
  });

  return mutation;
}

export function useLogOut(cbOnSuccess?: () => void) {
  const { dispatch } = useAppContext();

  const qC = useQueryClient();

  const mutation = useMutation<void, unknown, void, unknown>({
    mutationFn: UsersServices.logOut,
    mutationKey: UserMutationsKeys.LOGOUT,
    onSuccess: () => {
      cbOnSuccess?.();
      dispatch({
        type: AppTypes.Logout,
      });
      qC.clear();
    },
  });

  return mutation;
}

export function useRegister(cbOnSuccess?: (data: logInRes) => void) {
  const { dispatch } = useAppContext();

  const mutation = useMutation<
    registerRes,
    ZodError | AxiosError,
    registerParams,
    unknown
  >({
    mutationFn: UsersServices.register,
    mutationKey: UserMutationsKeys.REGISTER,
    onSuccess: (data) => {
      cbOnSuccess?.(data);
      dispatch({
        type: AppTypes.Login,
        payload: data,
      });
    },
  });

  return mutation;
}
