import { useTheme } from '@mui/material/styles';
import { Link } from '@mui/material';
import { MenuOne } from '../menu/MenuOne';
import MenuItem from '@mui/material/MenuItem';
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
        <div className="desktop">
          <Link href="/" color={'#fff'} underline="none">
            Inicio
          </Link>
        </div>
        <div className="desktop">
          <MenuOne
            title="Anuncios"
            color="#fff"
            position={{
              vertical: 'top',
              horizontal: 'left',
            }}
            anchor={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            // icon={''}
          >
            <MenuItem>
              <MenuOne
                title="Anuncios"
                color="#000"
                position={{
                  vertical: 15,
                  horizontal: 'center',
                }}
                anchor={{
                  vertical: 'top',
                  horizontal: 120,
                }}
              >
                <MenuItem>Hola</MenuItem>
              </MenuOne>
            </MenuItem>
          </MenuOne>
        </div>
      </div>
    </div>
  );
};

export { HeaderOne };
