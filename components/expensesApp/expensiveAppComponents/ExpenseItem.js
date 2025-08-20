import { Pressable, View, Text, StyleSheet } from "react-native";
import { ExpenseColors } from "../../../utils/Colors";
import { getFormatedDate } from "../../../utils/Date";

export default function ExpenseItem({ description, amount, date }) {
  function expensePressHandler() {}
  return (
    <Pressable
      onPress={expensePressHandler()}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.outerContainer}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormatedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: ExpenseColors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: ExpenseColors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
  },
  textBase: {
    color: ExpenseColors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: ExpenseColors.primary500,
    fontWeight: "bold",
  },

  pressed: {
    opacity: 0.75,
  },
});
