import {
  View,
  StyleSheet,
  FlatList,
  useWindowDimensions,
  SafeAreaView,
} from "react-native";
import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../../../data/dummy-data";

import MealItem from "../meallAppComponents/MealItem";

export default function MealOverViewScreen({ route, navigation }) {
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === mealId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [mealId, navigation]);
  const { width, height } = useWindowDimensions();

  let cols = width > height ? 2 : 1;
  const mealId = route.params.categoryId;

  const mealDetail = MEALS.filter((mealData) => {
    return mealData.categoryIds.indexOf(mealId) >= 0;
  });

  return (
    <View style={styles.conatiner}>
      <SafeAreaView>
        <FlatList
          data={mealDetail}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => <MealItem item={itemData.item} />}
          numColumns={cols}
          key={cols}
        />
      </SafeAreaView>
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
