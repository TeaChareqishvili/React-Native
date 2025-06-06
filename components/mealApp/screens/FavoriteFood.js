import { useContext } from "react";
import { FavoriteContext } from "../../../store/context/favorite-context";
import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../../../data/dummy-data";

import MealFlatList from "../meallAppComponents/MealFlatList";

export default function FavoriteFood() {
  const favoriteFood = useContext(FavoriteContext);

  const favorites = MEALS.filter((food) => favoriteFood.id.includes(food.id));

  return (
    <View style={styles.mainContainer}>
      {favorites.length == 0 ? (
        <Text style={styles.text}>No Favorite Meals Yet.</Text>
      ) : (
        <MealFlatList data={favorites} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#d7e6ea",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#ae2012",
    fontFamily: "open-sans-bold",
    fontSize: 24,
  },
});
