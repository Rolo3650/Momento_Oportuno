import { TextFieldOne } from '../inputs/text/TextFieldOne';
import { DropdownOne } from '../inputs/dropdown/DropdownOne';
import { useTheme } from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import PlaceIcon from '@mui/icons-material/Place';
import { useGetStates } from '../../hooks/querys/useStates';
import { GeneralButton } from '../inputs/buttons/GeneralButton';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import { useState, useEffect } from 'react';
import { useAppContext } from '../../context';

interface Option {
  label: string;
  value: number | string;
  quantity?: number;
}

const FormMicrositioOne = () => {
  const { state } = useAppContext();
  const theme = useTheme();

  const { data } = useGetStates();

  const [title, setTitle] = useState<string>('');
  const [state_id, setState_id] = useState<number | null>(null);
  const [address, setAddress] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  // const [image, setImage] = useState<string | boolean>(false);

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

  const onCreateMicrositio = () => {
    console.log(
      'titulo:',
      title,
      'estado id:',
      state_id,
      'direccion:',
      address,
      'telefono:',
      phone,
      'email:',
      email
    );
  };

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
            onChange={onChangeCity}
          />
        </div>
        <div className="micrositio-form-item">
          <GeneralButton
            title="Crear"
            endIcon={<AddCircleOutline />}
            colorPrimary="primary"
            width="250px"
            onClick={onCreateMicrositio}
          />
        </div>
      </div>
    </div>
  );
};

export { FormMicrositioOne };
