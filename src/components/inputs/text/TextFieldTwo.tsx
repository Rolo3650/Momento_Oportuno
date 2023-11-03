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

const TextFieldTwo: React.FC<Props> = ({
  color,
  text,
  value,
  onChange,
}) => {
  return (
    <FormControl fullWidth>
      <TextField
        color={color.variant}
        variant="outlined"
        value={value}
        onChange={onChange}
        sx={{
          height: '64px',
          borderRadius: '5px',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: color.field,
          },
          '& .MuiInputBase-root': {
            height: '64px',
          },
          '& input::placeholder': {
            color: color.text,
            opacity: 1,
          },
          '& img': {
            height: '30px',
            padding: '7px',
            borderRadius: '5px',
            backgroundColor: color.field,
          },
          backgroundColor: '#fff',
        }}
        placeholder={text}
      />
    </FormControl>
  );
};

export { TextFieldTwo };
