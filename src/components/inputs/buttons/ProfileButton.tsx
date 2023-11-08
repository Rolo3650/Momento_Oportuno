import React from 'react';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { IconButton, useTheme, Menu, MenuItem } from '@mui/material';
import { useAppContext } from '../../../context';
import { useNavigate } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TextsmsIcon from '@mui/icons-material/TextsmsOutlined';
import FavoriteIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AssignmentIcon from '@mui/icons-material/AssignmentOutlined';
import LogoutIcon from '@mui/icons-material/LogoutOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { useLogOut } from '../../../hooks';

const ProfileButton = () => {
  const theme = useTheme();
  const navigateTo = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { mutate } = useLogOut();

  const { state } = useAppContext();

  return (
    <>
      {!state?.userState?.token && (
        <IconButton
          sx={{
            border: `2px solid ${theme.palette.secondary.main}`,
          }}
          
          onClick={() => {
            if (state?.userState?.token && state?.userState?.token != '') {
              navigateTo('/list')
            }else {
              navigateTo('/login-register')
            }
          }}
        >
          <PermIdentityOutlinedIcon
            sx={{
              fontSize: '30px',
              color: theme.palette.primary.contrastText,
            }}
          />
        </IconButton>
      )}
      {state?.userState?.token && state?.userState?.token != '' && (
        <div className="profile-btn">
          <IconButton
            sx={{
              border: `2px solid ${theme.palette.secondary.main}`,
            }}
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <PermIdentityOutlinedIcon
              sx={{
                fontSize: '30px',
                color: theme.palette.primary.contrastText,
              }}
            />
          </IconButton>
          <span className="ms-2 text text-color-7">
            {state?.userState?.user?.name}
          </span>
          <Menu
            id="positioned-menu-profile"
            aria-labelledby="positioned-menu-profile"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem
              className="text text-font-helvetica"
              onClick={() => navigateTo('/panel/create')}
            >
              <AddCircleOutlineIcon className="text text-color-5" /> &nbsp;
              Publicar Anuncio
            </MenuItem>
            <MenuItem
              className="text text-font-helvetica"
              onClick={() => navigateTo('/panel/list')}
            >
              <DescriptionOutlinedIcon /> &nbsp; Mis Anuncios
            </MenuItem>
            <MenuItem
              className="text text-font-helvetica"
              onClick={() => navigateTo('/panel/messages')}
            >
              <TextsmsIcon /> &nbsp; Mensajes
            </MenuItem>
            <MenuItem
              className="text text-font-helvetica"
              onClick={() => navigateTo('/panel/favorites')}
            >
              <FavoriteIcon /> &nbsp; Favoritos
            </MenuItem>
            <MenuItem
              className="text text-font-helvetica"
              onClick={() => navigateTo('/panel/my-orders')}
            >
              <AssignmentIcon /> &nbsp; Mis ordenes
            </MenuItem>
            <MenuItem
              className="text text-font-helvetica"
              onClick={() => navigateTo('/panel/settings')}
              sx={{
                borderBottom: `1px solid ${theme?.palette?.secondary.main}`,
              }}
            >
              <AssignmentIcon /> &nbsp; Ajustes
            </MenuItem>
            <MenuItem
              className="text text-font-helvetica"
              onClick={() => {
                mutate();
                window.location.assign('/');
              }}
            >
              <LogoutIcon />
              &nbsp; Cerrar sesión
            </MenuItem>
          </Menu>
        </div>
      )}
    </>
  );
};

export { ProfileButton };
