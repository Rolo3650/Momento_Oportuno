import React, { useEffect, useState } from 'react';
import { LayoutThree } from '../../containers/layout/LayoutThree';
import { useMyAds } from '../../hooks';
import { EmptyBoxOne } from '../../components/module/box/EmptyBoxOne';
import { GeneralButton } from '../../components/inputs/buttons/GeneralButton';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import { ProductOne } from '../../components/product/ProductOne';
import { Ad } from '../../api';
import { Button, CircularProgress } from '@mui/material';

interface Props {}

const MyAds: React.FC<Props> = () => {
  const navigateTo = useNavigate();
  const [page, setPage] = useState(1);
  const { data, refetch } = useMyAds({ page: page });
  const [loading, setLoading] = useState(false);
  console.log(data);
  const [ads, setAds] = useState<Ad[]>([]);

  useEffect(() => {
    // console.log(page)
    setLoading(true);
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    if (ads.length > 0) {
      if (data?.data?.length && ads[ads.length - 1].id < data?.data[0].id) {
        setAds([...ads, ...data.data]);
        setLoading(false);
      }
    } else {
      if (data?.data?.length) {
        setAds(data?.data);
        setLoading(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <LayoutThree>
      <div className="my-ads-page">
        <h1 className="title text text-font-georgia fw-bold fs-2 text-color-5">
          Mis Anuncios
        </h1>
        {(!data?.data || data?.data?.length == 0) && (
          <EmptyBoxOne
            text="No has agregado ningún anuncio"
            imgSrc="/svg/icons/box_one.svg"
            button={
              <GeneralButton
                onClick={() => navigateTo('/panel/create')}
                title="Publicar Anuncio"
                colorPrimary="secondary"
                hoverColor="secondary"
                endIcon={<ArrowForward />}
              />
            }
          />
        )}
        <div className="my-ads-body py-4">
          {ads &&
            ads?.length > 0 &&
            ads?.map((ad) => (
              <>
                <ProductOne key={ad.id} product={ad} />
              </>
            ))}
        </div>
        <div className="pb-4 d-flex justify-content-center">
          {!loading && (
            <Button
              color="secondary"
              variant="contained"
              onClick={() => {
                setPage(page + 1);
              }}
            >
              Ver Más
            </Button>
          )}
          {loading && <CircularProgress color="secondary" />}
        </div>
      </div>
    </LayoutThree>
  );
};

export { MyAds };
