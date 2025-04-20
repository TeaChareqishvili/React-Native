import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  id: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export default function FavoriteContextProvider({ children }) {
  const [favoriteMealId, setFavoriteMealId] = useState([]);

  const addFavorite = (id) => {
    setFavoriteMealId((currentId) => [...currentId, id]);
  };

  const removeFavorite = (id) => {
    setFavoriteMealId((currentId) =>
      currentId.filter((mealId) => mealId !== id)
    );
  };

  const value = {
    id: favoriteMealId,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}
