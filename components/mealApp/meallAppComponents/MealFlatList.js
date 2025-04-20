import { FlatList, SafeAreaView, useWindowDimensions } from "react-native";
import MealItem from "./MealItem";
export default function MealFlatList({ data }) {
  const { width, height } = useWindowDimensions();

  let cols = width > height ? 2 : 1;
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => <MealItem item={itemData.item} />}
        numColumns={cols}
        key={cols}
      />
    </SafeAreaView>
  );
}
