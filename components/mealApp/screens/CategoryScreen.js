import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { CATEGORIES } from "../../../data/dummy-data";
import CategoryGrid from "../meallAppComponents/CategoryGrid";

export default function CategoryScreen({ navigation }) {
  const navigationHandler = (itemData) => {
    navigation.navigate("Meal-OverView", {
      categoryId: itemData.item.id,
    });
  };

  return (
    <View style={styles.appContainer}>
      <SafeAreaView>
        <FlatList
          scrollEnabled={true}
          data={CATEGORIES}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => (
            <CategoryGrid
              title={itemData.item.title}
              color={itemData.item.color}
              onPress={() => navigationHandler(itemData)}
            />
          )}
          numColumns={2}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "#1d3557",
    flex: 1,
  },
});
