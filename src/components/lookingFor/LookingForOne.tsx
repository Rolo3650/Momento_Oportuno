import React, { useState } from 'react';

import { TextFieldOne } from '../inputs/text/TextFieldOne';
import { useTheme } from '@mui/material';
import { DropdownOne } from '../inputs/dropdown/DropdownOne';
import PlaceIcon from '@mui/icons-material/Place';
import { useGetStates } from '../../hooks/querys/useStates';

interface Option {
  label: string;
  value: number;
  quantity?: number;
}

const LookingFor = () => {
  const theme = useTheme();
  const [lookingFor, setLookingFor] = useState('');
  const { data } = useGetStates();

  const onChangeLookingFor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLookingFor(e.target.value);
  };

  const onChangeCity = (option: Option) => {
    console.log(option);
  };

  return (
    <div className="background background-color-16">
      <div className="looking-for looking-for-one mx-auto">
        <DropdownOne
          color={{
            variant: 'secondary',
            text: '#464748',
            field: theme.palette.secondary.main,
            backgroundColor: '#fff',
          }}
          text="Ciudad"
          icon={{
            muiIcon: (
              <PlaceIcon
                sx={{
                  height: '30px',
                  width: '30px',
                  padding: '2px',
                  borderRadius: '5px',
                  color: 'white',
                  backgroundColor: theme.palette.secondary.main,
                }}
              />
            ),
            endurl: '/svg/icons/menu_row_down.svg',
          }}
          options={data?.data?.map((city) => ({
            label: city?.name,
            value: city?.id,
            quantity: 1,
          }))}
          onChange={onChangeCity}
        />
        <TextFieldOne
          color={{
            variant: 'secondary',
            text: '#464748',
            field: theme.palette.secondary.main,
            backgroundColor: '#fff',
          }}
          text="Estoy Buscando..."
          icon={{ url: '/svg/icons/idea_one.svg' }}
          value={lookingFor}
          onChange={onChangeLookingFor}
        />
      </div>
    </div>
  );
};

export default LookingFor;
