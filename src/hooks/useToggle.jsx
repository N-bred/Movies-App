import { useState } from 'react';

const useToggle = val => {
  const [value, setValue] = useState(val);
  const handleChange = () => {
    setValue(!value);
  };
  return [value, handleChange];
};

export default useToggle;
