import React, { useState, ChangeEvent } from 'react';
import { useTheme } from '@mui/material/styles';
import { DropdownOne } from '../../inputs/dropdown/DropdownOne';
import { TextFieldOne } from '../../inputs/text/TextFieldOne';
import { Button, CircularProgress, FormControl } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import { useGetStates } from '../../../hooks/querys/useStates';
import { useAllCategories } from '../../../hooks';
import { useNavigate } from 'react-router-dom';

interface Option {
  label: string;
  value: string | number;
  quantity?: number;
}

interface Props {}

const CardTwo: React.FC<Props> = () => {
  const theme = useTheme();
  const navigateTo = useNavigate();
  const [lookingFor, setLookingFor] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const { data } = useGetStates();
  const allCategories = useAllCategories();
  const [city, setCity] = useState<Option>({ label: 'Ciudad', value: 0 });
  const [category, setCategory] = useState<Option>({
    label: 'Categoría',
    value: 0,
  });

  const onChangeLookingFor = (e: ChangeEvent<HTMLInputElement>) => {
    setLookingFor(e.target.value);
  };

  const onChangeCategory = (option: Option) => {
    setCategory(option);
  };

  const onChangeCity = (option: Option) => {
    setCity(option);
  };

  const onClickSearch = () => {
    setLoading(true);
    setTimeout(() => {
      let route = '/ads?';
      if (category.value != 0) {
        route = `/ads/${category.value}?`;
      }
      if (city.value != 0) {
        route = `${route}city=${city.value}&`;
      }
      if (lookingFor != '') {
        route = `${route}keyword=${lookingFor}`;
      }
      navigateTo(route);
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
            options={allCategories.data?.data.map((category) => ({
              label: category.name,
              value: category.slug,
              quantity: category.listings_count ?? 0,
            }))}
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
            options={data?.data?.map((city) => ({
              label: city?.name,
              value: city?.id,
              quantity: city.listings_count ?? 0,
            }))}
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
