import React from 'react';
import { LayoutThree } from '../../containers/layout/LayoutThree';
import { useMyFavorites } from '../../hooks';
import { ProductTwo } from '../../components/product/ProductTwo';
import { EmptyBoxOne } from '../../components/module/box/EmptyBoxOne';

interface Props {}

const Favorites: React.FC<Props> = () => {
  const { data: favorites } = useMyFavorites();

  const FavoritesListEmpty = () => {
    return <EmptyBoxOne text="No has agregado ningún favorito" />;
  };

  const FavoritesList = () => {
    return (
      <div>
        <h1 className="title text text-font-georgia fw-bold fs-2 text-color-5">
          Favoritos
        </h1>
        <div>
          {favorites?.data?.map((fav) => {
            const obj = { ...fav };
            if (!obj.imgs || obj.imgs.length === 0) {
              obj.imgs = [
                '/img/examples/img_1.webp',
                '/img/examples/img_2.webp',
              ];
            }
            return <ProductTwo product={obj} fav={true} />;
          })}
        </div>
      </div>
    );
  };

  return (
    <LayoutThree>
      {favorites &&
      favorites?.data &&
      favorites?.data?.length &&
      favorites.data.length > 0 ? (
        <FavoritesList />
      ) : (
        <FavoritesListEmpty />
      )}
    </LayoutThree>
  );
};

export { Favorites };
