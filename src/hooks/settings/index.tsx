// import React from 'react';

import { AppTypes, useAppContext } from '../../context';

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

  return {
    acountSettings: state.acountSettings,
    socialMediaSettings: state.socialMediaSettings,
    setAcountSettings,
    setSocialMediaSettings,
  };
};

export { useSettings };
