import { AcountSettingsState } from '.';
import { AppActions, AppTypes } from '..';

export const AcountSettingsReducer = (
  state: AcountSettingsState,
  action: AppActions
): AcountSettingsState => {
  switch (action.type) {
    case AppTypes.SetAcountSettings:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
