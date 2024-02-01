import { Box, IconButton, useTheme } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { TextFieldThree } from '../inputs/text/TextFieldThree';
import { DropdownThree } from '../inputs/dropdown/DropdownThree';
import { useAllCategories } from '../../hooks';
import { useGetStates } from '../../hooks/querys/useStates';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router';
import SettingsIcon from '@mui/icons-material/Settings';

interface Option {
  label: string;
  value: string | number;
  quantity?: number;
}

const SearchTwo = () => {
  const theme = useTheme();
  const navigateTo = useNavigate();
  const [lookingFor, setLookingFor] = useState('');
  const allCategories = useAllCategories();
  const { data } = useGetStates();
  const [city, setCity] = useState<Option>({ label: 'Estado', value: 0 });
  const [category, setCategory] = useState<Option>({
    label: 'Categoría',
    value: 0,
  });
  const [settings, setSettings] = useState(false);

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
    <Box minHeight={'104px'} bgcolor={'#FC5C57'} className="search-two p-4">
      <Box
        display={'flex'}
        maxWidth={'1200px'}
        width={'100%'}
        className="search-container"
      >
        <TextFieldThree
          color={{
            variant: 'secondary',
            text: '#464748',
            field: theme.palette.secondary.main,
            backgroundColor: '#fff',
          }}
          text="Estoy Buscando..."
          value={lookingFor}
          onChange={onChangeLookingFor}
        />
        <IconButton
          onClick={onClickSearch}
          className="ms-2 me-0"
          sx={{
            backgroundColor: '#D02F3C',
            borderTopLeftRadius: '0px',
            borderBottomLeftRadius: '0px',
            borderTopRightRadius: '0',
            borderBottomRightRadius: '0',
            height: '42px',
            width: '52px',
            color: '#FFFFFF',
          }}
        >
          <SearchIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            setSettings(!settings);
          }}
          className="ms-0"
          sx={{
            backgroundColor: '#D02F3C',
            borderTopLeftRadius: '0px',
            borderBottomLeftRadius: '0px',
            borderTopRightRadius: '25px',
            borderBottomRightRadius: '25px',
            height: '42px',
            width: '52px',
            color: '#FFFFFF',
          }}
        >
          <SettingsIcon />
        </IconButton>
      </Box>
      {settings && (
        <>
          <div className="w-100 my-2">
            <DropdownThree
              icon={{
                endurl: '/svg/icons/menu_row_down.svg',
              }}
              color={{
                variant: 'secondary',
                text: '#464748',
                field: theme.palette.secondary.main,
                backgroundColor: '#fff',
              }}
              text="Categoría"
              options={allCategories.data?.data.map((category) => ({
                label: category.name,
                value: category.slug,
                quantity: category.listings_count ?? 0,
              }))}
              onChange={onChangeCategory}
              maxWidth="100%"
            />
          </div>
          <DropdownThree
            color={{
              variant: 'secondary',
              text: '#464748',
              field: theme.palette.secondary.main,
              backgroundColor: '#fff',
            }}
            text="Estado"
            icon={{
              endurl: '/svg/icons/menu_row_down.svg',
            }}
            options={data?.data?.map((city) => ({
              label: city?.name,
              value: city?.id,
              quantity: city.listings_count ?? 0,
            }))}
            onChange={onChangeCity}
            maxWidth="100%"
          />
        </>
      )}
    </Box>
  );
};

export { SearchTwo };
