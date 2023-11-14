import { TextFieldOne } from '../../inputs/text/TextFieldOne';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { useTheme, Button } from '@mui/material';
import { useSettings } from '../../../hooks';
import Swal from 'sweetalert2';

const FormFour = () => {
  const theme = useTheme();
  const { socialMediaSettings, setSocialMediaSettings } = useSettings();

  const onSubmit = () => {
    Swal.fire('Listo', 'Información guardada exitosamente', 'success').then(
      () => {
        window.scrollTo(0, 0);
        setSocialMediaSettings({
          open: false,
          facebook: '',
          instagram: '',
          twitter: '',
          linkedIn: '',
          tikTok: '',
          youtube: '',
        });
      }
    );
  };

  return (
    <div>
      <div className="mt-3">
        <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3">
          Facebook <span className="text text-color-secondary">*</span>
        </div>
        <TextFieldOne
          color={{
            variant: 'secondary',
            text: '#464748',
            field: theme.palette.secondary.main,
            backgroundColor: '#fff',
          }}
          text="Facebook"
          icon={{ mui: <DriveFileRenameOutlineIcon color="secondary" /> }}
          onChange={(e) => {
            setSocialMediaSettings({ facebook: e.target.value });
          }}
          value={socialMediaSettings.facebook}
        />
        <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3 mt-4">
          Instagram <span className="text text-color-secondary">*</span>
        </div>
        <TextFieldOne
          color={{
            variant: 'secondary',
            text: '#464748',
            field: theme.palette.secondary.main,
            backgroundColor: '#fff',
          }}
          text="Instagram"
          icon={{ mui: <DriveFileRenameOutlineIcon color="secondary" /> }}
          onChange={(e) => {
            setSocialMediaSettings({ instagram: e.target.value });
          }}
          value={socialMediaSettings.instagram}
        />
        <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3 mt-4">
          Twitter <span className="text text-color-secondary">*</span>
        </div>
        <TextFieldOne
          color={{
            variant: 'secondary',
            text: '#464748',
            field: theme.palette.secondary.main,
            backgroundColor: '#fff',
          }}
          text="Twitter"
          icon={{ mui: <DriveFileRenameOutlineIcon color="secondary" /> }}
          onChange={(e) => {
            const regex = /^[0-9]{0,10}$/;
            if (regex.test(e.target.value)) {
              setSocialMediaSettings({ twitter: e.target.value });
            }
          }}
          value={socialMediaSettings.twitter}
        />
        <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3 mt-4">
          LinkedIn <span className="text text-color-secondary">*</span>
        </div>
        <TextFieldOne
          color={{
            variant: 'secondary',
            text: '#464748',
            field: theme.palette.secondary.main,
            backgroundColor: '#fff',
          }}
          text="LinkedIn"
          icon={{ mui: <DriveFileRenameOutlineIcon color="secondary" /> }}
          onChange={(e) => {
            setSocialMediaSettings({ linkedIn: e.target.value });
          }}
          value={socialMediaSettings.linkedIn}
        />
        <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3 mt-4">
          Youtube <span className="text text-color-secondary">*</span>
        </div>
        <TextFieldOne
          color={{
            variant: 'secondary',
            text: '#464748',
            field: theme.palette.secondary.main,
            backgroundColor: '#fff',
          }}
          text="Youtube"
          icon={{ mui: <DriveFileRenameOutlineIcon color="secondary" /> }}
          onChange={(e) => {
            setSocialMediaSettings({ youtube: e.target.value });
          }}
          value={socialMediaSettings.youtube}
        />
        <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3 mt-4">
          Tik-Tok <span className="text text-color-secondary">*</span>
        </div>
        <TextFieldOne
          color={{
            variant: 'secondary',
            text: '#464748',
            field: theme.palette.secondary.main,
            backgroundColor: '#fff',
          }}
          text="Tik-Tok"
          icon={{ mui: <DriveFileRenameOutlineIcon color="secondary" /> }}
          onChange={(e) => {
            setSocialMediaSettings({ tikTok: e.target.value });
          }}
          value={socialMediaSettings.tikTok}
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

export { FormFour };
