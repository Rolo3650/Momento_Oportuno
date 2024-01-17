import React, { ChangeEvent, useState } from 'react';
import { Button, FormControl, IconButton, TextField } from '@mui/material';
import { useValidate } from '../../../hooks/validate/useValidate';
import ClearIcon from '@mui/icons-material/Clear';

interface Option {
  label: string;
  value: string | number;
}

interface Props {
  icon?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    muiIcon?: any;
    url?: string;
    endurl?: string;
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
  option?: Option;
  options?: Option[];
  onChange: (option: Option) => void;
}

const DropdownTwo: React.FC<Props> = ({
  icon,
  color,
  text,
  options,
  option,
  onChange,
}) => {
  const [filter, setFilter] = useState('');
  const [select, setSelect] = useState<Option>({ label: text, value: 0 });
  const { includesText } = useValidate();

  const onChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const onClick = (option: Option) => {
    setSelect(option);
    onChange(option);
  };

  const onClear = () => {
    setSelect({ label: text, value: 0 });
    onChange({ label: text, value: 0 });
  };

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
          '& .start-image': {
            height: '30px',
            padding: '7px',
            borderRadius: '5px',
            backgroundColor: color?.field,
          },
          backgroundColor: color?.backgroundColor,
          '&:hover': {
            backgroundColor: color?.backgroundColor,
          },
        }}
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <div className="d-flex w-100 justify-content-start">
          {icon?.url && <img className="start-image" src={icon?.url} alt="" />}
          {icon?.muiIcon}
          <p className="ms-2 m-0 fs-6">{option?.label ?? select?.label}</p>
        </div>
        {option?.label != text && select.label != text && (
          <div>
            <IconButton className="p-0" onClick={onClear}>
              <ClearIcon
                sx={{
                  color: color?.field,
                }}
              />
            </IconButton>
          </div>
        )}
        {!option && select.label == text && (
          <div>
            <img className="mx-2" src={icon?.endurl} alt="icon-image" />
          </div>
        )}
        {option && option?.label == text && (
          <div>
            <img className="mx-2" src={icon?.endurl} alt="icon-image" />
          </div>
        )}
      </Button>
      <div className="dropdown-menu px-3 dropdown-custom dropdown-custom-one">
        <FormControl fullWidth>
          <TextField
            color="secondary"
            variant="outlined"
            value={filter}
            onChange={onChangeFilter}
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
        {options
          ?.filter((option) => {
            if (filter != '') {
              if (includesText(option?.label, filter)) {
                return true;
              } else return false;
            } else return true;
          })
          ?.map((option: Option) => (
            <li key={option.value}>
              <Button
                className="w-100 justify-content-between dropdown-btn align-items-center"
                sx={{ textTransform: 'none', color: color?.text }}
                onClick={() => onClick(option)}
              >
                {option?.label}
              </Button>
            </li>
          ))}
      </div>
    </>
  );
};

export { DropdownTwo };
