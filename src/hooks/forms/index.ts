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

  const setNewDirectoryForm = (payload: object) => {
    dispatch({
      type: AppTypes.SetNewDirectoryForm,
      payload: { ...state.newDirectoryForm, ...payload },
    });
  };

  return {
    setNewAdForm,
    newAdForm: state.newAdForm,
    setNewDirectoryForm,
    newDirectoryForm: state.newDirectoryForm,
  };

};

export { useForm };
