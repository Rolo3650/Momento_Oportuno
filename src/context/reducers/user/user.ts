import { type AppActions, AppTypes } from '..';
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
      return null;
    default:
      return state;
  }
};
