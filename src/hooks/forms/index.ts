// import React from 'react';

import { AppTypes, useAppContext } from '../../context';

const useForm = () => {
  const { state, dispatch } = useAppContext();

  const setNewAdForm = (payload: object) => {
    dispatch({
      type: AppTypes.SetNewAdForm,
      payload: { ...state.newAdForm, ...payload },
    });
  };

  return { setNewAdForm, newAdForm: state.newAdForm };
};

export { useForm };
