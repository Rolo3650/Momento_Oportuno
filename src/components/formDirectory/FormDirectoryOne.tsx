import { TextFieldOne } from '../inputs/text/TextFieldOne';
import { DropdownOne } from '../inputs/dropdown/DropdownOne';
import { useTheme } from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import WebIcon from '@mui/icons-material/Web';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WorkIcon from '@mui/icons-material/Work';
import BackupIcon from '@mui/icons-material/Backup';
import PlaceIcon from '@mui/icons-material/Place';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { useGetStates } from '../../hooks/querys/useStates';
import { GeneralButton } from '../inputs/buttons/GeneralButton';
import { useState, useEffect } from 'react';
import { useAppContext } from '../../context';
import { State } from '../../api';
import { ThemeTwo } from '../../themes/ThemeTwo';
import { Button } from '@mui/joy';
// interface Option {
//   label: string;
//   value: number | string;
//   quantity?: number;
// }

interface DirectoryAd {
  title: string;
  businessType: string;
  address: string;
//   img: string | null;
  schedule: string;
  email: string;
  phone: string;
  website: string;
  state?: State;
}

const FormDirectoryOne = () => {
  const { state } = useAppContext();
  const theme = useTheme();

  const { data } = useGetStates();

  const initialDirectoryAd: DirectoryAd = {
    title: '',
    businessType: '',
    address: '',
    schedule: '',
    email: '',
    phone: '',
    website: '',
    state: data?.data[0],
  };

  const [formData, setFormData] = useState<DirectoryAd>(initialDirectoryAd);

  useEffect(() => {
    if (!state?.userState?.token) {
      window.location.assign('/');
    }
  }, [state.userState]);

  const handleInputChange = (name: string, value: string | number) => {
    if (name === 'state') {
      const selectedState = data?.data?.find((city) => city.id === value);
      setFormData({ ...formData, state: selectedState });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

//   const onChange = (e: ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files?.length) {
//       let files: File[] = [];
//       if (newAdForm?.imgs?.length) {
//         files = [...newAdForm.imgs];
//       }
//       for (let i = 0; i < e.target.files.length; i++) {
//         if (files?.length < newAdForm.extraImgs.quantity) {
//           files.push(e.target.files[i]);
//         } else {
//           Swal.fire(
//             '¿Necesitas más imágenes?',
//             'Haz alcanzado el límite de imagens, para subir más, selecciona la cantidad de imágenes que necesitas en el apartado de arriba.',
//             'warning'
//           );
//         }
//       }
//       setFormData({ imgs: [...files] });
//     }
//   };

  const onCreateMicrositio = () => {
    console.log(formData);
  };

  return (
    <div>
      <div>
        <div className="directory-form-item">
          <TextFieldOne
            color={{
              variant: 'secondary',
              text: '#464748',
              field: theme.palette.secondary.main,
              backgroundColor: '#fff',
            }}
            text="Título de tu anuncio en directorio"
            icon={{ mui: <DriveFileRenameOutlineIcon color="secondary" /> }}
            onChange={(e) => handleInputChange('title', e.target.value)}
            value={formData.title}
          />
        </div>
        <div className="directory-form-item">
          <TextFieldOne
            color={{
              variant: 'secondary',
              text: '#464748',
              field: theme.palette.secondary.main,
              backgroundColor: '#fff',
            }}
            text="Tipo de negocio: Ej. Ferretería"
            icon={{ mui: <WorkIcon color="secondary" /> }}
            onChange={(e) => handleInputChange('businessType', e.target.value)}
            value={formData.businessType}
          />
        </div>
        <div className="directory-form-item">
          <TextFieldOne
            color={{
              variant: 'secondary',
              text: '#464748',
              field: theme.palette.secondary.main,
              backgroundColor: '#fff',
            }}
            text="Dirección"
            icon={{
              mui: (
                <PlaceIcon
                  sx={{
                    height: '30px',
                    width: '30px',
                    padding: '2px',
                    borderRadius: '5px',
                    color: 'white',
                    backgroundColor: theme.palette.secondary.main,
                  }}
                />
              ),
            }}
            onChange={(e) => handleInputChange('address', e.target.value)}
            value={formData.address}
          />
        </div>
        <div className="directory-form-item">
        <ThemeTwo>
          <Button
            sx={{
              width: '100%',
            }}
            className="py-5 fs-3"
            component="label"
            role={undefined}
            tabIndex={-1}
            variant="outlined"
            color="primary"
            startDecorator={
              <BackupIcon
                sx={{
                  fontSize: '40px',
                }}
              />
            }
          >
            Subir una Imagen
            <input
              type="file"
              className="d-none"
              multiple
              accept="image/*"
            //   onChange={onChange}
            />
          </Button>
        </ThemeTwo>
        </div>
        <div className="directory-form-item">
          <TextFieldOne
            color={{
              variant: 'secondary',
              text: '#464748',
              field: theme.palette.secondary.main,
              backgroundColor: '#fff',
            }}
            text="Horarios de funcionamiento: Ej. 8:00am - 5:00pm"
            icon={{ mui: <AccessTimeIcon color="secondary" /> }}
            onChange={(e) => handleInputChange('schedule', e.target.value)}
            value={formData.schedule}
          />
        </div>
        <div className="directory-form-item">
          <TextFieldOne
            color={{
              variant: 'secondary',
              text: '#464748',
              field: theme.palette.secondary.main,
              backgroundColor: '#fff',
            }}
            text="Email"
            icon={{ url: '/svg/icons/arr_frm.svg' }}
            onChange={(e) => handleInputChange('email', e.target.value)}
            value={formData.email}
          />
        </div>
        <div className="directory-form-item">
          <TextFieldOne
            color={{
              variant: 'secondary',
              text: '#464748',
              field: theme.palette.secondary.main,
              backgroundColor: '#fff',
            }}
            text="Teléfono"
            icon={{ url: '/svg/icons/phone_frm.svg' }}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            value={formData.phone}
          />
        </div>
        <div className="directory-form-item">
          <TextFieldOne
            color={{
              variant: 'secondary',
              text: '#464748',
              field: theme.palette.secondary.main,
              backgroundColor: '#fff',
            }}
            text="Sitio Web"
            icon={{ mui: <WebIcon color="secondary" /> }}
            onChange={(e) => handleInputChange('website', e.target.value)}
            value={formData.website}
          />
        </div>
        <div className="directory-form-item">
          <DropdownOne
            color={{
              variant: 'secondary',
              text: '#464748',
              field: theme.palette.secondary.main,
              backgroundColor: '#fff',
            }}
            text="Ciudad"
            icon={{
              muiIcon: (
                <PlaceIcon
                  sx={{
                    height: '30px',
                    width: '30px',
                    padding: '2px',
                    borderRadius: '5px',
                    color: 'white',
                    backgroundColor: theme.palette.secondary.main,
                  }}
                />
              ),
              endurl: '/svg/icons/menu_row_down.svg',
            }}
            options={data?.data?.map((city) => ({
              label: city?.name,
              value: city?.id,
              quantity: 1,
            }))}
            onChange={(option) => handleInputChange('state', option.value)}
          />
        </div>
        <div className="directory-form-item">
          <GeneralButton
            title="Crear anuncio en directorio"
            endIcon={<PostAddIcon />}
            colorPrimary="primary"
            width="350px"
            onClick={onCreateMicrositio}
          />
        </div>
      </div>
    </div>
  );
};

export { FormDirectoryOne };
