// import React from 'react';
import { Link } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { MenuOne } from '../../menu/MenuOne';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../../context';
import { useState } from 'react';
import { LogResForm } from '../../../modals/LogResForm';

const NavBarDesktopOne = () => {
  const { state } = useAppContext();
  const navigateTo = useNavigate();

  const [isModalLogResOpen, setIsModalLogResOpen] = useState<boolean>(false);

  return (
    <>
      <div className="desktop">
        <Link
          onClick={() => navigateTo('/')}
          component="button"
          color={'#fff'}
          underline="none"
        >
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
          icon={{
            link: '/svg/icons/menu_row_down.svg',
            name: 'menu-row-down',
          }}
        >
          <MenuItem onClick={() => navigateTo('/ads')}>
            Todos los anuncios
          </MenuItem>
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
              icon={{
                link: '/svg/icons/menu_row_right.svg',
                name: 'menu-row-right',
              }}
            >
              <MenuItem onClick={() => navigateTo('/micrositios/micrositios-campeche')}>Campeche</MenuItem>
              <MenuItem onClick={() => navigateTo('/micrositios/micrositios-quintanaroo')}>Quintana Roo</MenuItem>
              <MenuItem onClick={() => navigateTo('/micrositios/micrositios-yucatan')}>Yucatán</MenuItem>
              <MenuItem
                onClick={() => {
                  if (!state?.userState?.token) {
                    setIsModalLogResOpen(true);
                    return;
                  }
                  
                  navigateTo('/micrositios/create');
                }}
              >
                Comprar Micrositio
              </MenuItem>
            </MenuOne>
          </MenuItem>
          <MenuItem onClick={() => navigateTo('/directories/')}>Directorios Locales</MenuItem>
        </MenuOne>
      </div>
      <div className="desktop">
        <MenuOne
          title="Acerca"
          color="#fff"
          position={{
            vertical: 'top',
            horizontal: 'left',
          }}
          anchor={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          icon={{
            link: '/svg/icons/menu_row_down.svg',
            name: 'menu-row-down',
          }}
        >
          <MenuItem>¿Quienes somos?</MenuItem>
          <MenuItem>Contactanos</MenuItem>
        </MenuOne>
        <LogResForm
          show={isModalLogResOpen}
          onHide={() => setIsModalLogResOpen(false)}
        />
      </div>
    </>
  );
};

export { NavBarDesktopOne };
