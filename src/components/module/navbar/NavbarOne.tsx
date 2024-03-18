// import React from 'react';
import { useEffect } from 'react';
import { Button, useTheme } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLogOut } from '../../../hooks';
import { useAppContext } from '../../../context';

const NavbarOne = () => {
  const { pathname } = useLocation();
  const navigateTo = useNavigate();
  const theme = useTheme();
  const { mutate } = useLogOut();
  const { state } = useAppContext();

  useEffect(() => {
    console.log('navigate_1: ', !state?.userState?.token);
    console.log('navigate_2: ', state.init);
    if (!state?.userState?.token && state.init) {
      // window.location.assign('/');
    }
  }, [state.userState, state.init]);

  return (
    <div className="navbar navbar-one mx-auto p-0 px-2 justify-content-start">
      <div className="links-container">
        <Button
          sx={{
            color: `${
              pathname?.includes('create')
                ? `${theme?.palette.primary?.main}`
                : '#464748'
            }`,
            textTransform: 'none',
            height: '100%',
            paddingX: '16px',
            borderBottom: `${
              pathname?.includes('create')
                ? `4px solid ${theme?.palette.primary?.main}`
                : 'none'
            }`,
            borderRadius: '0',
          }}
          className="text text-font-rubik fw-bold fs-6"
          onClick={() => navigateTo('/panel/create')}
        >
          Agregar Nuevo
        </Button>
        <Button
          sx={{
            color: `${
              pathname?.includes('list')
                ? `${theme?.palette.primary?.main}`
                : '#464748'
            }`,
            textTransform: 'none',
            height: '100%',
            paddingX: '16px',
            borderBottom: `${
              pathname?.includes('list')
                ? `4px solid ${theme?.palette.primary?.main}`
                : 'none'
            }`,
            borderRadius: '0',
          }}
          className="text text-font-rubik fw-bold fs-6"
          onClick={() => navigateTo('/panel/list')}
        >
          Mis Anuncios
        </Button>
        <Button
          sx={{
            color: `${
              pathname?.includes('favorites')
                ? `${theme?.palette.primary?.main}`
                : '#464748'
            }`,
            textTransform: 'none',
            height: '100%',
            paddingX: '16px',
            borderBottom: `${
              pathname?.includes('favorites')
                ? `4px solid ${theme?.palette.primary?.main}`
                : 'none'
            }`,
            borderRadius: '0',
          }}
          className="text text-font-rubik fw-bold fs-6"
          onClick={() => navigateTo('/panel/favorites')}
        >
          Favoritos
        </Button>
        <Button
          sx={{
            color: `${
              pathname?.includes('messages')
                ? `${theme?.palette.primary?.main}`
                : '#464748'
            }`,
            textTransform: 'none',
            height: '100%',
            paddingX: '16px',
            borderBottom: `${
              pathname?.includes('messages')
                ? `4px solid ${theme?.palette.primary?.main}`
                : 'none'
            }`,
            borderRadius: '0',
          }}
          className="text text-font-rubik fw-bold fs-6"
          onClick={() => navigateTo('/panel/messages')}
        >
          Mensajes
        </Button>
        <Button
          sx={{
            color: `${
              pathname?.includes('my-orders')
                ? `${theme?.palette.primary?.main}`
                : '#464748'
            }`,
            textTransform: 'none',
            height: '100%',
            paddingX: '16px',
            borderBottom: `${
              pathname?.includes('my-orders')
                ? `4px solid ${theme?.palette.primary?.main}`
                : 'none'
            }`,
            borderRadius: '0',
          }}
          className="text text-font-rubik fw-bold fs-6"
          onClick={() => navigateTo('/panel/my-orders')}
        >
          Mis ordenes
        </Button>
        <Button
          sx={{
            color: `${
              pathname?.includes('directories')
                ? `${theme?.palette.primary?.main}`
                : '#464748'
            }`,
            textTransform: 'none',
            height: '100%',
            paddingX: '16px',
            borderBottom: `${
              pathname?.includes('directories')
                ? `4px solid ${theme?.palette.primary?.main}`
                : 'none'
            }`,
            borderRadius: '0',
          }}
          className="text text-font-rubik fw-bold fs-6"
          onClick={() => navigateTo('/panel/directories')}
        >
          Directorios
        </Button>
        <Button
          sx={{
            color: `${
              pathname?.includes('settings')
                ? `${theme?.palette.primary?.main}`
                : '#464748'
            }`,
            textTransform: 'none',
            height: '100%',
            paddingX: '16px',
            borderBottom: `${
              pathname?.includes('settings')
                ? `4px solid ${theme?.palette.primary?.main}`
                : 'none'
            }`,
            borderRadius: '0',
          }}
          className="text text-font-rubik fw-bold fs-6"
          onClick={() => navigateTo('/panel/settings')}
        >
          Ajustes
        </Button>
        <Button
          sx={{
            color: '#464748',
            textTransform: 'none',
            height: '100%',
            paddingX: '16px',
            borderRadius: '0',
          }}
          className="text text-font-rubik fw-bold fs-6"
          onClick={() => mutate()}
        >
          Cerrar sesión
        </Button>
      </div>
    </div>
  );
};

export { NavbarOne };
