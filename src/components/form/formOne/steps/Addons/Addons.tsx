import React from 'react';
import SouthIcon from '@mui/icons-material/South';
import { Box, Checkbox, Grid, Link, useTheme } from '@mui/material';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import PrintIcon from '@mui/icons-material/Print';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import ScreenShareOutlined from '@mui/icons-material/ScreenShareOutlined';
import { RadioGroupOne } from './RadioGroupOne';
import { useForm } from '../../../../../hooks';
// import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
// import ImageIcon from '@mui/icons-material/Image';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddVideo from './AddVideo';
import { DropdownFour } from '../../../../inputs/dropdown/DropdownFour';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

interface Props {}

const Addons: React.FC<Props> = () => {
  const { setNewAdForm, newAdForm } = useForm();
  const theme = useTheme();

  return (
    <>
      <div className="mt-3 mt-3 align-items-center d-flex fw-bold text text-color-5 text-font-rubik title">
        <div className="text-nowrap">Complementos</div>
        <div className="border-pointed w-100 mx-3"> </div>
        <div>
          <SouthIcon color="secondary" />
        </div>
      </div>
      <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3">
        Aumenta el rendimiento de tu anuncio con los complementos opcionales
        <span className="text text-color-secondary">*</span>
      </div>
      <div className="mt-3">
        <div className="fw-bold text text-color-5 text-font-l-d subtitle">
          <Checkbox
            color="secondary"
            onChange={(e) => {
              setNewAdForm({ feature: e.target.checked });
            }}
            checked={newAdForm.feature}
          />
          <Checkbox
            color="secondary"
            icon={<StarBorderIcon color="secondary" />}
            checkedIcon={<StarIcon color="primary" />}
            onChange={(e) => {
              setNewAdForm({ feature: e.target.checked });
            }}
            checked={newAdForm.feature}
          />
          Destacado <span className="text text-color-secondary">+$100</span>{' '}
          <span className="text text-color-10">
            Destaca tu anuncio entre nuestras publicaciones más recientes.
          </span>
        </div>
        <AddVideo />
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <div className="fw-bold text text-color-5 text-font-l-d subtitle">
              <Checkbox
                color="secondary"
                onChange={(e) => {
                  setNewAdForm({
                    print: {
                      ...newAdForm.print,
                      set: e.target.checked,
                    },
                  });
                }}
                checked={newAdForm.print.set}
              />
              <Checkbox
                color="secondary"
                icon={<PrintOutlinedIcon color="secondary" />}
                checkedIcon={<PrintIcon color="primary" />}
                onChange={(e) => {
                  setNewAdForm({
                    print: {
                      ...newAdForm.print,
                      set: e.target.checked,
                    },
                  });
                }}
                checked={newAdForm.print.set}
              />
              Impreso
              {newAdForm?.print.set && (
                <>
                  <div className="fw-bold text text-color-5 text-font-l-d subtitle ms-5 mb-3">
                    Lugar de publicación
                  </div>
                  <div className="ms-5 mb-4">
                    {/* <RadioGroupOne
                  value={newAdForm?.print.value}
                  onChange={(e) => {
                    setNewAdForm({
                      print: {
                        ...newAdForm.print,
                        value: e.value,
                      },
                    });
                  }}
                  defaultValue="medio-nac"
                  options={[
                    {
                      label: 'El Momento Nacional +$200',
                      value: 'medio-nac',
                    },
                    {
                      label: 'El Momento Quintana Roo +$100',
                      value: 'medio-qro',
                    },
                    {
                      label: 'El Momento Campeche +$100',
                      value: 'medio-cam',
                    },
                    {
                      label: 'El Momento Yucatán +$100',
                      value: 'medio-yuc',
                    },
                    {
                      label: 'El Momento Tabasco +$100',
                      value: 'medio-tab',
                    },
                    {
                      label: 'El Momento Chiapas +$100',
                      value: 'medio-chi',
                    },
                    {
                      label: 'El Momento Veracruz +$100',
                      value: 'medio-ver',
                    },
                    {
                      label: 'El Momento Baja California Sur +$100',
                      value: 'medio-baj',
                    },
                  ]}
                /> */}
                    <DropdownFour
                      option={{
                        label:
                          newAdForm?.print.value_label ??
                          'El Momento Nacional +$200',
                        value: newAdForm?.print.value ?? 'imedio-nac',
                      }}
                      color={{
                        variant: 'secondary',
                        text: '#464748',
                        field: theme.palette.secondary.main,
                        backgroundColor: '#fff',
                      }}
                      text="Lugar"
                      icon={{
                        url: '/svg/icons/ticket_one.svg',
                        endurl: '/svg/icons/menu_row_down.svg',
                      }}
                      options={[
                        {
                          label: 'El Momento Nacional +$200',
                          value: 'medio-nac',
                        },
                        {
                          label: 'El Momento Quintana Roo +$100',
                          value: 'medio-qro',
                        },
                        {
                          label: 'El Momento Campeche +$100',
                          value: 'medio-cam',
                        },
                        {
                          label: 'El Momento Yucatán +$100',
                          value: 'medio-yuc',
                        },
                        {
                          label: 'El Momento Tabasco +$100',
                          value: 'medio-tab',
                        },
                        {
                          label: 'El Momento Chiapas +$100',
                          value: 'medio-chi',
                        },
                        {
                          label: 'El Momento Veracruz +$100',
                          value: 'medio-ver',
                        },
                        {
                          label: 'El Momento Baja California Sur +$100',
                          value: 'medio-baj',
                        },
                      ]}
                      onChange={(e) => {
                        setNewAdForm({
                          print: {
                            ...newAdForm.print,
                            value: e.value ?? 'medio-nac',
                            value_label: e.label ?? 'El Momento Nacional +$200',
                          },
                        });
                      }}
                    />
                  </div>
                  <div className="fw-bold text text-color-5 text-font-l-d subtitle ms-5 mb-3">
                    Tamaño de impresión
                  </div>
                  <div className="ms-5 mb-4">
                    {/* <RadioGroupOne
                  value={newAdForm?.print.size}
                  onChange={(e) => {
                    setNewAdForm({
                      print: {
                        ...newAdForm.print,
                        size: e.value,
                      },
                    });
                  }}
                  defaultValue="impreso-4x4"
                  options={[
                    {
                      label: 'Anuncio Impreso Modular 4x4 cm +$100',
                      value: 'impreso-4x4',
                    },
                    {
                      label: 'Anuncio Impreso Modular 4x8.7cm +$110',
                      value: 'impreso-4x8',
                    },
                    {
                      label: 'Anuncio Impreso Modular 4x13.4cm +$120',
                      value: 'impreso-4x13',
                    },
                    {
                      label: 'Anuncio Impreso Modular 8.3x4cm +$130',
                      value: 'impreso-8x4',
                    },
                    {
                      label: 'Anuncio Impreso Modular 8.3x8.7cm +$140',
                      value: 'impreso-8x8',
                    },
                    {
                      label: 'Anuncio Impreso Modular 12.7x3.7cm +$150',
                      value: 'impreso-12x3',
                    },
                    {
                      label: 'Anuncio Impreso Modular 12.7x8.7cm +$160',
                      value: 'impreso-12x8',
                    },
                    {
                      label: 'Anuncio Impreso Modular 12.7x13.3cm +$170',
                      value: 'impreso-12x13',
                    },
                    {
                      label: 'Anuncio Impreso Modular 8.3x13.4cm +$180',
                      value: 'impreso-8x13',
                    },
                    {
                      label: 'Anuncio Impreso Modular 21.5x8.7cm +$190',
                      value: 'impreso-21x8',
                    },
                    {
                      label: 'Anuncio Impreso Modular 21.5x13.4cm +$200',
                      value: 'impreso-21x13',
                    },
                    {
                      label: 'Anuncio Impreso Modular 24.8x15.4cm +$210',
                      value: 'impreso-24x15',
                    },
                  ]}
                /> */}
                    <DropdownFour
                      option={{
                        label:
                          newAdForm?.print.size_label ??
                          'Anuncio Impreso Modular 4x4 cm +$100',
                        value: newAdForm?.print.size ?? 'impreso-4x4',
                      }}
                      color={{
                        variant: 'secondary',
                        text: '#464748',
                        field: theme.palette.secondary.main,
                        backgroundColor: '#fff',
                      }}
                      text="Tamaño"
                      icon={{
                        url: '/svg/icons/ticket_one.svg',
                        endurl: '/svg/icons/menu_row_down.svg',
                      }}
                      options={[
                        {
                          label: 'Anuncio Impreso Modular 4x4 cm +$100',
                          value: 'impreso-4x4',
                        },
                        {
                          label: 'Anuncio Impreso Modular 4x8.7cm +$110',
                          value: 'impreso-4x8',
                        },
                        {
                          label: 'Anuncio Impreso Modular 4x13.4cm +$120',
                          value: 'impreso-4x13',
                        },
                        {
                          label: 'Anuncio Impreso Modular 8.3x4cm +$130',
                          value: 'impreso-8x4',
                        },
                        {
                          label: 'Anuncio Impreso Modular 8.3x8.7cm +$140',
                          value: 'impreso-8x8',
                        },
                        {
                          label: 'Anuncio Impreso Modular 12.7x3.7cm +$150',
                          value: 'impreso-12x3',
                        },
                        {
                          label: 'Anuncio Impreso Modular 12.7x8.7cm +$160',
                          value: 'impreso-12x8',
                        },
                        {
                          label: 'Anuncio Impreso Modular 12.7x13.3cm +$170',
                          value: 'impreso-12x13',
                        },
                        {
                          label: 'Anuncio Impreso Modular 8.3x13.4cm +$180',
                          value: 'impreso-8x13',
                        },
                        {
                          label: 'Anuncio Impreso Modular 21.5x8.7cm +$190',
                          value: 'impreso-21x8',
                        },
                        {
                          label: 'Anuncio Impreso Modular 21.5x13.4cm +$200',
                          value: 'impreso-21x13',
                        },
                        {
                          label: 'Anuncio Impreso Modular 24.8x15.4cm +$210',
                          value: 'impreso-24x15',
                        },
                      ]}
                      onChange={(e) => {
                        setNewAdForm({
                          print: {
                            ...newAdForm.print,
                            size: e.value ?? 'impreso-4x4',
                            size_label:
                              e.label ?? 'Anuncio Impreso Modular 4x4 cm +$100',
                          },
                        });
                      }}
                    />
                  </div>
                  Publica tu anuncio en el medio impreso de tu elección por 7
                  días ( Las publicaciones impresas únicamente se realizan de
                  lunes a viernes)
                </>
              )}
            </div>
          </Grid>
          {newAdForm.print.set && (
            <Grid item xs={12} md={6}>
              <Box
                height={'100%'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                {newAdForm.print.size == 'impreso-4x4' && (
                  <img
                    src="/img/sizes/1.png"
                    alt=""
                    style={{ maxWidth: '300px', width: '100%' }}
                  />
                )}
                {newAdForm.print.size == 'impreso-4x8' && (
                  <img
                    src="/img/sizes/2.png"
                    alt=""
                    style={{ maxWidth: '300px', width: '100%' }}
                  />
                )}
                {newAdForm.print.size == 'impreso-4x13' && (
                  <img
                    src="/img/sizes/3.png"
                    alt=""
                    style={{ maxWidth: '300px', width: '100%' }}
                  />
                )}
                {newAdForm.print.size == 'impreso-8x4' && (
                  <img
                    src="/img/sizes/4.png"
                    alt=""
                    style={{ maxWidth: '300px', width: '100%' }}
                  />
                )}
                {newAdForm.print.size == 'impreso-8x8' && (
                  <img
                    src="/img/sizes/5.png"
                    alt=""
                    style={{ maxWidth: '300px', width: '100%' }}
                  />
                )}
                {newAdForm.print.size == 'impreso-12x3' && (
                  <img
                    src="/img/sizes/6.png"
                    alt=""
                    style={{ maxWidth: '300px', width: '100%' }}
                  />
                )}
                {newAdForm.print.size == 'impreso-12x8' && (
                  <img
                    src="/img/sizes/7.png"
                    alt=""
                    style={{ maxWidth: '300px', width: '100%' }}
                  />
                )}
                {newAdForm.print.size == 'impreso-12x13' && (
                  <img
                    src="/img/sizes/8.png"
                    alt=""
                    style={{ maxWidth: '300px', width: '100%' }}
                  />
                )}
                {newAdForm.print.size == 'impreso-8x13' && (
                  <img
                    src="/img/sizes/9.png"
                    alt=""
                    style={{ maxWidth: '300px', width: '100%' }}
                  />
                )}
                {newAdForm.print.size == 'impreso-21x8' && (
                  <img
                    src="/img/sizes/10.png"
                    alt=""
                    style={{ maxWidth: '300px', width: '100%' }}
                  />
                )}
                {newAdForm.print.size == 'impreso-21x13' && (
                  <img
                    src="/img/sizes/11.png"
                    alt=""
                    style={{ maxWidth: '300px', width: '100%' }}
                  />
                )}
                {newAdForm.print.size == 'impreso-24x15' && (
                  <img
                    src="/img/sizes/12.png"
                    alt=""
                    style={{ maxWidth: '300px', width: '100%' }}
                  />
                )}
              </Box>
            </Grid>
          )}
        </Grid>
        <div className="fw-bold text text-color-5 text-font-l-d subtitle">
          <Checkbox
            color="secondary"
            onChange={(e) => {
              setNewAdForm({ socialMedia: e.target.checked });
            }}
            checked={newAdForm.socialMedia}
          />
          <Checkbox
            color="secondary"
            icon={<ScreenShareOutlined color="secondary" />}
            checkedIcon={<ScreenShareIcon color="primary" />}
            onChange={(e) => {
              setNewAdForm({ socialMedia: e.target.checked });
            }}
            checked={newAdForm.socialMedia}
          />
          Redes Sociales{' '}
          <span className="text text-color-secondary">+$100</span>{' '}
          <span className="text text-color-10">
            Anúnciate en nuestras redes sociales{' '}
            <Link
              underline="none"
              href=""
              className="text text-color-secondary text-font-l-d"
            >
              Facebook <FacebookIcon />
            </Link>
            ,{' '}
            <Link
              underline="none"
              href=""
              className="text text-color-secondary text-font-l-d"
            >
              Instagram <InstagramIcon />
            </Link>{' '}
            y{' '}
            <Link
              underline="none"
              href=""
              className="text text-color-secondary text-font-l-d"
            >
              Tiktok{' '}
              <img
                style={{ height: '20px' }}
                src="/svg/icons/tiktok.svg"
                alt="tiktok"
              />
            </Link>
          </span>
        </div>
        {/* <div className="fw-bold text text-color-5 text-font-l-d subtitle">
          <Checkbox
            color="secondary"
            icon={<ImageOutlinedIcon color="secondary" />}
            checkedIcon={<ImageIcon color="primary" />}
            onChange={(e) => {
              if (e.target.checked) {
                setNewAdForm({
                  extraImgs: {
                    ...newAdForm.extraImgs,
                    set: e.target.checked,
                    quantity: parseInt(
                      newAdForm?.extraImgs?.value?.toString() ?? '3'
                    ),
                  },
                });
              } else
                setNewAdForm({
                  extraImgs: {
                    ...newAdForm.extraImgs,
                    set: e.target.checked,
                    quantity: 3,
                  },
                });
            }}
            value={newAdForm?.extraImgs.set}
          />
          Agregar Más Imagenes
        </div>
        <div>
          {newAdForm?.extraImgs.set && (
            <div className="ms-5">
              <RadioGroupOne
                value={newAdForm.extraImgs.value}
                onChange={(e) => {
                  setNewAdForm({
                    extraImgs: {
                      ...newAdForm.extraImgs,
                      value: e.value,
                      quantity: parseInt(e.value.toString() ?? '3'),
                    },
                  });
                }}
                defaultValue="5"
                options={[
                  {
                    label: '5 Imágenes',
                    value: '5',
                  },
                  {
                    label: '10 Imágenes',
                    value: '10',
                  },
                ]}
              />
            </div>
          )}
        </div> */}
        <div className="fw-bold text text-color-5 text-font-l-d subtitle">
          <Checkbox
            color="secondary"
            onChange={(e) => {
              setNewAdForm({
                extraStates: {
                  ...newAdForm.extraStates,
                  set: e.target.checked,
                },
              });
            }}
            checked={newAdForm.extraStates.set}
          />
          <Checkbox
            color="secondary"
            icon={<LocationOnOutlinedIcon color="secondary" />}
            checkedIcon={<LocationOnIcon color="primary" />}
            onChange={(e) => {
              setNewAdForm({
                extraStates: {
                  ...newAdForm.extraStates,
                  set: e.target.checked,
                },
              });
            }}
            checked={newAdForm.extraStates.set}
          />
          Aumenta la visibilidad con opción de publicar tu anuncio en otros
          estados
          {newAdForm?.extraStates.set && (
            <div className="ms-5">
              <RadioGroupOne
                value={newAdForm?.extraStates.value}
                onChange={(e) => {
                  setNewAdForm({
                    extraStates: {
                      ...newAdForm.extraStates,
                      value: e.value,
                    },
                  });
                }}
                defaultValue="1"
                options={[
                  {
                    label: 'Estados del Sureste +$100',
                    value: '1',
                  },
                  {
                    label: 'Nacional +$100',
                    value: '2',
                  },
                  {
                    label: 'Todos los estados +$200',
                    value: '3',
                  },
                ]}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export { Addons };
