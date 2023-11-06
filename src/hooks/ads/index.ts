// import React from 'react';

import { Ad } from '../../api';
import { AppTypes, useAppContext } from '../../context';

const useAds = () => {
  const { state, dispatch } = useAppContext();

  const setSingleAd = (ad: Ad | null, loading: boolean) => {
    dispatch({ type: AppTypes.SetAdSingle, payload: { ad, loading } });
  };

  return { adSingleState: state.adSingleState, setSingleAd };
};

export { useAds };
