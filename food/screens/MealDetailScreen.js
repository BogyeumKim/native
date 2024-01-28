import { Image, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((item) => item.id == mealId);

  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} />
      <Text>{selectedMeal.title}</Text>

      <MealDetails items={selectedMeal} />

      <Text>Ingredients</Text>
        {selectedMeal.ingredients.map(item => <Text key={item}>{item}</Text>)}
      <Text>Steps</Text>
      {selectedMeal.steps.map(item => <Text key={item}>{item}</Text>)}
    </View>
  );
}

export default MealDetailScreen;
