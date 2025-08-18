import { View, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
import { MEALS } from "../../../data/dummy-data";
import MealsDetails from "../meallAppComponents/MealDetails";
import HeaderButton from "../meallAppComponents/HeaderButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../../store/redux/favorites";
// import { FavoriteContext } from "../../../store/context/favorite-context";

export default function MealDetailsScreen({ route, navigation }) {
  // const favoriteMealContext = useContext(FavoriteContext);

  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const id = route.params.mealId;
  const detailMeal = MEALS.find((item) => item.id === id);

  const isfavorite = favoriteMealIds.includes(id);

  const changeFavoriteStatus = () => {
    if (isfavorite) {
      dispatch(removeFavorite({ id: id }));
      // favoriteMealContext.removeFavorite(id);
    } else {
      // favoriteMealContext.addFavorite(id);
      dispatch(addFavorite({ id: id }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <HeaderButton
            onPress={changeFavoriteStatus}
            color="#ffbe0b"
            icon={isfavorite ? "star" : "star-outline"}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatus]);

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
