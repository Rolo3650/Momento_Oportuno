import React from 'react';
import { LayoutThree } from '../../containers/layout/LayoutThree';
import { useMyFavorites } from '../../hooks';
import { ProductTwo } from '../../components/product/ProductTwo';

interface Props {}

const Favorites: React.FC<Props> = () => {
  const { data: favorites } = useMyFavorites();

  const FavoritesListEmpty = () => {
    return (
      <div className="favorites-empty">
        <div className="favorites-empty-title">
          No has agregado publicaciones a favoritos.
        </div>
        <div className="favorites-empty-img">
          <img src="/public/svg/icons/empty_box.svg" />
        </div>
      </div>
    );
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
            return <ProductTwo product={obj} />;
          })}
        </div>
      </div>
    );
  };

  return (
    <LayoutThree>
      <div className="favorites-container">
        {favorites &&
        favorites?.data &&
        favorites?.data?.length &&
        favorites.data.length > 0 ? (
          <FavoritesList />
        ) : (
          <FavoritesListEmpty />
        )}
      </div>
    </LayoutThree>
  );
};

export { Favorites };
