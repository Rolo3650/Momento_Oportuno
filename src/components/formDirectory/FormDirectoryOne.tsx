import { TextFieldOne } from '../inputs/text/TextFieldOne';
import { DropdownOne } from '../inputs/dropdown/DropdownOne';
import { IconButton, useTheme } from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import WebIcon from '@mui/icons-material/Web';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WorkIcon from '@mui/icons-material/Work';
import BackupIcon from '@mui/icons-material/Backup';
import PlaceIcon from '@mui/icons-material/Place';
import ClearIcon from '@mui/icons-material/Clear';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { useGetStates } from '../../hooks/querys/useStates';
// import { useCreateDirectorio } from '../../hooks/directorios';
import { GeneralButton } from '../inputs/buttons/GeneralButton';
import { ChangeEvent, useEffect, useState } from 'react';
import { DirectoriesServices } from '../../api';
import { useAppContext } from '../../context';
// import { State } from '../../api';
import { ThemeTwo } from '../../themes/ThemeTwo';
import { Button } from '@mui/joy';
import Swal from 'sweetalert2';
import { CreateDirectorio } from '../../api';

interface DirectoryParams {
  title: string;
  type: string;
  address: string;
  hours: string;
  email: string;
  phone: string;
  thumbnail: string;
  state_id: number;
  user_id?: number;
}

type Imgs = string | ArrayBuffer | null;

const FormDirectoryOne = () => {
  const { state } = useAppContext();
  const theme = useTheme();

  const { data } = useGetStates();

  const initialDirectoryAd: DirectoryParams = {
    title: '',
    type: '',
    address: '',
    // img: null,
    hours: '',
    email: '',
    phone: '',
    thumbnail: '',
    state_id: 0,
    user_id: state.userState?.user.id,
  };

  const [formData, setFormData] = useState<DirectoryParams>(initialDirectoryAd);
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [selectedImage, setSelectedImage] = useState<Imgs>(null);

  const [agree, setAgree] = useState(false);

  useEffect(() => {
    if (!state?.userState?.token) {
      window.location.assign('/');
    }
  }, [state.userState]);

  useEffect(() => {
    redFiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgFile]);

  const handleInputChange = (name: string, value: string | number) => {
    if (name === 'state_id') {
      const selectedState = data?.data?.find((city) => city.id === value);
      setFormData({ ...formData, state_id: selectedState?.id });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files?.length === 1) {
      setImgFile(e.target.files[0]);
    } else {
      Swal.fire(
        'Sólo puedes subir una imagen',
        'Sólo puedes subir una imagen para el directorio',
        'warning'
      );
    }
  };

  const promise = (img: File) => {
    return new Promise<string | ArrayBuffer | null>((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          resolve(e.target.result);
        } // Asignamos la URL de la imagen al estado
      };

      reader.readAsDataURL(img);
    });
  };

  const redFiles = async () => {
    if (imgFile) {
      const url = await promise(imgFile);
      setSelectedImage(url);
    } else {
      setSelectedImage(null);
    }
  };

  const onDelete = () => {
    setFormData((prevData) => ({
      ...prevData,
      img: null,
    }));
  };

  const onSubmit = async () => {
    // console.log(formData);
    if (!agree) {
      Swal.fire('Error', 'Acepta los términos y condiciones', 'warning');
      return;
    }
    let error: boolean = false;
    let message: string = '';

    if (!formData.title || formData.title == '') {
      message = 'Ingresa un titulo a la';
      error = true;
    }
    if (!formData.type || formData.type == '') {
      message = 'Ingresa un tipo de negocio';
      error = true;
    }
    if (!formData.address || formData.address == '') {
      message = 'Ingresa una dirección';
      error = true;
    }
    if (!imgFile) {
      message = 'Ingresa una imagen';
      error = true;
    }
    if (!formData.hours || formData.hours == '') {
      message = 'Ingresa un horario de funcionamiento';
      error = true;
    }
    if (
      !formData.phone ||
      formData.phone == '' ||
      formData.phone.length != 10
    ) {
      message = 'Ingresa un teléfono de 10 caractéres';
      error = true;
    }
    if (!formData.thumbnail || formData.thumbnail == '') {
      message = 'Ingresa una dirección de sitio web';
      error = true;
    }
    if (!formData.state_id && formData.state_id == 0) {
      message = 'Selecciona un estado';
      error = true;
    }

    if (error) {
      Swal.fire('Error', message, 'error');
    } else {
      const obj: CreateDirectorio = {
        title: formData.title,
        state_id: formData.state_id,
        type: formData.type,
        hours: formData.hours,
        address: formData.address,
        phone: formData.phone,
        email: formData.email,
        user_id: formData.user_id,
        thumbnail: formData.thumbnail,
      };
      let error_2: boolean = false;
      const res1 = await DirectoriesServices.createDirectorio(obj);
      console.log('RES1', res1);
      if (imgFile && res1) {
        const res2 = await DirectoriesServices.uploadImage({
          file: imgFile,
          id: res1.id,
        });
        console.log('RES2:', res2);
        if (!res2.data.id) {
          error_2 = true;
        }
      } else {
        error_2 = true;
      }

      if (error_2) {
        v;
      } else {
        Swal.fire('¡Listo!', 'Anuncio creado correctamente', 'success').then(
          () => {
            // setNewAdForm({ responseForm: response_1 });
            // navigateTo('/panel/listings/pago');
          }
        );
      }
    }
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
            onChange={(e) => handleInputChange('type', e.target.value)}
            value={formData.type}
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
          <div className="imgs">
            {selectedImage ? (
              <div className="img-container d-flex align-items-center justify-content-center position-relative">
                <img src={selectedImage?.toString() ?? ''} alt="img" />
                <IconButton
                  sx={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    background: theme.palette.secondary.main,
                    color: 'white',
                    ':hover': {
                      background: theme.palette.secondary.main,
                      color: 'white',
                    },
                  }}
                  onClick={() => onDelete()}
                >
                  <ClearIcon />
                </IconButton>
              </div>
            ) : null}
          </div>
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
                onChange={onChange}
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
            onChange={(e) => handleInputChange('hours', e.target.value)}
            value={formData.hours}
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
            onChange={(e) => handleInputChange('thumbnail', e.target.value)}
            value={formData.thumbnail}
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
            onChange={(option) => handleInputChange('state_id', option.value)}
          />
        </div>
        <div className="directory-form-item">
          <input type="checkbox" id="agree" onChange={() => setAgree(!agree)} />
          <label htmlFor="agree">
            {' '}
            Acepto los <b>términos y condiciones</b>
          </label>
        </div>
        <div className="directory-form-item">
          <GeneralButton
            title="Crear anuncio en directorio"
            endIcon={<PostAddIcon />}
            colorPrimary="primary"
            width="350px"
            onClick={onSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export { FormDirectoryOne };
