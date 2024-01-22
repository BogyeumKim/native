import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { useState } from "react";

function renderCategoryItem(itemData) {

  return (
    <CategoryGridTitle
      title={itemData.item.title}
      color={itemData.item.color}
    />
  );
}



function CategoriesScreen() {

    const [numColumns, setNumColumns] = useState(2);

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
