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
  quantity?: number;
}

interface Props {
  label: string;
  option?: Option;
  options: Option[] | undefined;
  onChange?: (option: Option) => void;
  height?: string;
  color?: string;
}

const SelectTwo: React.FC<Props> = ({
  option,
  options,
  onChange,
  label,
  height,
  color
}) => {
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
            borderColor: color ? `${color}` : '#FD8A24',
            height: height ? `${height}` : undefined,
            alignItems: 'center',
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
