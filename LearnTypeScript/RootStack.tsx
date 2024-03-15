import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import { RootStackParamList } from "./screens/types";
import MainTab from "./screens/MainTab";

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack():React.JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainTab" component={MainTab} options={{headerShown : false}} />
      <View>{/*TODO*/}</View>
    </Stack.Navigator>
  );
}

export default RootStack;
