import { TextFieldOne } from '../../inputs/text/TextFieldOne';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { useTheme, Button } from '@mui/material';
import { useSettings } from '../../../hooks';
import Swal from 'sweetalert2';
import { UsersServices } from '../../../api';
import { AppTypes, useAppContext } from '../../../context';
import { useEffect } from 'react';

const FormThree = () => {
  const theme = useTheme();
  const { acountSettings, setAcountSettings } = useSettings();
  const { state, dispatch } = useAppContext();

  const onSubmit = async () => {
    const obj = {
      name: state.userState?.user.name,
      phone: state.userState?.user.phone,
    };

    if (acountSettings.completeName != '' && acountSettings.completeName) {
      obj.name = acountSettings.completeName;
    }
    if (acountSettings.cellphone != '' && acountSettings.cellphone) {
      obj.phone = acountSettings.cellphone;
    }

    try {
      const response = await UsersServices.update(obj);

      // console.log(response);
      if (response?.status == 200) {
        Swal.fire('Listo', 'Información guardada exitosamente', 'success').then(
          () => {
            window.scrollTo(0, 0);
            const user = state.userState;
            if (user) {
              if (
                acountSettings.completeName != '' &&
                acountSettings.completeName
              ) {
                user.user.name = acountSettings.completeName;
              }
              if (acountSettings.cellphone != '' && acountSettings.cellphone) {
                user.user.phone = acountSettings.cellphone;
              }

              setAcountSettings({
                open: false,
                // completeName: state.userState?.user.name,
                // cellphone: state.userState?.user.phone,
                // userName: '',
                // completeName: '',
                // cellphone: '',
                // description: '',
              });

              dispatch({
                type: AppTypes.Login,
                payload: user,
              });
            }
          }
        );
      } else {
        Swal.fire(
          'Error',
          'Ocurrió un error al conectar con el servidor, por favor inténtalo en otro momento',
          'error'
        );
      }
    } catch (e) {
      Swal.fire(
        'Error',
        'Ocurrió un error al conectar con el servidor, por favor inténtalo en otro momento',
        'error'
      );
    }
  };

  useEffect(() => {
    setAcountSettings({
      // open: false,
      completeName: state.userState?.user.name,
      cellphone: state.userState?.user.phone,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="mt-3">
        {/* <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3">
          Nombre de Usuario <span className="text text-color-secondary">*</span>
        </div>
        <TextFieldOne
          color={{
            variant: 'secondary',
            text: '#464748',
            field: theme.palette.secondary.main,
            backgroundColor: '#fff',
          }}
          text="Nombre de Usuario"
          icon={{ mui: <DriveFileRenameOutlineIcon color="secondary" /> }}
          onChange={(e) => {
            setAcountSettings({ userName: e.target.value });
          }}
          value={acountSettings.userName}
        /> */}
        <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3 mt-4">
          Nombre completo <span className="text text-color-secondary">*</span>
        </div>
        <TextFieldOne
          color={{
            variant: 'secondary',
            text: '#464748',
            field: theme.palette.secondary.main,
            backgroundColor: '#fff',
          }}
          text="Nombre completo"
          icon={{ mui: <DriveFileRenameOutlineIcon color="secondary" /> }}
          onChange={(e) => {
            setAcountSettings({ completeName: e.target.value });
          }}
          value={acountSettings.completeName}
        />
        <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3 mt-4">
          Número telefónico <span className="text text-color-secondary">*</span>
        </div>
        <TextFieldOne
          color={{
            variant: 'secondary',
            text: '#464748',
            field: theme.palette.secondary.main,
            backgroundColor: '#fff',
          }}
          text="Número telefónico"
          icon={{ mui: <DriveFileRenameOutlineIcon color="secondary" /> }}
          onChange={(e) => {
            const regex = /^[0-9]{0,10}$/;
            if (regex.test(e.target.value)) {
              setAcountSettings({ cellphone: e.target.value });
            }
          }}
          value={acountSettings.cellphone}
        />
        {/* <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3 mt-4">
          Descripción de Perfil{' '}
          <span className="text text-color-secondary">*</span>
        </div>
        <TextFieldOne
          color={{
            variant: 'secondary',
            text: '#464748',
            field: theme.palette.secondary.main,
            backgroundColor: '#fff',
          }}
          text="Descripción de Perfil"
          icon={{ mui: <DriveFileRenameOutlineIcon color="secondary" /> }}
          onChange={(e) => {
            setAcountSettings({ description: e.target.value });
          }}
          value={acountSettings.description}
        /> */}
      </div>
      <div className="my-4 d-flex justify-content-end">
        <Button color="secondary" variant="contained" onClick={onSubmit}>
          Guardar
        </Button>
      </div>
    </div>
  );
};

export { FormThree };
