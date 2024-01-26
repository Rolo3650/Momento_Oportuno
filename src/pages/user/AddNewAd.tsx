import React, { useEffect } from 'react';
import { LayoutThree } from '../../containers/layout/LayoutThree';
import { FormOne } from '../../components/form/formOne/FormOne';
// import { useAppContext } from '../../context';
import { useForm } from '../../hooks';

interface Props {}

const AddNewAd: React.FC<Props> = () => {
  // const { state } = useAppContext();
  const { setNewAdForm } = useForm();

  useEffect(
    () => {
      setNewAdForm({
        name: '',
        category: null,
        subCategory: null,
        state: null,
        price: 0,
        desc: '',
        extraImgs: {
          set: false,
          value: '3',
          quantity: 3,
        },
        extraStates: {
          set: false,
          value: '1',
        },
        extraVideo: {
          set: false,
          type: 'file',
          value: null,
        },
        print: {
          set: false,
          value: 'medio-nac',
          size: 'impreso-4x4',
        },
        feature: false,
        socialMedia: false,
        imgs: [],
        attributes: [],
        responseForm: null,
        package: null,
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // state
    ]
  );

  return (
    <LayoutThree>
      <h1 className="title text text-font-georgia fw-bold fs-2 text-color-5">
        Publicar Anuncio
      </h1>
      <div className="mt-4 pb-5">
        <FormOne />
      </div>
    </LayoutThree>
  );
};

export { AddNewAd };
