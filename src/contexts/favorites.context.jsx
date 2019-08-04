import React, { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const Favorites = createContext();

const FavoritesContext = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage([], 'favorites');

  const addFavorite = val => {
    setFavorites(oldfFavorites => [...oldfFavorites, val]);
  };

  const removeFavorite = id => {
    setFavorites(oldFavorites => {
      return oldFavorites.filter(favorite => favorite.id !== id);
    });
  };

  return (
    <Favorites.Provider value={{ addFavorite, removeFavorite, favorites }}>
      {children}
    </Favorites.Provider>
  );
};

export const useFavorites = () => useContext(Favorites);
export default FavoritesContext;
