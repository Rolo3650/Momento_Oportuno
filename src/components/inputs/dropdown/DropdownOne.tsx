import React from 'react';
import { Button, FormControl, TextField } from '@mui/material';

interface Props {
  icon?: {
    url: string;
  };
  color: {
    variant:
      | 'inherit'
      | 'primary'
      | 'secondary'
      | 'success'
      | 'error'
      | 'info'
      | 'warning';
    field: string;
    text: string;
    backgroundColor: string;
  };
  text: string;
  options?: {
    label: string;
    value: string;
    quantity: number;
  }[];
}

const DropdownOne: React.FC<Props> = ({ icon, color, text, options }) => {
  return (
    <>
      <Button
        className="w-100"
        variant="outlined"
        color={`${color?.variant}`}
        sx={{
          borderColor: color?.field,
          paddingY: '16px',
          textTransform: 'none',
          color: color?.text,
          fontWeight: '400',
          '& input::placeholder': {
            color: color?.text,
            opacity: 1,
          },
          '& img': {
            height: '30px',
            padding: '7px',
            borderRadius: '5px',
            backgroundColor: color?.field,
          },
          backgroundColor: color?.backgroundColor,
        }}
        data-bs-toggle="dropdown"
        aria-expanded="false"
        //   startIcon={}
      >
        <div className="d-flex w-100 justify-content-start">
          <img src={icon?.url} alt="" />
          <p className="ms-2 m-0 fs-6">{text}</p>
        </div>
      </Button>
      <div className="dropdown-menu px-3 dropdown-custom dropdown-custom-one">
        <FormControl fullWidth>
          <TextField
            color="secondary"
            variant="outlined"
            // value={lookingFor}
            // onChange={onChangeLookingFor}
            sx={{
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: color?.field,
              },
              '& input::placeholder': {
                color: '#464748',
                opacity: 1,
              },
              '& img': {
                height: '30px',
                padding: '7px',
                borderRadius: '5px',
                backgroundColor: color?.field,
              },
              backgroundColor: color?.backgroundColor,
            }}
            placeholder="Buscar..."
            className="mb-1"
          />
        </FormControl>
        {options?.map((option) => (
          <li>
            <Button
              className="w-100 justify-content-between dropdown-btn align-items-center"
              sx={{ textTransform: 'none', color: color?.text }}
            >
              {option?.label}
              <span className="field d-flex align-items-center justify-content-center">
                {option.quantity}
              </span>
            </Button>
          </li>
        ))}
      </div>
    </>
  );
};

export { DropdownOne };
