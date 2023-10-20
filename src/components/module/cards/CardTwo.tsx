import React, { useState, ChangeEvent } from 'react';
import { FormControl, InputAdornment, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { DropdownOne } from '../../inputs/dropdown/DropdownOne';

interface Props {}

const CardTwo: React.FC<Props> = () => {
  const theme = useTheme();
  const [lookingFor, setLookingFor] = useState('');

  const onChangeLookingFor = (e: ChangeEvent<HTMLInputElement>) => {
    setLookingFor(e.target.value);
  };

  return (
    <div className="card-custom card-custom-two px-4 py-5">
      <div className="card-custom-heading text text-font-rubik fs-4 text-center">
        Buscar Anuncios
      </div>
      <div className="mt-4 p-1">
        <FormControl fullWidth>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src="../../../../../svg/icons/idea_one.svg" alt="" />
                  {/* Icono de inicio */}
                </InputAdornment>
              ),
            }}
            color="secondary"
            variant="outlined"
            value={lookingFor}
            onChange={onChangeLookingFor}
            sx={{
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.secondary.main,
              },
              '& input::placeholder': {
                color: '#464748',
                opacity: 1,
              },
              '& img': {
                height: '30px',
                padding: '7px',
                borderRadius: '5px',
                backgroundColor: theme.palette.secondary.main,
              },
              backgroundColor: '#fff',
            }}
            placeholder="Estoy Buscando..."
          />
        </FormControl>
        <div className="mt-4">
          <DropdownOne
            color={{
              variant: 'secondary',
              text: '#464748',
              field: theme.palette.secondary.main,
              backgroundColor: '#fff',
            }}
            text="Categoría"
            icon={{ url: '../../../../../svg/icons/idea_one.svg' }}
            options={[
              { label: 'Pesca', value: 'Pesca', quantity: 1 },
              { label: 'Pesca', value: 'Pesca', quantity: 1 },
              { label: 'Pesca', value: 'Pesca', quantity: 1 },
              { label: 'Pesca', value: 'Pesca', quantity: 1 },
              { label: 'Pesca', value: 'Pesca', quantity: 1 },
              { label: 'Deportes', value: 'Deportes', quantity: 2 }
            ]}
          />
        </div>
        <div className="mt-4">
          <DropdownOne
            color={{
              variant: 'secondary',
              text: '#464748',
              field: theme.palette.secondary.main,
              backgroundColor: '#fff',
            }}
            text="Ciudad"
            icon={{ url: '../../../../../svg/icons/idea_one.svg' }}
            options={[
              { label: 'CDMX', value: 'CDMX', quantity: 1 },
              { label: 'CDMX', value: 'CDMX', quantity: 1 },
              { label: 'CDMX', value: 'CDMX', quantity: 1 },
              { label: 'CDMX', value: 'CDMX', quantity: 1 },
              { label: 'CDMX', value: 'CDMX', quantity: 1 },
              { label: 'Quintana Roo', value: 'Quintana Roo', quantity: 2 }
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export { CardTwo };
