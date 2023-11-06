// import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useNavigateCustom = () => {
  const location = useLocation();
  const navigateTo = useNavigate();

  const navigatePersistParams = (route: string) => {
    if (location?.search?.includes('?')) {
      const path = location.search.split('?');
      navigateTo(`${route}?${path[1]}`);
    } else navigateTo(`${route}`);
  };

  const navigatePersistQuery = (query: string, value: string) => {
    if (location?.search?.includes('?')) {
      if (location?.search?.includes(query)) {
        const searchParams = new URLSearchParams(location.search);
        let route = `?`;
        searchParams.forEach((inherit, key) => {
          if (route?.length > 1) {
            if (key == query) route = `${route}&${key}=${value}`;
            else route = `${route}&${key}=${inherit}`;
          } else {
            if (key == query) route = `?${key}=${value}`;
            else route = `?${key}=${inherit}`;
          }
        });
        navigateTo(`${route}`);
      } else navigateTo(`${location.search}&${query}=${value}`);
    } else navigateTo(`?${query}=${value}`);
  };

  const deleteQuery = (query: string) => {
    const searchParams = new URLSearchParams(location.search);
    let route = `?`;
    searchParams.forEach((inherit, key) => {
      if (route?.length > 1) {
        if (key != query) route = `${route}&${key}=${inherit}`;
      } else {
        if (key != query) route = `?${key}=${inherit}`;
      }
      navigateTo(`${route}`);
    });
  };

  return { navigatePersistParams, navigatePersistQuery, deleteQuery };
};

export { useNavigateCustom };
