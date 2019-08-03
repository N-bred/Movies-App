import React, { createContext, useState, useContext } from 'react';

export const Theme = createContext();

const ThemeContext = ({ children }) => {
  const [changed, setChanged] = useState(false);
  const handleChange = () => {
    setChanged(!changed);
  };

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
