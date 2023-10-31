import React, { useState, ChangeEvent } from 'react';
import SouthIcon from '@mui/icons-material/South';
import { TextFieldOne } from '../inputs/text/TextFieldOne';
import { useTheme } from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
interface Props {}

const FormOne: React.FC<Props> = () => {
  const theme = useTheme();
  const [name, setName] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div className="form-custom form-custom-one">
      <div className="align-items-center d-flex fw-bold text text-color-5 text-font-rubik title">
        <div className="text-nowrap">Información general</div>
        <div className="ms-2 border-pointed w-100"> </div>
        <div>
          <SouthIcon />
        </div>
      </div>
      <div className="mt-3">
        <div className="fw-bold text text-color-5 text-font-rubik subtitle mb-3">
          Nombre de la publicación{' '}
          <span className="text text-color-secondary">*</span>
        </div>
        <TextFieldOne
          color={{
            variant: 'secondary',
            text: '#464748',
            field: theme.palette.secondary.main,
            backgroundColor: '#fff',
          }}
          text="Nombre de la publicación"
          icon={{ mui: <DriveFileRenameOutlineIcon color='secondary'/> }}
          onChange={onChange}
          value={name}
        />
      </div>
    </div>
  );
};

export { FormOne };
