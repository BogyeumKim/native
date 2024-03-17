import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import { RootStackParamList } from "./screens/types";
import MainTab from "./screens/MainTab";
import ArticleScreen from "./screens/ArticelScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainTab" component={MainTab} options={{headerShown : false}} />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;
