import { useTheme } from '@mui/material/styles';
import { NavBarDesktopOne } from '../navbar/desktop/NavBarDesktopOne';
import { IconButton, Link } from '@mui/material';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { AdAddButtonOne } from '../../inputs/buttons/AdAddButtonOne';
import { MenuButton } from '../../inputs/iconbuttons/MenuButton';
import { useNavigate } from 'react-router-dom';
// import React from 'react';

const HeaderOne = () => {
  const theme = useTheme();
  const navigateTo = useNavigate();

  return (
    <div className={`header-one ${theme.palette.mode}`}>
      <div className="header-body d-flex align-items-center h-100">
        <div className="phone">
          <MenuButton />
        </div>
        <a type="button" onClick={() => navigateTo('/')}>
          <img
            src="../../../img/logos/elmomentoportunoblanco.png"
            alt="white-logo"
            className="logo"
          />
        </a>
        <NavBarDesktopOne />
        <div className="">
          <IconButton
            sx={{
              border: `2px solid ${theme.palette.secondary.main}`,
            }}
          >
            <PermIdentityOutlinedIcon
              sx={{
                fontSize: '30px',
                color: theme.palette.primary.contrastText,
              }}
            />
          </IconButton>
        </div>
        <div className="desktop">
          <Link
            component="button"
            onClick={() => navigateTo('/login-register?tab=login')}
            color={theme.palette.primary.contrastText}
            underline="none"
          >
            Iniciar Sesión
          </Link>
        </div>
        <div className="desktop">
          <div className="separator"></div>
        </div>
        <div className="desktop">
          <Link
            component="button"
            onClick={() => navigateTo('/login-register?tab=register')}
            color={theme.palette.primary.contrastText}
            underline="none"
          >
            Regístrate
          </Link>
        </div>
        <div className="desktop">
          <AdAddButtonOne />
        </div>
      </div>
    </div>
  );
};

export { HeaderOne };
