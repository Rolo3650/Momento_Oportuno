// import React from 'react';

import { useParams } from 'react-router';
import { BreadcrumbOne } from '../../components/breadcrumb/BreadcrumbOne';
import { CategoriesFilter } from '../../components/categories/CategoriesFilter';
import LookingFor from '../../components/lookingFor/LookingForOne';
import { LayoutOne } from '../../containers/layout/LayoutOne';
import { useSearch } from '../../hooks';
import { useEffect, useState } from 'react';
import { OrderByOne } from '../../components/orderBy/OrderByOne';
import { CatalogueOne } from '../../containers/catalogue/CatalogueOne';
import { Button, FormControl } from '@mui/material';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import { SideBarTwo } from '../../components/module/sidebar/SideBarTwo';

const AdsSearch = () => {
  const { searchCategory, searchCategoryChildren } = useSearch();
  const [breadcrumb, setBreadcrumb] = useState([
    { label: 'Inicio', url: '/' },
    { label: 'Resultados de Búsqueda', url: '/ads' },
  ]);
  const params = useParams();

  useEffect(() => {
    if (searchCategoryChildren()) {
      setBreadcrumb([
        { label: 'Inicio', url: '/' },
        { label: 'Resultados de Búsqueda', url: '/ads' },
        {
          label: `${searchCategory()?.name}`,
          url: `/ads/${searchCategory()?.slug}`,
        },
        {
          label: `${searchCategoryChildren()?.name}`,
          url: `/ads/${searchCategoryChildren()?.slug}`,
        },
      ]);
    } else if (searchCategory()) {
      setBreadcrumb([
        { label: 'Inicio', url: '/' },
        { label: 'Resultados de Búsqueda', url: '/ads' },
        {
          label: `${searchCategory()?.name}`,
          url: `/ads/${searchCategory()?.slug}`,
        },
      ]);
    } else {
      setBreadcrumb([
        { label: 'Inicio', url: '/' },
        { label: 'Resultados de Búsqueda', url: '/ads' },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <LayoutOne>
      <div className="ads-search">
        <BreadcrumbOne breadcrumbs={breadcrumb} />
        <LookingFor />
        <div className="body mx-auto">
          <div>
            <CategoriesFilter />
          </div>
          <div>
            <div className="btn-off-canva-filter mb-5">
              <FormControl fullWidth>
                <Button
                  startIcon={<FilterAltRoundedIcon />}
                  variant="contained"
                  className="p-2 fs-6 text text-font-l-d"
                  sx={{
                    textTransform: 'none',
                  }}
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offCanvasCategoryFilter"
                  aria-controls="offCanvasCategoryFilter"
                >
                  Más filtros
                </Button>
              </FormControl>
            </div>
            <OrderByOne />
            <CatalogueOne />
          </div>
        </div>
      </div>
      <SideBarTwo />
    </LayoutOne>
  );
};

export { AdsSearch };
