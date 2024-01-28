import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { useState } from "react";





function CategoriesScreen({navigation}) {

    const [numColumns, setNumColumns] = useState(2);


    function renderCategoryItem(itemData) {

      function pressHandler() {
        navigation.navigate('MealsOverview',{

          categoryId : itemData.item.id,
          
        });
      }
    
      return (
        <CategoryGridTitle
          title={itemData.item.title}
          color={itemData.item.color}
          onPress={pressHandler}
        />
      );
    }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={numColumns}
      key={numColumns.toString()}
    />
  );
}

export default CategoriesScreen;
