import React, { useState, ChangeEvent, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { TextFieldOne } from '../../inputs/text/TextFieldOne';
import { PswFieldOne } from '../../inputs/password/PswFieldOne';
import { Button, CircularProgress, FormControl } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Swal from 'sweetalert2';
import { useLogin, useRegister, useSearch } from '../../../hooks';
import { useLocation } from 'react-router-dom';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const CardLogRes = () => {
  const { search } = useLocation();
  const theme = useTheme();
  const [ISusr, setISusr] = useState('');
  const [ISpsw, setISpsw] = useState('');
  const [loadingis, setLoadingIS] = useState<boolean>(false);
  const [loadingrg, setLoadingRG] = useState<boolean>(false);
  const onChangeISusr = (e: ChangeEvent<HTMLInputElement>) => {
    setISusr(e.target.value);
  };
  const onChangeISpsw = (e: ChangeEvent<HTMLInputElement>) => {
    setISpsw(e.target.value);
  };
  const login = useLogin();
  const register = useRegister();
  const { searchParam } = useSearch();
  const [RGusr, setRGusr] = useState('');
  const [RGeml, setRGeml] = useState('');
  const [RGtel, setRGtel] = useState('');
  const [RGpsw, setRGpsw] = useState('');
  const [RGnmc, setRGnmc] = useState('');
  const [RGape, setRGape] = useState('');
  const onChangeInput = (input: string, value: string) => {
    switch (input) {
      case 'rgusername':
        setRGusr(value);
        break;
      case 'rgemail':
        setRGeml(value);
        break;
      case 'rgphone':
        setRGtel(value);
        break;
      case 'rgpassword':
        setRGpsw(value);
        break;
      case 'rgnamecomp':
        setRGnmc(value);
        break;
      case 'rgapellido':
        setRGape(value);
        break;
      default:
        break;
    }
  };

  const [value, setValue] = React.useState(0);

  useEffect(() => {
    if (searchParam('tab')) {
      if (`${searchParam('tab')}` == 'register') {
        setValue(1);
      } else if (`${searchParam('tab')}` == 'login') {
        setValue(0);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const onClickShowIS = () => {
    setLoadingIS(true);
    const obj = {
      ['email']: ISusr,
      ['password']: ISpsw,
    };
    login.mutate(obj);
  };
  const onClickShowRG = () => {
    setLoadingRG(true);
    const obj ={
        ['name']: RGusr,
        ['email']: RGeml,
        ['password']: RGpsw,
        ['password_confirmation']: RGpsw
    };
    register.mutate(obj);
  };

  const onClickLostPSW = () => {
    Swal.fire({
      title: 'Restaurar Contraseña',
      text: 'Introduzca la dirección de correo electrónico asociada a la cuenta.',
      icon: 'question',
      input: 'text',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#FD8A2A',
      confirmButtonColor: '#E4032E',
      confirmButtonText: 'Enviar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Enviar', '', 'info');
      }
    });
  };
  return (
    <>
      <div className="card-login card-login-logres">
        <Box sx={{ width: '100%' }}>
          <Box>
            <div className="card-login card-login-tabs">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                aria-label="basic tabs example"
              >
                <Tab
                  sx={{ minWidth: '250px', textTransform: 'capitalize' }}
                  className="card-login card-login-btns"
                  label="Iniciar Sesión"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{ minWidth: '250px', textTransform: 'capitalize' }}
                  className="card-login card-login-btns"
                  label="Regístrate"
                  {...a11yProps(1)}
                />
              </Tabs>
            </div>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div className="card-login card-login-cont">
              <div className="card-login card-login-lrcont">
                <TextFieldOne
                  color={{
                    variant: 'secondary',
                    text: '#464748',
                    field: theme.palette.secondary.main,
                    backgroundColor: '#fff',
                  }}
                  text="Email o Nombre de usuario"
                  icon={{ url: '/svg/icons/arr_frm.svg' }}
                  value={ISusr}
                  onChange={onChangeISusr}
                ></TextFieldOne>
                <div className="mt-3">
                  <PswFieldOne
                    color={{
                      variant: 'secondary',
                      text: '#464748',
                      field: theme.palette.secondary.main,
                      backgroundColor: '#fff',
                    }}
                    text="Contraseña"
                    icon={{ url: '/svg/icons/psw_frm.svg' }}
                    value={ISpsw}
                    onChange={onChangeISpsw}
                  ></PswFieldOne>
                </div>
                <div className="mt-2 chkbox chkbox-main">
                  <div className="chkbox chkbox-remember">
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Recuérdame"
                      />
                    </FormGroup>
                  </div>
                  <div
                    className="chkbox chkbox-lostpsw"
                    onClick={onClickLostPSW}
                  >
                    ¿Olvidaste tu contraseña?
                  </div>
                </div>
                <div className="mt-2">
                  <FormControl fullWidth>
                    <Button
                      className="p-2"
                      variant="contained"
                      onClick={onClickShowIS}
                      sx={{
                        '& .text': {
                          paddingTop: '8px',
                          paddingBottom: '7px',
                        },
                      }}
                    >
                      {loadingis && <CircularProgress color="secondary" />}
                      {!loadingis && (
                        <span className="text">Iniciar Sesión</span>
                      )}
                    </Button>
                  </FormControl>
                </div>
              </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div className="card-login card-login-cont">
              <div className="card-login card-login-lrcont">
                <TextFieldOne
                  color={{
                    variant: 'secondary',
                    text: '#464748',
                    field: theme.palette.secondary.main,
                    backgroundColor: '#fff',
                  }}
                  text="Nombre de usuario*"
                  icon={{ url: '/svg/icons/usr_frm.svg' }}
                  value={RGusr}
                  onChange={(e) => onChangeInput('rgusername', e.target.value)}
                ></TextFieldOne>
                <div className="mt-3">
                  <TextFieldOne
                    color={{
                      variant: 'secondary',
                      text: '#464748',
                      field: theme.palette.secondary.main,
                      backgroundColor: '#fff',
                    }}
                    text="Email*"
                    icon={{ url: '/svg/icons/arr_frm.svg' }}
                    value={RGeml}
                    onChange={(e) => onChangeInput('rgemail', e.target.value)}
                  ></TextFieldOne>
                </div>
                <div className="mt-3">
                  <TextFieldOne
                    color={{
                      variant: 'secondary',
                      text: '#464748',
                      field: theme.palette.secondary.main,
                      backgroundColor: '#fff',
                    }}
                    text="Teléfono"
                    icon={{ url: '/svg/icons/phone_frm.svg' }}
                    value={RGtel}
                    onChange={(e) => onChangeInput('rgphone', e.target.value)}
                  ></TextFieldOne>
                </div>
                <div className="mt-3">
                  <PswFieldOne
                    color={{
                      variant: 'secondary',
                      text: '#464748',
                      field: theme.palette.secondary.main,
                      backgroundColor: '#fff',
                    }}
                    text="Contraseña*"
                    icon={{ url: '/svg/icons/psw_frm.svg' }}
                    value={RGpsw}
                    onChange={(e) =>
                      onChangeInput('rgpassword', e.target.value)
                    }
                  ></PswFieldOne>
                </div>
                <div className="mt-3">
                  <TextFieldOne
                    color={{
                      variant: 'secondary',
                      text: '#464748',
                      field: theme.palette.secondary.main,
                      backgroundColor: '#fff',
                    }}
                    text="Nombre Completo*"
                    icon={{ url: '/svg/icons/usr_frm.svg' }}
                    value={RGnmc}
                    onChange={(e) =>
                      onChangeInput('rgnamecomp', e.target.value)
                    }
                  ></TextFieldOne>
                </div>
                <div className="mt-3">
                  <TextFieldOne
                    color={{
                      variant: 'secondary',
                      text: '#464748',
                      field: theme.palette.secondary.main,
                      backgroundColor: '#fff',
                    }}
                    text="Apellido*"
                    icon={{ url: '/svg/icons/usr_frm.svg' }}
                    value={RGape}
                    onChange={(e) =>
                      onChangeInput('rgapellido', e.target.value)
                    }
                  ></TextFieldOne>
                </div>
                <div className="mt-5">
                  <FormControl fullWidth>
                    <Button
                      className="p-2"
                      variant="contained"
                      onClick={onClickShowRG}
                      sx={{
                        '& .text': {
                          paddingTop: '8px',
                          paddingBottom: '7px',
                        },
                      }}
                    >
                      {loadingrg && <CircularProgress color="secondary" />}
                      {!loadingrg && <span className="text">Regístrate</span>}
                    </Button>
                  </FormControl>
                </div>
              </div>
            </div>
          </CustomTabPanel>
        </Box>
      </div>
    </>
  );
};

export { CardLogRes };
