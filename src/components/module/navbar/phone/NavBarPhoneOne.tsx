// import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuTwo } from '../../menu/MenuTwo';
import { Button } from '@mui/material';

const NavBarPhoneOne = () => {
  const navigateTo = useNavigate();

  return (
    <>
      <MenuTwo
        text="Anuncios"
        icon={{
          link: '/svg/icons/menu_row_right.svg',
          name: 'menu-row-right',
        }}
      >
        <Button
          variant="text"
          className="w-100 px-4 d-block text-start m-0 py-4 ms-3"
          sx={{
            color: '#333',
          }}
          onClick={() => navigateTo('/ads')}
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          Todos los anuncios
        </Button>
        <hr className="m-0" />
        <MenuTwo
          text="Micrositios"
          overrideClass="ms-3"
          icon={{
            link: '/svg/icons/menu_row_right.svg',
            name: 'menu-row-right',
          }}
        >
          <Button
            variant="text"
            className="w-100 px-4 d-block text-start m-0 py-4 ms-5"
            sx={{
              color: '#333',
            }}
          >
            Campeche
          </Button>
          <hr className="m-0" />
          <Button
            variant="text"
            className="w-100 px-4 d-block text-start m-0 py-4 ms-5"
            sx={{
              color: '#333',
            }}
          >
            Quintana Roo
          </Button>
          <hr className="m-0" />
          <Button
            variant="text"
            className="w-100 px-4 d-block text-start m-0 py-4 ms-5"
            sx={{
              color: '#333',
            }}
          >
            Yucatan
          </Button>
          <hr className="m-0" />
        </MenuTwo>
        <Button
          variant="text"
          className="w-100 px-4 d-block text-start m-0 py-4 ms-3"
          sx={{
            color: '#333',
          }}
        >
          Directorios Locales
        </Button>
        <hr className="m-0" />
      </MenuTwo>
      <MenuTwo
        text="Acerca"
        icon={{
          link: '/svg/icons/menu_row_right.svg',
          name: 'menu-row-right',
        }}
      >
        <Button
          variant="text"
          className="w-100 px-4 d-block text-start m-0 py-4 ms-3"
          sx={{
            color: '#333',
          }}
        >
          ¿Quienes somos?
        </Button>
        <hr className="m-0" />
        <Button
          variant="text"
          className="w-100 px-4 d-block text-start m-0 py-4 ms-3"
          sx={{
            color: '#333',
          }}
        >
          Contáctanos
        </Button>
        <hr className="m-0" />
      </MenuTwo>
    </>
  );
};

export { NavBarPhoneOne };
