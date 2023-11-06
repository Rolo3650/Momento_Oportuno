import type { FilterState } from '.';
import { type AppActions, AppTypes } from '..';

export const filterReducer = (
  state: FilterState,
  action: AppActions
): FilterState => {
  switch (action.type) {
    case AppTypes.SetFilter:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
