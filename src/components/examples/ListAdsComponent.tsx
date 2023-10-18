import { useCallback, useMemo } from 'react';
import { useInfiniteAds } from '../../hooks';

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
