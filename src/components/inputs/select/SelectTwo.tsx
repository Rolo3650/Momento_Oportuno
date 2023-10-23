import {
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  MenuItem,
} from '@mui/material';
import React, { useState } from 'react';

interface Option {
  label: string;
  value: number | string;
}

interface Props {
  label: string;
  option?: Option;
  options: Option[];
  onChange?: (option: Option) => void;
}

const SelectTwo: React.FC<Props> = ({ option, options, onChange, label }) => {
  const [value, setValue] = useState<Option>({
    label: 'Cualquier',
    value: 'Cualquier',
  });

  const onChangeValue = (e: SelectChangeEvent) => {
    const option_selected = options?.find(
      (option) => option?.value == e.target.value
    );
    if (option_selected) {
      setValue(option_selected);
      if (onChange) onChange(option_selected);
    }
    // setValue(e.target.value);
  };

  return (
    <FormControl
      fullWidth
      sx={{
        '& .MuiFormLabel-root': {
          color: '#464748',
        },
      }}
    >
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={option?.value?.toString() ?? `${value.value}`}
        label={label}
        onChange={onChangeValue}
        sx={{
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#FD8A24',
          },
        }}
        variant="outlined"
      >
        {options?.map((option) => (
          <MenuItem key={option?.label} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export { SelectTwo };
