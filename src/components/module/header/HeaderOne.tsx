import { useTheme } from '@mui/material/styles';
import { NavBarDesktopOne } from '../navbar/desktop/NavBarDesktopOne';
import { IconButton, Link } from '@mui/material';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { AddAddButtonOne } from '../../inputs/buttons/AddAddButtonOne';
// import React from 'react';

const HeaderOne = () => {
  const theme = useTheme();

  return (
    <div className={`header-one ${theme.palette.mode}`}>
      <div className="header-body d-flex align-items-center h-100">
        <img
          src="../../../img/logos/elmomentoportunoblanco.png"
          alt="white-logo"
          className="logo"
        />
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
            href="/"
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
            href="/"
            color={theme.palette.primary.contrastText}
            underline="none"
          >
            Regístrate
          </Link>
        </div>
        <div className="desktop">
          <AddAddButtonOne />
        </div>
      </div>
    </div>
  );
};

export { HeaderOne };
