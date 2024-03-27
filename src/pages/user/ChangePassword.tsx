import { Box, useTheme } from '@mui/material';
import { LayoutOne } from '../../containers/layout/LayoutOne';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { TextFieldOne } from '../../components/inputs/text/TextFieldOne';
import { GeneralButton } from '../../components/inputs/buttons/GeneralButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { UsersServices } from '../../api';

const ChangePassword = () => {
  const theme = useTheme();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    const url = window.location.href;
    const searchParams = new URLSearchParams(new URL(url).search);
    const codeValue = searchParams.get('code');

    if (!codeValue) {
      window.location.assign('/');
    }
  }, []);

  return (
    <LayoutOne>
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        padding={8}
      >
        <div style={{ width: '300px' }}>
          <div className="mb-4">
            <h1 className="title text-center text text-font-georgia fw-bold fs-2 text-color-5">
              Facturación
            </h1>
          </div>
          <div className="mb-3">
            <TextFieldOne
              color={{
                variant: 'secondary',
                text: '#464748',
                field: theme.palette.secondary.main,
                backgroundColor: '#fff',
              }}
              text="Contraseña"
              icon={{ mui: <DriveFileRenameOutlineIcon color="secondary" /> }}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
          </div>
          <div>
            <TextFieldOne
              color={{
                variant: 'secondary',
                text: '#464748',
                field: theme.palette.secondary.main,
                backgroundColor: '#fff',
              }}
              text="Confirmación de Contraseña"
              icon={{ mui: <DriveFileRenameOutlineIcon color="secondary" /> }}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              value={confirmPassword}
            />
          </div>
          <div className="mt-5 d-flex justify-content-center">
            <GeneralButton
              onClick={async () => {
                if (password.length >= 8) {
                  const url = window.location.href;
                  const searchParams = new URLSearchParams(new URL(url).search);
                  const codeValue = searchParams.get('code');

                  if (password == confirmPassword) {
                    try {
                      const response = await UsersServices.changePassword(
                        password,
                        confirmPassword,
                        `${codeValue}`
                      );

                      if (response?.status == 200) {
                        Swal.fire(
                          'Contraseña Actualizada',
                          'Contraseña actualizada con éxito',
                          'success'
                        ).then(() => {
                          window.location.assign('/login-register?tab=login');
                        });
                      }
                    } catch (err) {
                      Swal.fire('Error', 'El código ha expirado', 'error');
                    }
                  } else {
                    Swal.fire('Error', 'Las contraseñas no coinciden', 'error');
                  }
                } else {
                  Swal.fire(
                    'Error',
                    'Ingresa una contraseña que contenga mínimo 8 caracteres',
                    'error'
                  );
                }
              }}
              title="Cambiar Contraseña"
              colorPrimary="secondary"
              endIcon={<ArrowForwardIcon />}
            />
          </div>
        </div>
      </Box>
    </LayoutOne>
  );
};

export { ChangePassword };
