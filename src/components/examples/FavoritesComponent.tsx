import { useMyFavorites } from '../../hooks';

export const FavoritesComponent = () => {
  const { data: favorites, isLoading: loadFav } = useMyFavorites();

  return (
    <div>
      <h2>Favorites</h2>
      {loadFav && <p>Loading...</p>}
      {favorites && (
        <ul>
          {favorites.data.map((fav) => (
            <li key={fav.id}>
              <h4>{fav.title}</h4>
              <p>{fav.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
