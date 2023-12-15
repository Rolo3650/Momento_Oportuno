import { ActionMap, AppTypes } from '..';

export type SocialMediaSettingsState = {
  open: boolean;
  facebook_url: string;
  instagram_url: string;
  twitter_url: string;
  youtube_url: string;
  linkedIn_url: string;
  tikTok_url: string;
};

export type SocialMediaSettingsPayload = {
  [AppTypes.SetSocialMediaSettings]: SocialMediaSettingsState;
};

export type SocialMediaSettingsActions =
  ActionMap<SocialMediaSettingsPayload>[keyof ActionMap<SocialMediaSettingsPayload>];
