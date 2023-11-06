import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import React, { useState } from 'react';

interface Option {
  label: string;
  value: string | number;
}

interface Props {
  options: Option[];
  defaultValue: string | number;
  onChange?: (option: Option) => void;
  value: string | number | null;
}

const RadioGroupOne: React.FC<Props> = ({
  options,
  defaultValue,
  onChange,
  value
}) => {
  const [innnerValue, setValue] = useState<number | string>(defaultValue);

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        defaultValue={defaultValue}
        onChange={(e) => {
          setValue(e.target.value);
          if (onChange) {
            const option = options.find(o => o.value == e.target.value);
            if (option?.value) {
              onChange(option);
            }
          }
        }}
        value={value ?? innnerValue}
      >
        {options?.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio color="secondary" />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export { RadioGroupOne };
