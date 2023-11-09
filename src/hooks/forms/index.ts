// import React from 'react';

import { useCallback } from 'react';
import { AppTypes, useAppContext } from '../../context';
import { NewMicrositeFormPayload } from '../../context/reducers/newMicrositeForm';

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

  const setNewMicrositeForm = useCallback(
    (payload: NewMicrositeFormPayload['SET_NEW_MICROSITE_FORM']) => {
      dispatch({
        type: AppTypes.SetNewMicrositeForm,
        payload: { ...state.newMicrositeForm, ...payload },
      });
    },
    [state.newMicrositeForm]
  );

  return {
    setNewAdForm,
    newAdForm: state.newAdForm,
    setNewDirectoryForm,
    newDirectoryForm: state.newDirectoryForm,
    setNewMicrositeForm,
    newMicrositeForm: state.newMicrositeForm,
  };
};

export { useForm };
