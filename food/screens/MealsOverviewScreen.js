import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS , CATEGORIES } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";
import MealItem from "../components/MealItem";
import { useEffect, useLayoutEffect } from "react";

function MealsOverviewScreen({ route , navigation }) {
  const rout = useRoute();
  const catId = rout.params.categoryId;
  // const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });


  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

    navigation.setOptions({
        title : categoryTitle,
      });

  },[catId,navigation])
  

  function renderMealItem(itemData) {

    return <MealItem {...itemData} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
