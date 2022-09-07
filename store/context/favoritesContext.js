import React from "react";
import { createContext } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export const FavoritesContextProvider = ({ children }) => {
  const [favoriteMealIds, serFavoriteIds] = React.useState([]);

  const addFavorite = (id) => {
    serFavoriteIds((currentFavids) => [...currentFavids, id]);
  };
  const removeFavorite = (id) => {
    serFavoriteIds((currentFavorites) =>
      currentFavorites.filter((item) => item !== id)
    );
  };

  const value = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
