import { Button, IconButton, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { AdAddButtonOne } from '../../inputs/buttons/AdAddButtonOne';
import CloseIcon from '@mui/icons-material/Close';
import { NavBarPhoneOne } from '../navbar/phone/NavBarPhoneOne';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useNavigate } from 'react-router-dom';

// import React from 'react';
const SideBarOne = () => {
  const theme = useTheme();
  const navigateTo = useNavigate();

  return (
    <div
      className="offcanvas offcanvas-start"
      tabIndex={-1}
      id="offCanvasMenuPhone"
      aria-labelledby="offCanvasMenuPhoneLabel"
    >
      <div className="offcanvas-header d-flex align-items-center">
        <h5 className="offcanvas-title" id="offCanvasMenuPhoneLabel">
          <AdAddButtonOne />
        </h5>
        <IconButton
          sx={{
            border: `2px solid ${theme.palette.secondary.main}`,
          }}
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <CloseIcon
            sx={{
              fontSize: '30px',
            }}
          />
        </IconButton>
      </div>
      <div className="offcanvas-body p-0">
        <div className="sidebar-one sidebar pb-5">
          <Button
            variant="text"
            className="w-100 px-4 d-block text-start m-0 py-4"
            sx={{
              color: '#333',
            }}
            onClick={() => navigateTo('/')}
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            Inicio
          </Button>
          <hr className="m-0" />
          <NavBarPhoneOne />
          <div className="mt-5">
            <div className="p-3 text text-color-secondary text-font-helvetica">
              Llamar a Soporte
              <br />
              <Link
                underline="none"
                className="fw-bold text text-color-5 text-font-l-d"
              >
                55 5588 5588
              </Link>
            </div>
            <div className="px-3 text text-color-secondary text-font-helvetica">
              Dirección de correo electrónico
              <br />
              <Link
                underline="none"
                className="fw-bold text text-color-5 text-font-l-d"
              >
                ayuda@clientesdelsureste.com
              </Link>
            </div>
            <div className="mt-3 p-3 d-flex justify-content-center align-items-center">
              <IconButton
                sx={{
                  border: `1px solid ${theme.palette.secondary.main}`,
                  '&:focus': {
                    color: theme.palette.secondary.main,
                  },
                }}
                className="mx-2"
              >
                <FacebookOutlinedIcon />
              </IconButton>
              <IconButton
                sx={{
                  border: `1px solid ${theme.palette.secondary.main}`,
                  '&:focus': {
                    color: theme.palette.secondary.main,
                  },
                }}
                className="mx-2"
              >
                <WhatsAppIcon />
              </IconButton>
              <IconButton
                sx={{
                  border: `1px solid ${theme.palette.secondary.main}`,
                  '&:focus': {
                    color: theme.palette.secondary.main,
                  },
                }}
                className="mx-2"
              >
                <InstagramIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SideBarOne };
