import { TextFieldOne } from '../../inputs/text/TextFieldOne';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { useTheme, Button } from '@mui/material';
import { useSettings } from '../../../hooks';
import Swal from 'sweetalert2';
import { UsersServices } from '../../../api';
import { useAppContext, AppTypes } from '../../../context';

const FormFour = () => {
  const theme = useTheme();
  const { socialMediaSettings, setSocialMediaSettings } = useSettings();
  const { state, dispatch } = useAppContext();

  const onSubmit = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const obj: any = {
      name: state.userState?.user.name,
      phone: state.userState?.user.phone,
    };

    if (socialMediaSettings.facebook_url) {
      obj.facebook_url = socialMediaSettings.facebook_url;
    }
    if (socialMediaSettings.instagram_url) {
      obj.instagram_url = socialMediaSettings.instagram_url;
    }
    if (socialMediaSettings.twitter_url) {
      obj.twitter_url = socialMediaSettings.twitter_url;
    }
    if (socialMediaSettings.linkedIn_url) {
      obj.linkedIn_url = socialMediaSettings.linkedIn_url;
    }
    if (socialMediaSettings.tikTok_url) {
      obj.tikTok_url = socialMediaSettings.tikTok_url;
    }
    if (socialMediaSettings.youtube_url) {
      obj.youtube_url = socialMediaSettings.youtube_url;
    }

    console.log('OBJREDES', obj);

    try {
      const response = await UsersServices.update(obj);

      console.log('REDES', response);

      if (response?.status == 200) {
        Swal.fire('Listo', 'Información guardada exitosamente', 'success').then(
          () => {
            window.scrollTo(0, 0);
            const user = state.userState;
            if (user) {
              setSocialMediaSettings({
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
        'Ingresa URL válidas',
        'error'
      );
    }
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
            setSocialMediaSettings({ facebook_url: e.target.value });
          }}
          value={socialMediaSettings.facebook_url}
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
            setSocialMediaSettings({ instagram_url: e.target.value });
          }}
          value={socialMediaSettings.instagram_url}
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
              setSocialMediaSettings({ twitter_url: e.target.value });
            }
          }}
          value={socialMediaSettings.twitter_url}
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
            setSocialMediaSettings({ linkedIn_url: e.target.value });
          }}
          value={socialMediaSettings.linkedIn_url}
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
            setSocialMediaSettings({ youtube_url: e.target.value });
          }}
          value={socialMediaSettings.youtube_url}
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
            setSocialMediaSettings({ tikTok_url: e.target.value });
          }}
          value={socialMediaSettings.tikTok_url}
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
