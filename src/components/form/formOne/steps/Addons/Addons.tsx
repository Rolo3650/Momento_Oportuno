import React from 'react';
import SouthIcon from '@mui/icons-material/South';
import { Checkbox } from '@mui/material';
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

interface Props {}

const Addons: React.FC<Props> = () => {
  const { setNewAdForm, newAdForm } = useForm();

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
        Selecciona los complementos para tu publicación
        <span className="text text-color-secondary">*</span>
      </div>
      <div className="mt-3">
        <div className="fw-bold text text-color-5 text-font-l-d subtitle">
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
            value={newAdForm.print.set}
          />
          Impreso
          {newAdForm?.print.set && (
            <>
              <div className="fw-bold text text-color-5 text-font-l-d subtitle ms-5">
                Lugar de publicación
              </div>
              <div className="ms-5 mb-4">
                <RadioGroupOne
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
                />
              </div>
              <div className="fw-bold text text-color-5 text-font-l-d subtitle ms-5">
                Tamaño de impresión
              </div>
              <div className="ms-5">
                <RadioGroupOne
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
                      value: 'impreso-21x8'
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
                />
              </div>
            </>
          )}
        </div>
        <div className="fw-bold text text-color-5 text-font-l-d subtitle">
          <Checkbox
            color="secondary"
            icon={<StarBorderIcon color="secondary" />}
            checkedIcon={<StarIcon color="primary" />}
            onChange={(e) => {
              setNewAdForm({ feature: e.target.checked });
            }}
            value={newAdForm.feature}
          />
          Destacado +$100
        </div>
        <div className="fw-bold text text-color-5 text-font-l-d subtitle">
          <Checkbox
            color="secondary"
            icon={<ScreenShareOutlined color="secondary" />}
            checkedIcon={<ScreenShareIcon color="primary" />}
            onChange={(e) => {
              setNewAdForm({ socialMedia: e.target.checked });
            }}
            value={newAdForm.socialMedia}
          />
          Redes Sociales +$100
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
        <AddVideo />
        <div className="fw-bold text text-color-5 text-font-l-d subtitle">
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
            value={newAdForm?.extraStates.set}
          />
          Multi Estado
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
