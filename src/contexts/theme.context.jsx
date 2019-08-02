import React, { createContext, useState, useContext } from 'react';

export const ThemeContext = createContext();

const Theme = ({ children }) => {
   const [changed, setChanged] = useState(false);
   const handleChange = () => {
      setChanged(!changed);
   };

   return (
      <ThemeContext.Provider value={{ changed, handleChange }}>
         {children}
      </ThemeContext.Provider>
   );
};

export const useThemeValue = () => useContext(ThemeContext);

export default Theme;
