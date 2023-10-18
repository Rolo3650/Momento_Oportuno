// import React from 'react';
import { Link } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { MenuOne } from '../../menu/MenuOne';

const NavBarDesktopOne = () => {
  return (
    <>
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
          <MenuItem>Todos los anuncios</MenuItem>
          <MenuItem>
            <MenuOne
              title="Micrositios"
              color="#000"
              position={{
                vertical: 50,
                horizontal: 'center',
              }}
              anchor={{
                vertical: 'top',
                horizontal: 225,
              }}
            >
              <MenuItem>Campeche</MenuItem>
              <MenuItem>Quintana Roo</MenuItem>
              <MenuItem>Yucatán</MenuItem>
            </MenuOne>
          </MenuItem>
          <MenuItem>Directorios Locales</MenuItem>
        </MenuOne>
      </div>
      <div className="desktop">
        <MenuOne
          title="Acerca de"
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
    </>
  );
};

export { NavBarDesktopOne };
