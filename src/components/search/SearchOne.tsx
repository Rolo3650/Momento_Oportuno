import { Box, IconButton, useTheme } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { TextFieldThree } from '../inputs/text/TextFieldThree';
import { DropdownThree } from '../inputs/dropdown/DropdownThree';
import { useAllCategories } from '../../hooks';
import { useGetStates } from '../../hooks/querys/useStates';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router';

interface Option {
  label: string;
  value: string | number;
  quantity?: number;
}

const SearchOne = () => {
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
    <Box
      height={'104px'}
      bgcolor={'#FC5C57'}
      className="search-one"
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
    >
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
        />
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
        />
        <IconButton onClick={onClickSearch} className='ms-2' sx={{
            backgroundColor: "#D02F3C",
            borderTopLeftRadius: '0px',
            borderBottomLeftRadius: '0px',
            borderTopRightRadius: '25px',
            borderBottomRightRadius: '25px',
            height: '42px',
            width: '52px',
            color: "#FFFFFF",
        }}>
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export { SearchOne };
