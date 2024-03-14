import { useTheme } from '@mui/material/styles';
import { NavBarDesktopOne } from '../navbar/desktop/NavBarDesktopOne';
import { Link } from '@mui/material';
import { MenuButton } from '../../inputs/iconbuttons/MenuButton';
import { useNavigate } from 'react-router-dom';
import { ProfileButton } from '../../inputs/buttons/ProfileButton';
import { useAppContext } from '../../../context';
import { GeneralButton } from '../../inputs/buttons/GeneralButton';
// import React from 'react';
import ArrowForward from '@mui/icons-material/ArrowForward';
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
        {/* <div className={!state?.userState?.token ? 'desktop' : 'd-none'}>
          <Link
            component="button"
            onClick={() => navigateTo('/login-register?tab=register')}
            color={theme.palette.primary.contrastText}
            underline="none"
          >
            Regístrate
          </Link>
        </div> */}
        <div className="desktop">
          {!state?.userState?.token && (
            <GeneralButton
              onClick={() => navigateTo('/login-register?tab=register')}
              title="Regístrate"
              colorPrimary="secondary"
              endIcon={<ArrowForward />}
            />
          )}
          {/* <AdAddButtonOne /> */}
        </div>
      </div>
    </div>
  );
};

export { HeaderOne };
