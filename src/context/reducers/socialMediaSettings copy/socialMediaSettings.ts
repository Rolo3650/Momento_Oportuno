import { SocialMediaSettingsState } from '.';
import { AppActions, AppTypes } from '..';

export const SocialMediaSettingsReducer = (
  state: SocialMediaSettingsState,
  action: AppActions
): SocialMediaSettingsState => {
  switch (action.type) {
    case AppTypes.SetSocialMediaSettings:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
