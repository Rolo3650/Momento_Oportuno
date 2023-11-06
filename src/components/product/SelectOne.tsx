import React from 'react';
import { AttributeAd } from '../../api';
import CheckIcon from '@mui/icons-material/Check';
import { useTheme } from '@mui/material';

interface Props {
  atribute?: AttributeAd;
}

const SelectOne: React.FC<Props> = ({ atribute }) => {
  const theme = useTheme();

  return (
    <div className="">
      <div className="fs-4 text text-font-r-h-d text-color-5 fw-bold">
        {atribute?.name}
      </div>
      <div className="row w-100">
        {typeof atribute?.value != 'string' &&
          atribute?.value.map((value) => (
            <div className="my-2 col-6 d-flex align-items-center">
              <CheckIcon
                sx={{
                  background: theme?.palette?.primary.main,
                  color: 'white',
                }}
                className="p-1 rounded-circle"
              />
              <span className="ms-3 fs-6">{value.name}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export { SelectOne };
