import React, { useEffect, useState } from 'react';
import { SelectTwo } from '../inputs/select/SelectTwo';
import { useNavigateCustom, useSearch } from '../../hooks';
import { useParams } from 'react-router';
import { IconButton, useTheme } from '@mui/material';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import TableRowsRoundedIcon from '@mui/icons-material/TableRowsRounded';

interface Option {
  label: string;
  value: number | string;
}

interface Props {}

const OrderByOne: React.FC<Props> = () => {
  const theme = useTheme();
  const optionsOne = [
    { label: 'Más Relevante', value: 'most-relevant' },
    { label: 'Fecha de Publicación: La más nueva', value: 'newest' },
    { label: 'Fecha de Publicación: La más antigua', value: 'latest' },
    { label: 'Precio: Más alto', value: 'price-high-to-low' },
    { label: 'Precio: Más bajo', value: 'price-low-to-high' },
  ];
  const initalStateOne = { label: 'Más Relevante', value: 'most-relevant' };
  const initalStateTwo = 'card';
  const [orderByOne, setOrderByOne] = useState<Option>(initalStateOne);
  const [orderByTwo, setOrderByTwo] = useState<string>(initalStateTwo);
  const { navigatePersistQuery } = useNavigateCustom();
  const { searchParam } = useSearch();
  const params = useParams();

  const onChangeOne = (option: Option) => {
    setOrderByOne(option);
    navigatePersistQuery('sort-by', `${option.value}`);
  };

  const onChangeTwo = (option: string) => {
    setOrderByTwo(option);
    navigatePersistQuery('view', `${option}`);
  };

  useEffect(() => {
    if (searchParam('sort-by')) {
      const option = optionsOne?.find(
        (option) => option.value == searchParam('sort-by')
      );
      if (option) setOrderByOne(option);
    }
    if (searchParam('view')) {
      setOrderByTwo(`${searchParam('view')}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <div className="d-flex justify-content-between flex-wrap align-items-center">
      <div className="fw-bold fs-4 text text-font-rubik text-color-5">
        22 Resultados &nbsp;
        <span className="text-color-primary fs-6 fw-normal text text-font-l-d">
          Classified Ads
        </span>
      </div>
      <div className="d-flex">
        <SelectTwo
          label="Ordenado Por"
          option={orderByOne}
          options={optionsOne}
          onChange={onChangeOne}
        />
        <IconButton
          className="ms-2 icon-btn"
          sx={{
            border: '1px solid #FD8A24',
            width: '56px',
            height: '56px',
            borderRadius: '5px',
            color: orderByTwo == 'card' ? 'white' : '',
            backgroundColor:
              orderByTwo == 'card' ? theme.palette.primary.main : '',
            '&:hover': {
              color: orderByTwo == 'card' ? 'white' : '',
              backgroundColor:
                orderByTwo == 'card' ? theme.palette.primary.light : '',
            },
          }}
          onClick={() => onChangeTwo('card')}
        >
          <GridViewRoundedIcon />
        </IconButton>
        <IconButton
          className="ms-2 icon-btn"
          sx={{
            border: '1px solid #FD8A24',
            width: '56px',
            height: '56px',
            borderRadius: '5px',
            color: orderByTwo == 'row' ? 'white' : '',
            backgroundColor:
              orderByTwo == 'row' ? theme.palette.primary.main : '',
            '&:hover': {
              color: orderByTwo == 'row' ? 'white' : '',
              backgroundColor:
                orderByTwo == 'row' ? theme.palette.primary.light : '',
            },
          }}
          onClick={() => onChangeTwo('row')}
        >
          <TableRowsRoundedIcon />
        </IconButton>
      </div>
    </div>
  );
};

export { OrderByOne };
