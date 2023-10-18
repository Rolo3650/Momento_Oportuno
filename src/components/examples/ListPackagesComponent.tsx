import { useState } from 'react';
import type { TypePackage } from '../../api';
import { usePackages } from '../../hooks/querys/usePackages';

export const ListPackagesComponent = () => {
  const [type, setType] = useState<TypePackage>();

  const { data: packages, isLoading } = usePackages(type);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>List Packages</h1>
      <div>
        <button onClick={() => setType('listing')}>Listings</button>
        <button onClick={() => setType('directory')}>Directory</button>
        <button onClick={() => setType('microsite')}>Microsites</button>
        <button onClick={() => setType(undefined)}>All</button>
      </div>
      <div>
        {packages && (
          <ul>
            {packages.data.map((p) => (
              <div key={p.id}>{p.name}</div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
