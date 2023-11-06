import { useEffect, useState } from 'react';

export const useDebounce = <T = unknown>(value: T, milliSeconds = 500): T => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const idT = setTimeout(() => {
      setDebouncedValue(value);
    }, milliSeconds);

    return () => {
      clearTimeout(idT);
    };
  }, [value, milliSeconds]);

  return debouncedValue;
};
