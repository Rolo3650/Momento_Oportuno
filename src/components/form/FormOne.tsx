import React, { useState, ChangeEvent } from 'react';
import SouthIcon from '@mui/icons-material/South';
import { TextFieldOne } from '../inputs/text/TextFieldOne';
import { useTheme } from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { useAllCategories } from '../../hooks';
import { DropdownOne } from '../inputs/dropdown/DropdownOne';
import { useGetStates } from '../../hooks/querys/useStates';
import PlaceIcon from '@mui/icons-material/Place';
import Textarea from '@mui/joy/Textarea';
import { Box, Button, SvgIcon } from '@mui/joy';
import { ThemeTwo } from '../../themes/ThemeTwo';
import { styled } from '@mui/joy';

interface Option {
  label: string;
  value: number | string;
  quantity?: number;
}

interface Props {}

const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

const FormOne: React.FC<Props> = () => {
  const theme = useTheme();
  const [name, setName] = useState('');
  const allCategories = useAllCategories();
  const initialState = {
    label: 'Cualquier',
    value: 0,
    quantity: 30,
  };
  const { data } = useGetStates();
  const [categorySelected, setCategorySelected] =
    useState<Option>(initialState);
  const [city, setCity] = useState<Option>(initialState);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeCategory = (option: Option) => {
    console.log(city)
    setCategorySelected(option);
  };

  const onChangeCity = (option: Option) => {
    console.log(categorySelected)
    setCity(option);
  };


  return (
    <div className="form-custom form-custom-one background background-color-7 rounded-4">
      <div className=" align-items-center d-flex fw-bold text text-color-5 text-font-rubik title">
        <div className="text-nowrap">Información general</div>
        <div className="border-pointed w-100 mx-3"></div>
        <div>
          <SouthIcon color="secondary" />
        </div>
      </div>
      <div className="mt-3">
        <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3">
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
          icon={{ mui: <DriveFileRenameOutlineIcon color="secondary" /> }}
          onChange={onChange}
          value={name}
        />
      </div>
      <div className="mt-3 row-custom">
        <div className="mb-3">
          <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3">
            Categoría <span className="text text-color-secondary">*</span>
          </div>
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
              quantity: 0,
            }))}
            onChange={onChangeCategory}
          />
        </div>
        <div className="mb-3">
          <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3">
            Precio <span className="text text-color-secondary">*</span>
          </div>
          <TextFieldOne
            color={{
              variant: 'secondary',
              text: '#464748',
              field: theme.palette.secondary.main,
              backgroundColor: '#fff',
            }}
            text="Nombre de la publicación"
            icon={{ mui: <DriveFileRenameOutlineIcon color="secondary" /> }}
            onChange={onChange}
            value={name}
          />
        </div>
        <div className="mb-3">
          <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3">
            Ciudad <span className="text text-color-secondary">*</span>
          </div>
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
        </div>
      </div>
      <div className="mt-3 align-items-center d-flex fw-bold text text-color-5 text-font-rubik title">
        <div className="text-nowrap">Descripción</div>
        <div className="border-pointed w-100 mx-3"> </div>
        <div>
          <SouthIcon color="secondary" />
        </div>
      </div>
      <div className="mt-3">
        <ThemeTwo>
          <Box
            sx={{
              py: 2,
              display: 'grid',
              gap: 2,
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Textarea
              color="primary"
              placeholder="Descripción"
              variant="outlined"
              minRows={5}
              maxRows={10}
            />
          </Box>
        </ThemeTwo>
      </div>
      <div className="mt-3 align-items-center d-flex fw-bold text text-color-5 text-font-rubik title">
        <div className="text-nowrap">Video</div>
        <div className="border-pointed w-100 mx-3"> </div>
        <div>
          <SouthIcon color="secondary" />
        </div>
      </div>
      <div className="mt-3">
        <TextFieldOne
          color={{
            variant: 'secondary',
            text: '#464748',
            field: theme.palette.secondary.main,
            backgroundColor: '#fff',
          }}
          text="https://www.ejemplo.mp4"
          icon={{ mui: <DriveFileRenameOutlineIcon color="secondary" /> }}
          onChange={onChange}
          value={name}
        />
      </div>
      <div className="mt-3 mt-3 align-items-center d-flex fw-bold text text-color-5 text-font-rubik title">
        <div className="text-nowrap">Imágenes</div>
        <div className="border-pointed w-100 mx-3"> </div>
        <div>
          <SouthIcon color="secondary" />
        </div>
      </div>
      <div className="mt-3">
        <ThemeTwo>
          <Button
            component="label"
            role={undefined}
            tabIndex={-1}
            variant="outlined"
            color="primary"
            startDecorator={
              <SvgIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
              </SvgIcon>
            }
          >
            Subir una imagen
            <VisuallyHiddenInput type="file" />
          </Button>
        </ThemeTwo>
      </div>
    </div>
  );
};

export { FormOne };
