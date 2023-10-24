import { AppActions, AppTypes } from '..';
import { AdSingleState } from './adSingle.type';

export const adSingleReducer = (
  state: AdSingleState,
  action: AppActions
): AdSingleState => {
  switch (action.type) {
    case AppTypes.SetAdSingle:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
