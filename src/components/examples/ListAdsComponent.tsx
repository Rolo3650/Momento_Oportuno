import { useCallback, useMemo } from 'react';
import {
  useAddFavorite,
  useInfiniteAds,
  useMyFavorites,
  useRemoveFavorite,
} from '../../hooks';

export const ListAdsComponent = () => {
  const {
    data: ads,
    isLoading: loadingAds,
    error: adError,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteAds();

  const flattenData = useMemo(
    () => ads?.pages.flatMap((page) => page.data),
    [ads]
  );

  const { data: favorites } = useMyFavorites();

  const { mutate: add, isLoading: load1 } = useAddFavorite();
  const { mutate: remove, isLoading: load2 } = useRemoveFavorite();

  const toggleLoad = load1 || load2;

  const toggle = useCallback(
    (id: number) => {
      if (favorites?.data.some((fav) => fav.id === id)) {
        remove(id);
      } else {
        add(id);
      }
    },
    [favorites, flattenData]
  );

  const fetchMore = useCallback(() => {
    if (hasNextPage) fetchNextPage();
  }, [hasNextPage]);

  if (adError) return <p>Error: {adError.message}</p>;

  if (loadingAds || !flattenData) return <p>Loading...</p>;

  return (
    <div>
      <h2>Ads</h2>
      <ul>
        {flattenData.map((ad) => (
          <li key={ad.id}>
            <h3>{ad.title}</h3>
            <p>{ad.description}</p>
            <button onClick={() => toggle(ad.id)} disabled={toggleLoad}>
              {favorites?.data.some((fav) => fav.id === ad.id)
                ? 'Remove Favorite'
                : 'Add Favorite'}
            </button>
          </li>
        ))}

        <button onClick={fetchMore} disabled={!hasNextPage}>
          {loadingAds
            ? 'Loading...'
            : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
        </button>
      </ul>
    </div>
  );
};
