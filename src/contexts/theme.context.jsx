import React, { createContext, useContext } from 'react';
import useLocalStorageToggle from '../hooks/useLocalStorageToggle';

export const Theme = createContext();

const ThemeContext = ({ children }) => {
  const [changed, handleChange] = useLocalStorageToggle(false, 'theme');

  return (
    <Theme.Provider
      value={{
        changed,
        handleChange,
        transition: 'background .3s ease-in',
        backgroundMain: '#444',
        backgroundPaper: '#5f5f5f'
      }}
    >
      {children}
    </Theme.Provider>
  );
};

export const useThemeValue = () => useContext(Theme);
export default ThemeContext;
