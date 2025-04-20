import { useContext } from "react";
import { FavoriteContext } from "../../../store/context/favorite-context";

import { MEALS } from "../../../data/dummy-data";

import MealFlatList from "../meallAppComponents/MealFlatList";

export default function FavoriteFood() {
  const favoriteFood = useContext(FavoriteContext);

  const favorites = MEALS.filter((food) => favoriteFood.id.includes(food.id));

  return <MealFlatList data={favorites} />;
}
