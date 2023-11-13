import { ActionMap, AppTypes } from '..';

export type SocialMediaSettingsState = {
  open: boolean;
  facebook: string;
  instagram: string;
  twitter: string;
  youtube: string;
  linkedIn: string;
  tikTok: string;
};

export type SocialMediaSettingsPayload = {
  [AppTypes.SetSocialMediaSettings]: SocialMediaSettingsState;
};

export type SocialMediaSettingsActions =
  ActionMap<SocialMediaSettingsPayload>[keyof ActionMap<SocialMediaSettingsPayload>];
