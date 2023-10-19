import { Button, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { AddAddButtonOne } from '../../inputs/buttons/AddAddButtonOne';
import CloseIcon from '@mui/icons-material/Close';
import { NavBarPhoneOne } from '../navbar/phone/NavBarPhoneOne';

// import React from 'react';
const SideBarOne = () => {
  const theme = useTheme();

  return (
    <div
      className="offcanvas offcanvas-start"
      tabIndex={-1}
      id="offCanvasMenuPhone"
      aria-labelledby="offCanvasMenuPhoneLabel"
    >
      <div className="offcanvas-header d-flex align-items-center">
        <h5 className="offcanvas-title" id="offCanvasMenuPhoneLabel">
          <AddAddButtonOne />
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
          >
            Inicio
          </Button>
          <hr className="m-0" />
          <NavBarPhoneOne />
        </div>
      </div>
    </div>
  );
};

export { SideBarOne };
