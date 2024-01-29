import { MEALS , CATEGORIES } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";
import { useEffect, useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

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
  
  return <MealsList items={displayedMeals}/>

}

export default MealsOverviewScreen;


