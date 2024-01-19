import { useState } from 'react';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, useTheme } from '@mui/material';

interface PhoneNumber {
  phoneNumber: string;
}

const PhoneNumberTwo = (props: PhoneNumber) => {
  const theme = useTheme();

  const { phoneNumber } = props;

  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    // <div className="d-flex justify-content-center align-items-center">
    //   <div className="container-phoneNumber">
    //     <a
    //       href={`tel:${phoneNumber}`}
    //       className="d-flex justify-content-center align-items-center "
    //     >
    //       <div className="container-phoneIcon">
    //         <SmartphoneOutlined sx={{ color: '#464748' }} />
    //       </div>
    //       <div className="phoneNumber">
    //         {isVisible ? phoneNumber : `${phoneNumber.substring(0, 6)}...`}
    //       </div>
    //     </a>
    //     <div className="phoneNumber-visible" onClick={showPhoneNumber}>
    //       {!isVisible ? (
    //         <Visibility sx={{ color: '#464748' }} />
    //       ) : (
    //         <VisibilityOff sx={{ color: '#464748' }} />
    //       )}
    //     </div>
    //   </div>
    // </div>
    <Button
      className="w-100 p-3 fs-6 d-flex justify-content-between"
      sx={{
        backgroundColor: '#FD8A2A',
        '&:hover': {
          backgroundColor: '#FD8A2A',
        },
      }}
      endIcon={
        isVisible ? (
          <Visibility
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
        ) : (
          <VisibilityOff
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
        )
      }
      onClick={() => setIsVisible((p) => !p)}
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
        <span className="ms-3">
          {isVisible ? phoneNumber : `${phoneNumber.substring(0, 6)}...`}
        </span>
      </span>
    </Button>
  );
};

export { PhoneNumberTwo };
