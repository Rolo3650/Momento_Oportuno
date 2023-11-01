import React, { useState, ChangeEvent } from 'react';
import SouthIcon from '@mui/icons-material/South';
import { TextFieldOne } from '../inputs/text/TextFieldOne';
import {
  Checkbox,
  useTheme,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { useAllCategories } from '../../hooks';
import { DropdownOne } from '../inputs/dropdown/DropdownOne';
import { useGetStates } from '../../hooks/querys/useStates';
import PlaceIcon from '@mui/icons-material/Place';
import Textarea from '@mui/joy/Textarea';
import { Box, Button } from '@mui/joy';
import { ThemeTwo } from '../../themes/ThemeTwo';
import { styled } from '@mui/joy';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import PrintIcon from '@mui/icons-material/Print';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import ScreenShareOutlined from '@mui/icons-material/ScreenShareOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ImageIcon from '@mui/icons-material/Image';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import VideocamIcon from '@mui/icons-material/Videocam';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BackupIcon from '@mui/icons-material/Backup';

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
  const [extraVideo, setExtraVideo] = useState<boolean>(false);
  const [extraImages, setExtraImages] = useState<boolean>(false);
  const [extraStates, setExtraSates] = useState<boolean>(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeCategory = (option: Option) => {
    console.log(city);
    setCategorySelected(option);
  };

  const onChangeCity = (option: Option) => {
    console.log(categorySelected);
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
            sx={{
              width: '100%',
            }}
            className="py-5 fs-3"
            component="label"
            role={undefined}
            tabIndex={-1}
            variant="outlined"
            color="primary"
            startDecorator={
              <BackupIcon
                sx={{
                  fontSize: '40px',
                }}
              />
            }
          >
            Subir una Imagen
            <VisuallyHiddenInput type="file" />
          </Button>
        </ThemeTwo>
      </div>
      <div className="mt-3 mt-3 align-items-center d-flex fw-bold text text-color-5 text-font-rubik title">
        <div className="text-nowrap">Addons</div>
        <div className="border-pointed w-100 mx-3"> </div>
        <div>
          <SouthIcon color="secondary" />
        </div>
      </div>
      <div className="mt-3">
        <div className="fw-bold text text-color-5 text-font-l-d subtitle">
          <Checkbox
            color="secondary"
            icon={<PrintOutlinedIcon color="secondary" />}
            checkedIcon={<PrintIcon color="secondary" />}
          />
          Impreso
        </div>
        <div className="fw-bold text text-color-5 text-font-l-d subtitle">
          <Checkbox
            color="secondary"
            icon={<StarBorderIcon color="secondary" />}
            checkedIcon={<StarIcon color="secondary" />}
          />
          Destacado
        </div>
        <div className="fw-bold text text-color-5 text-font-l-d subtitle">
          <Checkbox
            color="secondary"
            icon={<ScreenShareOutlined color="secondary" />}
            checkedIcon={<ScreenShareIcon color="secondary" />}
          />
          Redes Sociales
        </div>
        <div className="fw-bold text text-color-5 text-font-l-d subtitle">
          <Checkbox
            color="secondary"
            icon={<ImageOutlinedIcon color="secondary" />}
            checkedIcon={<ImageIcon color="secondary" />}
            onChange={(e) => {
              setExtraImages(e.target.checked);
            }}
            value={extraImages}
          />
          Agregar Más Imagenes
        </div>
        <div>
          {extraImages && <div className="ms-5">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                defaultValue={"5"}
                // value={value}
                // onChange={handleChange}
              >
                <FormControlLabel
                  value="5"
                  control={<Radio color='secondary'/>}
                  label="5 Imagees"
                />
                <FormControlLabel
                  value="10"
                  control={<Radio color='secondary'/>}
                  label="10 Imagenes"
                />
              </RadioGroup>
            </FormControl>
          </div>}
        </div>
        <div className="fw-bold text text-color-5 text-font-l-d subtitle">
          <Checkbox
            color="secondary"
            icon={<VideocamOutlinedIcon color="secondary" />}
            checkedIcon={<VideocamIcon color="secondary" />}
            onChange={(e) => {
              setExtraVideo(e.target.checked);
            }}
            value={extraVideo}
          />
          Agregar Video
          {extraVideo && (
            <>
              {/* <div className="align-items-center d-flex fw-bold text text-color-5 text-font-rubik subtitle">
                <div className="text-nowrap">Video</div>
                <div className="border-pointed w-100 mx-3"> </div>
                <div>
                  <SouthIcon color="secondary" />
                </div>
              </div> */}
              <div className="mt-3 mb-3">
                <TextFieldOne
                  color={{
                    variant: 'secondary',
                    text: '#464748',
                    field: theme.palette.secondary.main,
                    backgroundColor: '#fff',
                  }}
                  text="https://www.ejemplo.mp4"
                  icon={{
                    mui: <DriveFileRenameOutlineIcon color="secondary" />,
                  }}
                  onChange={onChange}
                  value={name}
                />
              </div>
              <div className="mt-3 mb-3">
                <ThemeTwo>
                  <Button
                    sx={{
                      width: '100%',
                    }}
                    className="py-5 fs-3"
                    component="label"
                    role={undefined}
                    tabIndex={-1}
                    variant="outlined"
                    color="primary"
                    startDecorator={
                      <BackupIcon
                        sx={{
                          fontSize: '40px',
                        }}
                      />
                    }
                  >
                    Subir un Video
                    <VisuallyHiddenInput type="file" />
                  </Button>
                </ThemeTwo>
              </div>
            </>
          )}
        </div>
        <div className="fw-bold text text-color-5 text-font-l-d subtitle">
          <Checkbox
            color="secondary"
            icon={<LocationOnOutlinedIcon color="secondary" />}
            checkedIcon={<LocationOnIcon color="secondary" />}
            onChange={(e) => {
              setExtraSates(e.target.checked);
            }}
            value={extraStates}
          />
          Multi Estado
          {extraStates && <div className="ms-5">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                defaultValue={"1"}
                // value={value}
                // onChange={handleChange}
              >
                <FormControlLabel
                  value="1"
                  control={<Radio color='secondary'/>}
                  label="Estados Principales"
                />
                <FormControlLabel
                  value="2"
                  control={<Radio color='secondary'/>}
                  label="Todos los estados"
                />
              </RadioGroup>
            </FormControl>
          </div>}
        </div>
      </div>
    </div>
  );
};

export { FormOne };
