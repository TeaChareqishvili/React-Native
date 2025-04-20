import { View, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../../../data/dummy-data";

import MealFlatList from "../meallAppComponents/MealFlatList";

export default function MealOverViewScreen({ route, navigation }) {
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === mealId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [mealId, navigation]);

  const mealId = route.params.categoryId;

  const mealDetail = MEALS.filter((mealData) => {
    return mealData.categoryIds.indexOf(mealId) >= 0;
  });

  return (
    <View style={styles.conatiner}>
      <MealFlatList data={mealDetail} />
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f7f3",
  },
});
