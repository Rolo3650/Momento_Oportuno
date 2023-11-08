// import React from 'react';
import { IconButton, Link, Button, useTheme } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useAds } from '../../hooks';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const UserMinOne = () => {
  const { adSingleState } = useAds();
  const theme = useTheme();

  return (
    <div className="product-decription product-decription-one card-custom py-4">
      <div className="d-flex px-4 mb-4">
        <div>
          <IconButton
            sx={{
              fontSize: '20px',
              backgroundColor: '#FFC89B',
            }}
          >
            <AccountCircleOutlinedIcon
              sx={{
                fontSize: '60px',
                color: '#FD8A2A',
              }}
            />
          </IconButton>
        </div>
        <div className="w-100 px-3">
          <div className="fw-bold text text-color-5 fs-5 email">
            {adSingleState?.ad?.user?.email}
          </div>
          {/* <div className="text text-color-5 mt-1 text-font-l-d">
            Miembro desde: 2 meses
          </div> */}
          <Link
            component={'button'}
            sx={{
              fontSize: '14px',
              color: `${theme.palette.primary.main} !important`,
            }}
            className="text text-color-7 mt-1 text-font-l-d"
          >
            Ver todas sus publicaciones
          </Link>
        </div>
      </div>
      <div>
        <Button
          className="w-100 p-3 fs-6 d-flex justify-content-between"
          sx={{
            backgroundColor: '#FD8A2A',
            '&:hover': {
              backgroundColor: '#FD8A2A',
            },
          }}
          endIcon={
            <VisibilityOutlinedIcon
              sx={{
                marginRight: '10px',
                backgroundColor: theme.palette.secondary.main,
                height: '45px',
                width: '45px',
                padding: '10px',
                color: 'white',
              }}
              className="rounded-circle"
            />
          }
        >
          <span>
            <SmartphoneOutlinedIcon
              sx={{
                backgroundColor: 'white',
                color: '#464748',
                height: '45px',
                width: '45px',
                padding: '10px',
              }}
              className="rounded-circle"
            />
            <span className="ms-3">553 **********</span>
          </span>
        </Button>
      </div>
    </div>
  );
};

export { UserMinOne };
