import React from 'react';
import PlaceIcon from '@mui/icons-material/Place';
import { DropdownOne } from '../../../inputs/dropdown/DropdownOne';
import SouthIcon from '@mui/icons-material/South';
import { TextFieldOne } from '../../../inputs/text/TextFieldOne';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { useTheme } from '@mui/material';
import { useGetStates } from '../../../../hooks/querys/useStates';
import { useAllCategories, useForm } from '../../../../hooks';

interface Option {
  label: string;
  value: number | string;
  quantity?: number;
}

interface Props {}

const StepOne: React.FC<Props> = () => {
  const theme = useTheme();
  const { data } = useGetStates();
  const allCategories = useAllCategories();
  const { setNewAdForm, newAdForm } = useForm();

  const onChangeCategory = (option: Option) => {
    if (option.value != 0) {
      const category = allCategories?.data?.data?.find((c) => {
        return c.slug == option.value;
      });
      if (category?.slug) {
        setNewAdForm({ category: category });
      }
    } else {
      setNewAdForm({ category: null });
    }
  };

  const onChangeSubCategory = (option: Option) => {
    if (option.value != 0) {
      const sub = newAdForm.category?.children.find((c) => {
        return c.slug == option.value;
      });
      if (sub?.slug) {
        setNewAdForm({ subCategory: sub });
      }
    } else {
      setNewAdForm({ subCategory: null });
    }
  };

  const onChangeCity = (option: Option) => {
    if (option.value != 0) {
      const state = data?.data?.find((c) => {
        return c.id == option.value;
      });
      if (state?.id) {
        setNewAdForm({ state: state });
      }
    } else {
      setNewAdForm({ state: null });
    }
  };

  return (
    <>
      <div className="align-items-center d-flex fw-bold text text-color-5 text-font-rubik title">
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
          onChange={(e) => {
            setNewAdForm({ name: e.target.value });
          }}
          value={newAdForm.name}
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
        {newAdForm.category && (
          <div className="mb-3">
            <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3">
              Subcategoría <span className="text text-color-secondary">*</span>
            </div>
            <DropdownOne
              color={{
                variant: 'secondary',
                text: '#464748',
                field: theme.palette.secondary.main,
                backgroundColor: '#fff',
              }}
              text="Sub-Categoía"
              icon={{
                url: '/svg/icons/ticket_one.svg',
                endurl: '/svg/icons/menu_row_down.svg',
              }}
              options={newAdForm.category.children.map((category) => ({
                label: category.name,
                value: category.slug,
                quantity: 0,
              }))}
              onChange={onChangeSubCategory}
            />
          </div>
        )}
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
            // onChange={onChange}
            onChange={(e) => {
              const regex = /^[0-9]*$/;
              if (regex.test(e.target.value)) {
                const price = parseInt(e.target.value);
                setNewAdForm({ price: price?.toString() == 'NaN' ? 0 : price });
              }
            }}
            value={newAdForm.price?.toString()}
            // value={name}
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
    </>
  );
};

export { StepOne };
