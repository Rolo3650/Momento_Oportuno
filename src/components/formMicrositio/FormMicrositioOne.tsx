import { TextFieldOne } from '../inputs/text/TextFieldOne';
import { DropdownOne } from '../inputs/dropdown/DropdownOne';
import { useTheme } from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import PlaceIcon from '@mui/icons-material/Place';
import { useGetStates } from '../../hooks/querys/useStates';
import { GeneralButton } from '../inputs/buttons/GeneralButton';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import { useState, useEffect, useCallback, ChangeEvent } from 'react';
import { useAppContext } from '../../context';
import Swal from 'sweetalert2';
import { useCreateMicrositio } from '../../hooks/micrositios';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks';
import { ThemeTwo } from '../../themes/ThemeTwo';
import { Button } from '@mui/joy';
import BackupIcon from '@mui/icons-material/Backup';
import { useAppendMedia } from '../../hooks/querys/useMedia';

interface Option {
  label: string;
  value: number | string;
  quantity?: number;
}

const FormMicrositioOne = () => {
  const { state } = useAppContext();
  const theme = useTheme();

  const { data } = useGetStates();
  const nav = useNavigate();
  const { setNewMicrositeForm } = useForm();

  const [title, setTitle] = useState<string>('');
  const [state_id, setState_id] = useState<number | null>(null);
  const [address, setAddress] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [image, setImage] = useState<File>();
  const { mutateAsync: createMicrositio, isLoading: isLoadingMicrositio } =
    useCreateMicrositio();
  const { mutateAsync: appendMedia, isLoading: isAppendingMedia } =
    useAppendMedia();

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setImage(e.target.files[0]);
    }
  }, []);

  useEffect(() => {
    if (!state?.userState?.token) {
      window.location.assign('/');
    }
  }, [state.userState]);

  const onChangeCity = (option: Option) => {
    if (option.value != 0) {
      const state = data?.data?.find((c) => {
        return c.id == option.value;
      });
      if (state?.id) {
        setState_id(state.id);
      }
    } else {
      setState_id(null);
    }
  };

  const onCreateMicrositio = useCallback(async () => {
    if (!state?.userState) {
      return window.location.assign('/');
    }

    if (!title || !state_id || !address || !phone || !email) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos son obligatorios!',
      });
      return;
    }

    if (!image) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes subir una imagen!',
      });
      return;
    }

    const res = await createMicrositio({
      address,
      email,
      phone,
      state_id,
      title,
      user_id: state?.userState?.user?.id,
    });

    if (!res || !res.data) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocurrió un error al crear el micrositio!',
      });
    }

    const media = await appendMedia({
      photo: [image],
      resourceId: res.data.id,
      type: 'microsite',
    });

    if (!media) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocurrió un error al crear el micrositio!',
      });
    }

    setNewMicrositeForm({
      responseForm: {
        data: res.data,
      },
    });

    nav('/panel/microsites/pago/');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, state_id, address, phone, email, image, state?.userState?.user]);

  return (
    <div>
      <div>Formulario de creación de micrositio</div>
      <div>
        <div className="micrositio-form-item">
          <TextFieldOne
            color={{
              variant: 'secondary',
              text: '#464748',
              field: theme.palette.secondary.main,
              backgroundColor: '#fff',
            }}
            text="Título del micrositio"
            icon={{ mui: <DriveFileRenameOutlineIcon color="secondary" /> }}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
        </div>
        <div className="micrositio-form-item">
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
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            value={address}
          />
        </div>
        <div className="micrositio-form-item">
          <TextFieldOne
            color={{
              variant: 'secondary',
              text: '#464748',
              field: theme.palette.secondary.main,
              backgroundColor: '#fff',
            }}
            text="Email"
            icon={{ url: '/svg/icons/arr_frm.svg' }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </div>
        <div className="micrositio-form-item">
          <TextFieldOne
            color={{
              variant: 'secondary',
              text: '#464748',
              field: theme.palette.secondary.main,
              backgroundColor: '#fff',
            }}
            text="Teléfono"
            icon={{ url: '/svg/icons/phone_frm.svg' }}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            value={phone}
          />
        </div>
        <div className="micrositio-form-item">
          <DropdownOne
            color={{
              variant: 'secondary',
              text: '#464748',
              field: theme.palette.secondary.main,
              backgroundColor: '#fff',
            }}
            text="Estado"
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
            onChange={onChangeCity}
          />
        </div>
        <div className="">
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
                multiple={false}
                max={1}
                maxLength={1}
                accept="image/*"
                onChange={onChange}
              />
            </Button>
          </ThemeTwo>
        </div>
        {image ? (
          <div
            className="
            mt-3 justify-content-center align-items-center d-flex 
          "
          >
            <img
              src={URL.createObjectURL(image)}
              alt="img"
              className="rounded-3"
            />
          </div>
        ) : null}
        <div className="micrositio-form-item">
          <GeneralButton
            title="Crear"
            endIcon={<AddCircleOutline />}
            colorPrimary="primary"
            width="250px"
            onClick={onCreateMicrositio}
            disabled={isLoadingMicrositio || isAppendingMedia}
          />
        </div>
      </div>
    </div>
  );
};

export { FormMicrositioOne };
