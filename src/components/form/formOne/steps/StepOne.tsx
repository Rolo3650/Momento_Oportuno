import React, { useEffect, useState } from 'react';
import PlaceIcon from '@mui/icons-material/Place';
import { DropdownOne } from '../../../inputs/dropdown/DropdownOne';
import SouthIcon from '@mui/icons-material/South';
import { TextFieldOne } from '../../../inputs/text/TextFieldOne';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { useTheme } from '@mui/material';
import { useGetStates } from '../../../../hooks/querys/useStates';
import {
  useAllCategories,
  useCategoryAttributes,
  useForm,
} from '../../../../hooks';
import { TextFieldTwo } from '../../../inputs/text/TextFieldTwo';
import {
  FormControl,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
} from '@mui/material';

interface Option {
  label: string;
  value: number | string;
  quantity?: number;
}

interface Props {}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const StepOne: React.FC<Props> = () => {
  const theme = useTheme();
  const { data } = useGetStates();
  const [cateogoryId, setCategoryId] = useState<number>(0);
  const allCategories = useAllCategories();
  const { setNewAdForm, newAdForm } = useForm();
  const attributes = useCategoryAttributes(cateogoryId);

  const onChangeCategory = (option: Option) => {
    if (option.value != 0) {
      const category = allCategories?.data?.data?.find((c) => {
        return c.slug == option.value;
      });
      if (category?.slug) {
        setNewAdForm({ category: category, subCategory: null });
        // setNewAdForm({ subCategory: null });
      }
    } else {
      setNewAdForm({ category: null, subCategory: null });
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

  useEffect(() => {
    if (attributes?.data?.data?.length) {
      const arr_attributes = attributes?.data?.data?.map((atr) => {
        let value = null;
        if (atr.type == 'number') value = 0;
        if (atr.type == 'select') value = [atr.attributeValues[0]?.name];
        if (atr.type == 'checkbox') value = [atr.attributeValues[0]?.name];
        return {
          set: atr,
          value: value,
        };
      });
      let isTrue = true;
      attributes?.data?.data?.forEach((atr) => {
        let isTrue2 = false;
        newAdForm.attributes.forEach((attribute) => {
          if (!isTrue2) {
            if (attribute.set.id == atr.id) {
              isTrue2 = true;
            }
          }
        });
        if (!isTrue2) {
          isTrue = false;
        }
      });
      if (!isTrue) setNewAdForm({ attributes: arr_attributes });
    } else {
      setNewAdForm({ attributes: [] });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attributes?.data?.data]);

  useEffect(() => {
    if (newAdForm.category) {
      if (newAdForm.category?.id != cateogoryId)
        setCategoryId(newAdForm.category?.id);
    } else {
      setCategoryId(0);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newAdForm.category]);

  useEffect(() => {
    // console.log('hola: 1');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newAdForm.attributes]);

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
        {newAdForm.attributes.map((data) => (
          <div className="mb-3" key={data?.set.name}>
            <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3">
              {data.set.name}{' '}
              <span className="text text-color-secondary">*</span>
            </div>
            {data.set.type == 'text' && (
              <TextFieldTwo
                color={{
                  variant: 'secondary',
                  text: '#464748',
                  field: theme.palette.secondary.main,
                  backgroundColor: '#fff',
                }}
                text={data.set.name}
                onChange={(e) => {
                  const attributes = [...newAdForm.attributes];
                  attributes.forEach((atr) => {
                    if (atr.set.id === data.set.id) {
                      atr.value = e.target.value;
                    }
                  });
                  setNewAdForm({ attributes: attributes });
                }}
                value={data.value?.toString() ?? ''}
              />
            )}
            {data.set.type == 'number' && (
              <TextFieldTwo
                color={{
                  variant: 'secondary',
                  text: '#464748',
                  field: theme.palette.secondary.main,
                  backgroundColor: '#fff',
                }}
                text={data.set.name}
                onChange={(e) => {
                  const regex = /^[0-9]*$/;
                  if (regex.test(e.target.value)) {
                    const price = parseInt(e.target.value);
                    const attributes = [...newAdForm.attributes];
                    attributes.forEach((atr) => {
                      if (atr.set.id === data.set.id) {
                        atr.value = price?.toString() == 'NaN' ? 0 : price;
                      }
                    });
                    setNewAdForm({ attributes: attributes });
                  }
                }}
                value={data.value?.toString() ?? ''}
              />
            )}
            {(data?.set?.type == 'select' || data?.set?.type == 'checkbox') &&
              typeof data.value == 'object' && (
                <div className="hola w-100">
                  <FormControl sx={{ maxWidth: 300, width: '100%' }}>
                    <Select
                      sx={{
                        height: '64px',
                        borderRadius: '5px',
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: theme.palette.secondary.main,
                        },
                        '& .MuiInputBase-root': {
                          height: '64px',
                        },
                        '& input::placeholder': {
                          color: '#464748',
                          opacity: 1,
                        },
                        '& img': {
                          height: '30px',
                          padding: '7px',
                          borderRadius: '5px',
                          backgroundColor: theme.palette.secondary.main,
                        },
                        backgroundColor: '#fff',
                      }}
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      color="secondary"
                      value={data.value}
                      onChange={(e) => {
                        const attributes = newAdForm.attributes.map(
                          (attribute) => {
                            if (attribute.set.id == data.set.id) {
                              return {
                                set: attribute.set,
                                value: e.target.value,
                              };
                            } else {
                              return {
                                value: attribute.value,
                                set: attribute.set,
                              };
                            }
                          }
                        );
                        setNewAdForm({ attributes });
                      }}
                      renderValue={(selected) => selected?.join(', ')}
                      MenuProps={MenuProps}
                    >
                      {data.set.attributeValues.map((value) => (
                        <MenuItem key={value.name} value={value.name}>
                          <Checkbox
                            checked={
                              Array.isArray(data.value) &&
                              data?.value?.indexOf(value.name) > -1
                            }
                          />
                          <ListItemText primary={value.name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              )}
          </div>
        ))}
        {/* <div className="mb-3">
          <div className="fw-bold text text-color-5 text-font-l-d subtitle mb-3">
            {newAdForm?.category?.id == 4 ? 'Sueldo' : 'Precio'}{' '}
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
        </div> */}
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
