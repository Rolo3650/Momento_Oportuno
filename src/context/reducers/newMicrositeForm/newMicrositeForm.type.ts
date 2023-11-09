import { ActionMap, AppTypes } from '..';
import { CreateMicrositeResponse } from '../../../api';

export type newMicrositeFormState = {
  responseForm: { data: CreateMicrositeResponse['data'] } | null;
};

export type NewMicrositeFormPayload = {
  [AppTypes.SetNewMicrositeForm]: newMicrositeFormState;
};

export type NewMicrositeFormActions =
  ActionMap<NewMicrositeFormPayload>[keyof ActionMap<NewMicrositeFormPayload>];
