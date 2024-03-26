import { TextFieldOne } from '../../inputs/text/TextFieldOne';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { useTheme, Button, Grid } from '@mui/material';
import { useSettings } from '../../../hooks';
import Swal from 'sweetalert2';
import { UsersServices } from '../../../api';
import { SelectTwo } from '../../inputs/select/SelectTwo';
import { OrdersServices } from '../../../api/Orders';
import { useNavigate } from 'react-router';
// import { useAppContext, AppTypes } from '../../../context';

interface Option {
  label: string;
  value: number | string;
  quantity?: number;
}

const FormFive = () => {
  const theme = useTheme();
  const { billingSettings, setBillingSettings } = useSettings();

  const optionsCFDI: Option[] = [
    {
      label: 'Adquisición de mercancías (G01)',
      value: 'G01',
    },
    {
      label: 'Devoluciones, descuentos o bonificaciones (G02)',
      value: 'G02',
    },
    {
      label: 'Gastos en general (G03)',
      value: 'G03',
    },
    {
      label: 'Construcciones (I01)',
      value: 'I01',
    },
    {
      label: 'Mobiliario y equipo de oficina por inversiones (I02)',
      value: 'I02',
    },
    {
      label: 'Equipo de transporte (I03)',
      value: 'I03',
    },
    {
      label: 'Equipo de computo y accesorios (I04)',
      value: 'I04',
    },
    {
      label: 'Dados, troqueles, moldes, matrices y herramental (I05)',
      value: 'I05',
    },
    {
      label: 'Comunicaciones telefónicas (I06)',
      value: 'I06',
    },
    {
      label: 'Comunicaciones satelitales (I07)',
      value: 'I07',
    },
    {
      label: 'Otra maquinaria y equipo (I08)',
      value: 'I08',
    },
    {
      label: 'Honorarios médicos, dentales y gastos hospitalarios (D01)',
      value: 'D01',
    },
    {
      label: 'Gastos médicos por incapacidad o discapacidad (D02)',
      value: 'D02',
    },
    {
      label: 'Gastos funerales (D03)',
      value: 'D03',
    },
    {
      label: 'Donativos (D04)',
      value: 'D04',
    },
    {
      label:
        'Intereses reales efectivamente pagados por créditos hipotecarios (casa habitación) (D05)',
      value: 'D05',
    },
    {
      label: 'Aportaciones voluntarias al SAR (D06)',
      value: 'D06',
    },
    {
      label: 'Primas por seguros de gastos médicos (D07)',
      value: 'D07',
    },
    {
      label: 'Gastos de transportación escolar obligatoria (D08)',
      value: 'D08',
    },
    {
      label:
        'Depósitos en cuentas para el ahorro, primas que tengan como base planes de pensiones (D09)',
      value: 'D09',
    },
    {
      label: 'Pagos por servicios educativos (colegiaturas) (D10)',
      value: 'D10',
    },
    {
      label: 'Sin efectos fiscales (S01)',
      value: 'S01',
    },
    {
      label: 'Pagos (CP01)',
      value: 'CP01',
    },
    {
      label: 'Nómina (CN01)',
      value: 'CN01',
    },
  ];

  const optionsRegimen: Option[] = [
    {
      label: 'General de Ley Personas Morales (601)',
      value: '601',
    },
    {
      label: 'Personas Morales con Fines no Lucrativos (603)',
      value: '603',
    },
    {
      label: 'Sueldos y Salarios e Ingresos Asimilados a Salarios (605)',
      value: '605',
    },
    {
      label: 'Arrendamiento (606)',
      value: '606',
    },
    {
      label: 'Régimen de Enajenación o Adquisición de Bienes (607)',
      value: '607',
    },
    {
      label: 'Demás ingresos (608)',
      value: '608',
    },
    {
      label:
        'Residentes en el Extranjero sin Establecimiento Permanente en México (610)',
      value: '610',
    },
    {
      label: 'Ingresos por Dividendos (socios y accionistas) (611)',
      value: '611',
    },
    {
      label: 'Personas Físicas con Actividades Empresariales y Profesionales (612)',
      value: '612',
    },
    {
      label: 'Ingresos por intereses (614)',
      value: '614',
    },
    {
      label: 'Régimen de los ingresos por obtención de premios (615)',
      value: '615	',
    },
    {
      label: 'Sin obligaciones fiscales (616)',
      value: '616',
    },
    {
      label:
        'Sociedades Cooperativas de Producción que optan por diferir sus ingresos (620)',
      value: '620',
    },
    {
      label: 'Incorporación Fiscal (621)',
      value: '621',
    },
    {
      label: 'Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras (622)',
      value: '622',
    },
    {
      label: 'Opcional para Grupos de Sociedades (623)',
      value: '623',
    },
    {
      label: 'Coordinados (624)',
      value: '624',
    },
    {
      label:
        'Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas (625)',
      value: '625',
    },
    {
      label: 'Régimen Simplificado de Confianza (626)',
      value: '626',
    },
  ];

  const navigateTo = useNavigate();
  // const { state, dispatch } = useAppContext();

  const onSubmit = async () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (
      billingSettings.rfc &&
      billingSettings.razon_social &&
      billingSettings.uso_cfdi &&
      billingSettings.regimen_fiscal &&
      billingSettings.email &&
      billingSettings.calle &&
      billingSettings.numero_exterior &&
      billingSettings.colonia &&
      billingSettings.estado &&
      billingSettings.ciudad &&
      billingSettings.pais &&
      billingSettings.codigo_postal &&
      emailRegex.test(billingSettings.email)
    ) {
      const response = await UsersServices.updateBillingSettings(
        billingSettings
      );

      if (response?.status === 200) {
        if (billingSettings.id) {
          try {
            const response2 = await OrdersServices.createBilling({
              id: `${billingSettings.id}`,
            });

            if (response2?.status === 200) {
              Swal.fire(
                'Listo',
                'Factura enviada a tu correo con éxito',
                'success'
              );
            } else {
              Swal.fire(
                'Error',
                'Error al generar la factura, por favor verifica los datos de facturación',
                'error'
              );
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } catch (e: any) {
            if (
              e?.response?.data?.error ===
              'This order has already been invoiced'
            ) {
              Swal.fire('Error', 'La órden ya ha sido facturada', 'error');
            } else {
              Swal.fire(
                'Error',
                'Error al generar la factura, por favor verifica los datos de facturación',
                'error'
              );
            }
          }
        } else {
          Swal.fire('Listo', 'Informacióneditada con éxito', 'success');
        }
      } else {
        Swal.fire(
          'Error',
          'Error al guardar la información, por favor intentalo más tarde',
          'error'
        );
      }
    } else if (!emailRegex.test(billingSettings.email)) {
      Swal.fire('Error', 'Ingresa un correo válido', 'error');
    } else {
      Swal.fire('Error', 'Completa todos los campos obligatorios (*)', 'error');
    }
  };

  return (
    <div>
      <div className="mt-3">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3">
              RFC <span className="text text-color-secondary">*</span>
            </div>
            <TextFieldOne
              color={{
                variant: 'secondary',
                text: '#464748',
                field: theme.palette.secondary.main,
                backgroundColor: '#fff',
              }}
              text="RFC"
              icon={{ mui: <DriveFileRenameOutlineIcon color="secondary" /> }}
              onChange={(e) => {
                setBillingSettings({
                  rfc: e.target.value?.toLocaleUpperCase(),
                });
              }}
              value={billingSettings.rfc}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3">
              Razón Social <span className="text text-color-secondary">*</span>
            </div>
            <TextFieldOne
              color={{
                variant: 'secondary',
                text: '#464748',
                field: theme.palette.secondary.main,
                backgroundColor: '#fff',
              }}
              text="Razón Social"
              icon={{ mui: <DriveFileRenameOutlineIcon color="secondary" /> }}
              onChange={(e) => {
                setBillingSettings({
                  razon_social: e.target.value?.toLocaleUpperCase(),
                });
              }}
              value={billingSettings.razon_social}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3">
              Uso de CFDI <span className="text text-color-secondary">*</span>
            </div>
            {/* <TextFieldOne
              color={{
                variant: 'secondary',
                text: '#464748',
                field: theme.palette.secondary.main,
                backgroundColor: '#fff',
              }}
              text="Uso de CFDI"
              icon={{ mui: <DriveFileRenameOutlineIcon color="secondary" /> }}
              onChange={(e) => {
                // const regex = /^[0-9]{0,10}$/;
                // if (regex.test(e.target.value)) {
                setBillingSettings({ uso_cfdi: e.target.value });
                // }
              }}
              value={billingSettings.uso_cfdi}
            /> */}
            <SelectTwo
              label="Uso de CFDI"
              options={optionsCFDI}
              option={optionsCFDI.find(
                (option) => option.value == billingSettings.uso_cfdi
              )}
              onChange={(option) => {
                setBillingSettings({ uso_cfdi: `${option.value}` });
              }}
              height="70px"
              color={theme.palette.secondary.main}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3">
              Régimen Fiscal{' '}
              <span className="text text-color-secondary">*</span>
            </div>
            {/* <TextFieldOne
              color={{
                variant: 'secondary',
                text: '#464748',
                field: theme.palette.secondary.main,
                backgroundColor: '#fff',
              }}
              text="Regimen Fiscal"
              icon={{ mui: <DriveFileRenameOutlineIcon color="secondary" /> }}
              onChange={(e) => {
                setBillingSettings({ regimen_fiscal: e.target.value });
              }}
              value={billingSettings.regimen_fiscal}
            /> */}
            <SelectTwo
              label="Régimen Fiscal"
              options={optionsRegimen}
              option={optionsRegimen.find(
                (option) => option.value == billingSettings.regimen_fiscal
              )}
              onChange={(option) => {
                setBillingSettings({ regimen_fiscal: `${option.value}` });
              }}
              height="70px"
              color={theme.palette.secondary.main}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3">
              Email <span className="text text-color-secondary">*</span>
            </div>
            <TextFieldOne
              color={{
                variant: 'secondary',
                text: '#464748',
                field: theme.palette.secondary.main,
                backgroundColor: '#fff',
              }}
              text="Email"
              icon={{ mui: <DriveFileRenameOutlineIcon color="secondary" /> }}
              onChange={(e) => {
                setBillingSettings({
                  email: e.target.value?.toLocaleLowerCase(),
                });
              }}
              value={billingSettings.email}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3">
              Calle <span className="text text-color-secondary">*</span>
            </div>
            <TextFieldOne
              color={{
                variant: 'secondary',
                text: '#464748',
                field: theme.palette.secondary.main,
                backgroundColor: '#fff',
              }}
              text="Calle"
              icon={{ mui: <DriveFileRenameOutlineIcon color="secondary" /> }}
              onChange={(e) => {
                setBillingSettings({ calle: e.target.value?.toUpperCase() });
              }}
              value={billingSettings.calle}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3">
              Número Exterior{' '}
              <span className="text text-color-secondary">*</span>
            </div>
            <TextFieldOne
              color={{
                variant: 'secondary',
                text: '#464748',
                field: theme.palette.secondary.main,
                backgroundColor: '#fff',
              }}
              text="Número Exterior"
              icon={{ mui: <DriveFileRenameOutlineIcon color="secondary" /> }}
              onChange={(e) => {
                setBillingSettings({ numero_exterior: e.target.value });
              }}
              value={billingSettings.numero_exterior}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3">
              Número Interior
            </div>
            <TextFieldOne
              color={{
                variant: 'secondary',
                text: '#464748',
                field: theme.palette.secondary.main,
                backgroundColor: '#fff',
              }}
              text="Número Interior"
              icon={{ mui: <DriveFileRenameOutlineIcon color="secondary" /> }}
              onChange={(e) => {
                setBillingSettings({ numero_interior: e.target.value });
              }}
              value={billingSettings.numero_interior}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3">
              Colonia <span className="text text-color-secondary">*</span>
            </div>
            <TextFieldOne
              color={{
                variant: 'secondary',
                text: '#464748',
                field: theme.palette.secondary.main,
                backgroundColor: '#fff',
              }}
              text="Colonia"
              icon={{ mui: <DriveFileRenameOutlineIcon color="secondary" /> }}
              onChange={(e) => {
                setBillingSettings({
                  colonia: e.target.value?.toLocaleUpperCase(),
                });
              }}
              value={billingSettings.colonia}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3">
              Ubicación <span className="text text-color-secondary">*</span>
            </div>
            <TextFieldOne
              color={{
                variant: 'secondary',
                text: '#464748',
                field: theme.palette.secondary.main,
                backgroundColor: '#fff',
              }}
              text="Ubicación"
              icon={{ mui: <DriveFileRenameOutlineIcon color="secondary" /> }}
              onChange={(e) => {
                setBillingSettings({
                  estado: e.target.value?.toLocaleUpperCase(),
                });
              }}
              value={billingSettings.estado}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3">
              Ciudad <span className="text text-color-secondary">*</span>
            </div>
            <TextFieldOne
              color={{
                variant: 'secondary',
                text: '#464748',
                field: theme.palette.secondary.main,
                backgroundColor: '#fff',
              }}
              text="Ciudad"
              icon={{ mui: <DriveFileRenameOutlineIcon color="secondary" /> }}
              onChange={(e) => {
                setBillingSettings({
                  ciudad: e.target.value?.toLocaleUpperCase(),
                });
              }}
              value={billingSettings.ciudad}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3">
              País <span className="text text-color-secondary">*</span>
            </div>
            <TextFieldOne
              color={{
                variant: 'secondary',
                text: '#464748',
                field: theme.palette.secondary.main,
                backgroundColor: '#fff',
              }}
              text="País"
              icon={{ mui: <DriveFileRenameOutlineIcon color="secondary" /> }}
              onChange={(e) => {
                setBillingSettings({
                  pais: e.target.value?.toLocaleUpperCase(),
                });
              }}
              value={billingSettings.pais}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3">
              Código Postal <span className="text text-color-secondary">*</span>
            </div>
            <TextFieldOne
              color={{
                variant: 'secondary',
                text: '#464748',
                field: theme.palette.secondary.main,
                backgroundColor: '#fff',
              }}
              text="Código Postal"
              icon={{ mui: <DriveFileRenameOutlineIcon color="secondary" /> }}
              onChange={(e) => {
                const regexCode = /^[0-9]{0,5}$/;

                if (regexCode.test(e.target.value)) {
                  setBillingSettings({ codigo_postal: e.target.value });
                }
              }}
              value={billingSettings.codigo_postal}
            />
          </Grid>
        </Grid>
      </div>
      <div className="my-4 d-flex justify-content-end">
        <Button
          className="me-5"
          color="secondary"
          variant="contained"
          onClick={onSubmit}
        >
          {billingSettings.id ? 'Guardar y facturar' : 'Guardar'}
        </Button>
        {billingSettings.id != null && billingSettings.id != undefined && (
          <Button
            color="secondary"
            variant="contained"
            onClick={() => {
              navigateTo(`/comprobante/${billingSettings.id}`);
            }}
          >
            Regresar
          </Button>
        )}
      </div>
    </div>
  );
};

export { FormFive };
