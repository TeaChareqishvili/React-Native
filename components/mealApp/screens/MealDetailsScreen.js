import { View, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
import { MEALS } from "../../../data/dummy-data";
import MealsDetails from "../meallAppComponents/MealDetails";
import HeaderButton from "../meallAppComponents/HeaderButton";

export default function MealDetailsScreen({ route, navigation }) {
  const headerButtonHandler = () => {
    console.log("press");
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <HeaderButton
            onPress={headerButtonHandler}
            color="#d90429"
            icon="star"
          />
        );
      },
    });
  }, [navigation, headerButtonHandler]);
  const id = route.params.mealId;
  const detailMeal = MEALS.find((item) => item.id === id);

  return (
    <View style={styles.mealCOntainer}>
      <MealsDetails meal={detailMeal} />
    </View>
  );
}

const styles = StyleSheet.create({
  mealCOntainer: {
    flex: 1,
    padding: 16,
  },
});
