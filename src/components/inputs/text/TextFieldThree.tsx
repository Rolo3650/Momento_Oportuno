import { FormControl, TextField } from '@mui/material';
import React, { ChangeEventHandler } from 'react';

interface Props {
  color: {
    variant: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    field: string;
    text: string;
    backgroundColor: string;
  };
  text: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const TextFieldThree: React.FC<Props> = ({ color, text, value, onChange }) => {
  return (
    <FormControl fullWidth>
      <TextField
        color={color.variant}
        variant="outlined"
        value={value}
        onChange={onChange}
        sx={{
          height: '42px',
          borderRadius: '10px',
          fontSize: '16px',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: color.field,
          },
          '& .MuiInputBase-root': {
            height: '42px',
            fontSize: '16px',
          },
          '& input::placeholder': {
            color: "#888",
            opacity: 1,
            fontSize: '16px',
          },
          '& img': {
            height: '30px',
            padding: '7px',
            borderRadius: '10px',
            backgroundColor: color.field,
          },
          backgroundColor: '#fff',
        }}
        placeholder={text}
      />
    </FormControl>
  );
};

export { TextFieldThree };
