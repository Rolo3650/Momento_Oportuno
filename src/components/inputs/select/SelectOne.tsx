import { Button, FormControl, useTheme } from '@mui/material';
import React from 'react';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

interface Option {
  label: string;
  value: number | string;
  quantity?: number;
}

interface Props {
  option: Option;
  options?: Option[];
  onChange?: (value: Option) => void;
}

const SelectOne: React.FC<Props> = ({ option, options, onChange }) => {
  const theme = useTheme();

  const onClick = (option: Option) => {
    if (onChange) onChange(option);
  };

  const onClickBefore = () => {
    if (onChange)
      onChange({
        label: 'Cualquier',
        value: 0,
        quantity: 30,
      });
  };

  return (
    <div>
      {option.value == 0 && (
        <>
          <FormControl fullWidth>
            <Button
              sx={{
                paddingY: '2px',
                textTransform: 'none',
              }}
              className="justify-content-start text text-font-l-d"
              startIcon={<RadioButtonCheckedIcon />}
            >
              Cualquier
              {/* ({option.quantity}) */}
            </Button>
          </FormControl>
          {options?.map((option, index) => (
            <FormControl fullWidth key={`option-${option}-${index}`}>
              <Button
                sx={{
                  paddingY: '2px',
                  textTransform: 'none',
                  color: '#464748',
                  '&:hover': {
                    color: theme.palette.primary.main,
                  },
                }}
                className="justify-content-start text text-font-l-d"
                startIcon={<RadioButtonUncheckedIcon />}
                onClick={() => onClick(option)}
              >
                {option?.label}
                {/* ({option.quantity}) */}
              </Button>
            </FormControl>
          ))}
        </>
      )}
      {option.value != 0 && (
        <FormControl fullWidth>
          <Button
            sx={{
              paddingY: '2px',
              textTransform: 'none',
            }}
            className="justify-content-start text text-font-l-d"
            startIcon={<NavigateBeforeIcon />}
            onClick={onClickBefore}
          >
            Todos
          </Button>
        </FormControl>
      )}
    </div>
  );
};

export { SelectOne };
