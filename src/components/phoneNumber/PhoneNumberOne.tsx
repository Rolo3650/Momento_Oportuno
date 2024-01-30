import { useState } from 'react';
import SmartphoneOutlined from '@mui/icons-material/SmartphoneOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface PhoneNumber {
  phoneNumber: string;
}

const PhoneNumberOne = (props: PhoneNumber) => {
  const { phoneNumber } = props;
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const showPhoneNumber = () => {
    setIsVisible((p) => !p);
    // console.log('HOla');
  };
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="container-phoneNumber">
        <a
          href={`tel:${phoneNumber}`}
          className="d-flex justify-content-center align-items-center "
        >
          <div className="container-phoneIcon">
            <SmartphoneOutlined sx={{ color: '#464748' }} />
          </div>
          <div className="phoneNumber">
            {isVisible ? phoneNumber : `${phoneNumber.substring(0, 6)}...`}
          </div>
        </a>
        <div className="phoneNumber-visible" onClick={showPhoneNumber}>
          {!isVisible ? (
            <Visibility sx={{ color: '#464748' }} />
          ) : (
            <VisibilityOff sx={{ color: '#464748' }} />
          )}
        </div>
      </div>
    </div>
  );
};

export { PhoneNumberOne };
