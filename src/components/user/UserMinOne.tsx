// import React from 'react';
import { IconButton, Link, useTheme } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useAds } from '../../hooks';
// import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
// import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { PhoneNumberTwo } from '../phoneNumber/PhoneNumberTwo';
// import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GeneralButton } from '../inputs/buttons/GeneralButton';
import ArrowForward from '@mui/icons-material/ArrowForward';
// import { useInitChat } from '../../hooks/querys/chats';
import { useAppContext } from '../../context';

const UserMinOne = () => {
  const { adSingleState } = useAds();
  const theme = useTheme();
  const navigateTo = useNavigate();
  const { state } = useAppContext();

  // if (adSingleState.ad?.id) {
  //   const { mutateAsync: initChat, isLoading: loadingChat } = useInitChat(
  //     adSingleState.ad?.id
  //   );
  // }

  // useEffect(()=>{
  //   console.log("USER", adSingleState?.ad?.user)
  // },[])
  const sendMessage = () => {
    if (!state?.userState?.token) {
      return;
    }
  };
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
          {adSingleState?.ad?.user?.microsite &&
          adSingleState?.ad?.user?.microsite.id ? (
            <Link
              component={'button'}
              sx={{
                fontSize: '14px',
                color: `${theme.palette.primary.main} !important`,
              }}
              className="text text-color-7 mt-1 text-font-l-d"
              onClick={() => {
                if (adSingleState?.ad?.user?.microsite?.id) {
                  navigateTo(
                    `/micrositio/${adSingleState.ad.user.microsite.id}`
                  );
                }
              }}
            >
              Ver micrositio
            </Link>
          ) : null}
        </div>
      </div>
      {adSingleState?.ad?.user?.phone ? (
        <div>
          <PhoneNumberTwo phoneNumber={adSingleState?.ad?.user?.phone} />
        </div>
      ) : null}
      {state.userState?.token ? (
        <div className="d-flex justify-content-center">
          <GeneralButton
            title="enviar mensaje"
            colorPrimary="secondary"
            hoverColor="secondary"
            onClick={sendMessage}
            endIcon={<ArrowForward />}
          />
        </div>
      ) : null}
    </div>
  );
};

export { UserMinOne };
