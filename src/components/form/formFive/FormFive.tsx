import { TextFieldOne } from '../../inputs/text/TextFieldOne';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { useTheme, Button, Grid } from '@mui/material';
import { useSettings } from '../../../hooks';
import Swal from 'sweetalert2';
import { UsersServices } from '../../../api';
// import { useAppContext, AppTypes } from '../../../context';

const FormFive = () => {
  const theme = useTheme();
  const { billingSettings, setBillingSettings } = useSettings();
  // const { state, dispatch } = useAppContext();

  const onSubmit = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // const obj: any = {
    //   name: state.userState?.user.name,
    //   phone: state.userState?.user.phone,
    // };
    // if (billingSettings.facebook_url) {
    //   obj.facebook_url = billingSettings.facebook_url;
    // }
    // if (billingSettings.instagram_url) {
    //   obj.instagram_url = billingSettings.instagram_url;
    // }
    // if (billingSettings.twitter_url) {
    //   obj.twitter_url = billingSettings.twitter_url;
    // }
    // if (billingSettings.linkedIn_url) {
    //   obj.linkedIn_url = billingSettings.linkedIn_url;
    // }
    // if (billingSettings.tikTok_url) {
    //   obj.tikTok_url = billingSettings.tikTok_url;
    // }
    // if (billingSettings.youtube_url) {
    //   obj.youtube_url = billingSettings.youtube_url;
    // }
    // console.log('OBJREDES', obj);
    // try {
    //   const response = await UsersServices.update(obj);
    //   console.log('REDES', response);
    //   if (response?.status == 200) {
    //     Swal.fire('Listo', 'Información guardada exitosamente', 'success').then(
    //       () => {
    //         window.scrollTo(0, 0);
    //         const user = state.userState;
    //         if (user) {
    //           setBillingSettings({
    //             open: false,
    //             // completeName: state.userState?.user.name,
    //             // cellphone: state.userState?.user.phone,
    //             // userName: '',
    //             // completeName: '',
    //             // cellphone: '',
    //             // description: '',
    //           });
    //           dispatch({
    //             type: AppTypes.Login,
    //             payload: user,
    //           });
    //         }
    //       }
    //     );
    //   } else {
    //     Swal.fire(
    //       'Error',
    //       'Ocurrió un error al conectar con el servidor, por favor inténtalo en otro momento',
    //       'error'
    //     );
    //   }
    // } catch (e) {
    //   Swal.fire(
    //     'Error',
    //     'Ingresa URL válidas',
    //     'error'
    //   );
    // }

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
      billingSettings.codigo_postal
    ) {
      const response = await UsersServices.updateBillingSettings(
        billingSettings
      );

      if (response?.status === 200) {
        Swal.fire(
          'Listo',
          'Informacióneditada con éxito',
          'success'
        );
      }
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
                setBillingSettings({ rfc: e.target.value });
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
                setBillingSettings({ razon_social: e.target.value });
              }}
              value={billingSettings.razon_social}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3">
              CDFI <span className="text text-color-secondary">*</span>
            </div>
            <TextFieldOne
              color={{
                variant: 'secondary',
                text: '#464748',
                field: theme.palette.secondary.main,
                backgroundColor: '#fff',
              }}
              text="CDFI"
              icon={{ mui: <DriveFileRenameOutlineIcon color="secondary" /> }}
              onChange={(e) => {
                // const regex = /^[0-9]{0,10}$/;
                // if (regex.test(e.target.value)) {
                setBillingSettings({ uso_cfdi: e.target.value });
                // }
              }}
              value={billingSettings.uso_cfdi}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3">
              Regimen Fiscal{' '}
              <span className="text text-color-secondary">*</span>
            </div>
            <TextFieldOne
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
                setBillingSettings({ email: e.target.value });
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
                setBillingSettings({ calle: e.target.value });
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
              Colonia
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
                setBillingSettings({ colonia: e.target.value });
              }}
              value={billingSettings.colonia}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3">
              Estado
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
                setBillingSettings({ estado: e.target.value });
              }}
              value={billingSettings.estado}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3">
              Ciudad
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
                setBillingSettings({ ciudad: e.target.value });
              }}
              value={billingSettings.ciudad}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3">
              País
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
                setBillingSettings({ pais: e.target.value });
              }}
              value={billingSettings.pais}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3">
              Código Postal
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
                setBillingSettings({ codigo_postal: e.target.value });
              }}
              value={billingSettings.codigo_postal}
            />
          </Grid>
        </Grid>
      </div>
      <div className="my-4 d-flex justify-content-end">
        <Button color="secondary" variant="contained" onClick={onSubmit}>
          Guardar
        </Button>
      </div>
    </div>
  );
};

export { FormFive };
