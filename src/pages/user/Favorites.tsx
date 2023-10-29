import React from 'react';
import { LayoutThree } from '../../containers/layout/LayoutThree';
import { useEffect } from 'react';
import { useAppContext } from '../../context';
import { useMyFavorites } from '../../hooks';
import { ProductTwo } from '../../components/product/ProductTwo';
import { Ad } from '../../api';

interface Props { }

const Favorites: React.FC<Props> = () => {

  const { data: favorites, isLoading: loadFav } = useMyFavorites();


  const { state } = useAppContext();

  useEffect(() => {
    console.log("favorites", favorites);
    console.log("favoriteslenght", favorites?.data.length)
    if (!state?.userState?.token) {
      window.location.assign('/');
    }
  }, [state.userState]);

  const FavoritesListEmpty = () => {
    return (
      <div className="favorites-empty">
        <div className="favorites-empty-title">No has agregado publicaciones a favoritos.</div>
        <div className="favorites-empty-img"><img src="/public/svg/icons/empty_box.svg" /></div>
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
          {loadFav && <p>Loading...</p>}
          {favorites && favorites.data.map((fav) => (<div><ProductTwo product={fav}/></div>))}
        </div>
      </div>

    );
  };

  return (
    <LayoutThree>
      <div className="favorites-container">
        {favorites && favorites.data.length > 0 ? <FavoritesList /> : <FavoritesListEmpty />}
      </div>
    </LayoutThree>
  );
};

export { Favorites };
