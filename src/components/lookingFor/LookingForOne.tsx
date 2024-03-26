import React, { useEffect, useState } from 'react';

import { TextFieldOne } from '../inputs/text/TextFieldOne';
import { useTheme } from '@mui/material';
import { DropdownOne } from '../inputs/dropdown/DropdownOne';
import PlaceIcon from '@mui/icons-material/Place';
import { useGetStates } from '../../hooks/querys/useStates';
import { useNavigateCustom, useSearch } from '../../hooks';
import { useParams } from 'react-router-dom';

interface Option {
  label: string;
  value: number | string;
  quantity?: number;
}

const LookingFor = () => {
  const theme = useTheme();
  const params = useParams();
  const { navigatePersistQuery, deleteQuery } = useNavigateCustom();
  const [lookingFor, setLookingFor] = useState('');
  const [city, setCity] = useState<Option>({ label: 'Ubicación', value: 0 });
  const { data } = useGetStates();
  const { searchParam } = useSearch();

  const onChangeLookingFor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLookingFor(e.target.value);
    if (e.target.value == '') deleteQuery('keyword');
    else navigatePersistQuery('keyword', e.target.value?.replace(/\s/g, '%20'));
  };

  const onChangeCity = (option: Option) => {
    setCity(option);
    if (option?.value == 0) deleteQuery('city');
    else navigatePersistQuery('city', option?.value?.toString());
  };

  useEffect(() => {
    if (searchParam('city')) {
      const city = data?.data?.find(
        (city) => city?.id?.toString() == searchParam('city')
      );
      if (city)
        setCity({
          label: city.name,
          value: city.id,
          quantity: 30,
        });
    }
    if (searchParam('keyword')) setLookingFor(`${searchParam('keyword')}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.data, params]);

  return (
    <div className="background background-color-16">
      <div className="looking-for looking-for-one mx-auto">
        <DropdownOne
          option={city}
          color={{
            variant: 'secondary',
            text: '#464748',
            field: theme.palette.secondary.main,
            backgroundColor: '#fff',
          }}
          text="Ubicación"
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
