import { useEffect, useState } from 'react';

const useLocalStorage = (val, key) => {
  const initialValue = () => JSON.parse(localStorage.getItem(key)) || val;

  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
