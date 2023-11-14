import { TextFieldOne } from '../../inputs/text/TextFieldOne';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { useTheme, Button } from '@mui/material';
import { useSettings } from '../../../hooks';
import Swal from 'sweetalert2';

const FormThree = () => {
  const theme = useTheme();
  const { acountSettings, setAcountSettings } = useSettings();

  const onSubmit = () => {
    Swal.fire('Listo', 'Información guardada exitosamente', 'success').then(
      () => {
        window.scrollTo(0, 0);
        setAcountSettings({
          open: false,
          userName: '',
          completeName: '',
          cellphone: '',
          description: '',
        });
      }
    );
  };

  return (
    <div>
      <div className="mt-3">
        <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3">
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
        />
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
        <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3 mt-4">
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
        />
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
