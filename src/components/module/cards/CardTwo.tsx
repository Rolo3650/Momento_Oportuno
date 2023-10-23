import React, { useState, ChangeEvent } from 'react';
import { useTheme } from '@mui/material/styles';
import { DropdownOne } from '../../inputs/dropdown/DropdownOne';
import { TextFieldOne } from '../../inputs/text/TextFieldOne';
import { Button, CircularProgress, FormControl } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';

interface Option {
  label: string;
  value: string | number;
  quantity?: number;
}

interface Props {}

const CardTwo: React.FC<Props> = () => {
  const theme = useTheme();
  const [lookingFor, setLookingFor] = useState('');
  const [loading, setLoading] = useState<boolean>(false);

  const onChangeLookingFor = (e: ChangeEvent<HTMLInputElement>) => {
    setLookingFor(e.target.value);
  };

  const onChangeCategory = (option: Option) => {
    console.log(option);
  };

  const onChangeCity = (option: Option) => {
    console.log(option);
  };

  const onClickSearch = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="card-custom card-custom-two px-4 py-5">
      <div className="card-custom-heading text text-font-rubik fs-4 text-center">
        Buscar Anuncios
      </div>
      <div className="mt-4 p-1">
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
        <div className="mt-4">
          <DropdownOne
            color={{
              variant: 'secondary',
              text: '#464748',
              field: theme.palette.secondary.main,
              backgroundColor: '#fff',
            }}
            text="Categoría"
            icon={{
              url: '/svg/icons/ticket_one.svg',
              endurl: '/svg/icons/menu_row_down.svg',
            }}
            options={[
              { label: 'Pesca', value: 'Pesca', quantity: 1 },
              { label: 'Deportes', value: 'Deportes', quantity: 2 },
            ]}
            onChange={onChangeCategory}
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
            options={[
              { label: 'CDMX', value: 'CDMX', quantity: 1 },
              { label: 'Quintana Roo', value: 'Quintana Roo', quantity: 2 },
            ]}
            onChange={onChangeCity}
          />
        </div>
        <div className="mt-5">
          <FormControl fullWidth>
            <Button
              className="p-2"
              variant="contained"
              onClick={onClickSearch}
              sx={{
                '& .text': {
                  paddingTop: '8px',
                  paddingBottom: '7px',
                },
              }}
            >
              {loading && <CircularProgress color="secondary" />}
              {!loading && <span className="text">Buscar</span>}
            </Button>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export { CardTwo };
