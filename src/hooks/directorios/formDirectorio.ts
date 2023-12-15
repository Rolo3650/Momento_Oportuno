// import React from 'react';

import { AppTypes, useAppContext } from '../../context';

const useForm = () => {
  const { state, dispatch } = useAppContext();

  const setNewDirectoryForm = (payload: object) => {
    dispatch({
      type: AppTypes.SetNewAdForm,
      payload: { ...state.newAdForm, ...payload },
    });
  };

  return { setNewDirectoryForm, newAdForm: state.newAdForm };
};

export { useForm };