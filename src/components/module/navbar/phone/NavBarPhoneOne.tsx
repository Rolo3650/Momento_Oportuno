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
            onClick={() => navigateTo('/micrositios/micrositios-campeche')}
            data-bs-dismiss="offcanvas"
            aria-label="Close"
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
            onClick={() => navigateTo('/micrositios/micrositios-quintanaroo')}
            data-bs-dismiss="offcanvas"
            aria-label="Close"
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
            onClick={() => navigateTo('/micrositios/micrositios-yucatan')}
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            Yucatan
          </Button>
          <hr className="m-0" />
          <Button
            variant="text"
            className="w-100 px-4 d-block text-start m-0 py-4 ms-5"
            sx={{
              color: '#333',
            }}
            onClick={() => navigateTo('/micrositios/create')}
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            Comprar Micrositio
          </Button>
          <hr className="m-0" />
        </MenuTwo>
        <MenuTwo
          text="Directorios"
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
            onClick={() => navigateTo('/directories/directorios-campeche')}
            data-bs-dismiss="offcanvas"
            aria-label="Close"
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
            onClick={() => navigateTo('/directories/directorios-quintanaroo')}
            data-bs-dismiss="offcanvas"
            aria-label="Close"
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
            onClick={() => navigateTo('/directories/directorios-yucatán')}
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            Yucatan
          </Button>
          <hr className="m-0" />
          <Button
            variant="text"
            className="w-100 px-4 d-block text-start m-0 py-4 ms-5"
            sx={{
              color: '#333',
            }}
            onClick={() => navigateTo('/directories/directorios-campeche')}
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            Campeche
          </Button>
        <hr className="m-0" />

        </MenuTwo>
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
          onClick={() => navigateTo('/about-us')}
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          ¿Quiénes somos?
        </Button>
        <hr className="m-0" />
        <Button
          variant="text"
          className="w-100 px-4 d-block text-start m-0 py-4 ms-3"
          sx={{
            color: '#333',
          }}
          onClick={() => navigateTo('/contact-us')}
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          Contáctanos
        </Button>
        <hr className="m-0" />
      </MenuTwo>
    </>
  );
};

export { NavBarPhoneOne };
