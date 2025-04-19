import { Text, Image, StyleSheet, ScrollView } from "react-native";
import MealDescription from "./MealDescription";
import SubTitle from "./SubTitle";
import MealList from "./MealList";

export default function MealsDetails({ meal }) {
  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <Text style={styles.mealTitle}>{meal.title}</Text>
      <MealDescription item={meal} />
      <SubTitle>Ingredients</SubTitle>
      <MealList data={meal.ingredients} />
      <SubTitle>Steps</SubTitle>
      <MealList data={meal.steps} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 350,
    objectFit: "cover",
    marginBottom: 20,
    borderRadius: 8,
  },
  mealTitle: {
    textAlign: "center",
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "#1d3557",
    margin: 8,
  },
});
