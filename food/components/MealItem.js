import { Text, View } from "react-native";

function MealItem({item}) {
    return <View>
        <Text>{item.title}</Text>
    </View>
}

export default MealItem;