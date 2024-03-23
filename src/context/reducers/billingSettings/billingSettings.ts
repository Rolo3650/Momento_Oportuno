import { BillingSettingsState } from '.';
import { AppActions, AppTypes } from '..';

export const BillingSettingsReducer = (
  state: BillingSettingsState,
  action: AppActions
): BillingSettingsState => {
  switch (action.type) {
    case AppTypes.SetBillingSettings:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
