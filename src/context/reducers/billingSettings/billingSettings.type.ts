import { ActionMap, AppTypes } from '..';

export type BillingSettingsState = {
  open: boolean;
  rfc: string;
  razon_social: string;
  uso_cfdi: string;
  regimen_fiscal: string;
  email: string;
  calle: string;
  numero_exterior: string;
  numero_interior: string;
  colonia: string;
  estado: string;
  ciudad: string;
  pais: string;
  codigo_postal: string;
};

export type BillingSettingsPayload = {
  [AppTypes.SetBillingSettings]: BillingSettingsState;
};

export type BillingSettingsActions =
  ActionMap<BillingSettingsPayload>[keyof ActionMap<BillingSettingsPayload>];
