import { StyleSheet, Text, View } from "react-native";

function MealDetails({items}) {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{items.duration}m</Text>
      <Text style={styles.detailItem}>{items.complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{items.affordability.toUpperCase()}</Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
