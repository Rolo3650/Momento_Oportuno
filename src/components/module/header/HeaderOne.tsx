import { useTheme } from '@mui/material/styles';
import { NavBarDesktopOne } from '../navbar/desktop/NavBarDesktopOne';
import { Link } from '@mui/material';
import { AdAddButtonOne } from '../../inputs/buttons/AdAddButtonOne';
import { MenuButton } from '../../inputs/iconbuttons/MenuButton';
import { useNavigate } from 'react-router-dom';
import { ProfileButton } from '../../inputs/buttons/ProfileButton';
import { useAppContext } from '../../../context';
// import React from 'react';

const HeaderOne = () => {
  const theme = useTheme();
  const navigateTo = useNavigate();

  const { state } = useAppContext();

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
        <div>
          <ProfileButton />
        </div>
        <div className={!state?.userState?.token ? 'desktop' : 'd-none'}>
          <Link
            component="button"
            onClick={() => navigateTo('/login-register?tab=login')}
            color={theme.palette.primary.contrastText}
            underline="none"
          >
            Iniciar Sesión
          </Link>
        </div>
        <div className={!state?.userState?.token ? 'desktop' : 'd-none'}>
          <div className="separator"></div>
        </div>
        <div className={!state?.userState?.token ? 'desktop' : 'd-none'}>
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
