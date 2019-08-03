import { useEffect } from 'react';
import useToggle from './useToggle';

const useLocalStorageToggle = (val, key) => {
  const initialValue = () => JSON.parse(localStorage.getItem(key)) || val;

  const [value, setValue] = useToggle(initialValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorageToggle;
