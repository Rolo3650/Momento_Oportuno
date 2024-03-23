// import React from 'react';

import { AppTypes, useAppContext } from '../../context';
import { BillingSettingsState } from '../../context/reducers/billingSettings';

const useSettings = () => {
  const { state, dispatch } = useAppContext();

  const setAcountSettings = (payload: object) => {
    dispatch({
      type: AppTypes.SetAcountSettings,
      payload: { ...state.acountSettings, ...payload },
    });
  };

  const setSocialMediaSettings = (payload: object) => {
    dispatch({
      type: AppTypes.SetSocialMediaSettings,
      payload: { ...state.socialMediaSettings, ...payload },
    });
  };

  const setBillingSettings = (payload: Partial<BillingSettingsState>) => {
    dispatch({
      type: AppTypes.SetBillingSettings,
      payload: { ...state.billingSettings, ...payload },
    });
  };

  return {
    acountSettings: state.acountSettings,
    socialMediaSettings: state.socialMediaSettings,
    billingSettings: state.billingSettings,
    setAcountSettings,
    setSocialMediaSettings,
    setBillingSettings,
  };
};

export { useSettings };
