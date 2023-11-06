import { type AppActions, AppTypes } from '..';
import { removeToken } from '../../../utils';
import type { UserState } from './user.type';

export const userReducer = (
  state: UserState,
  action: AppActions
): UserState => {
  switch (action.type) {
    case AppTypes.Login:
      return {
        token: action.payload.token,
        user: action.payload.user,
      };
    case AppTypes.Logout:
      removeToken();
      return null;
    default:
      return state;
  }
};
