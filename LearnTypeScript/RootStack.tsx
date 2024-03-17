import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import { RootStackParamList } from "./screens/types";
import MainTab from "./screens/MainTab";
import ArticleScreen from "./screens/ArticelScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import MyArticlesScreen from "./screens/MyArticlesScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{headerBackTitle: '닫기'}}>
      <Stack.Screen name="MainTab" component={MainTab} options={{headerShown : false}} />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{title: '회원가입'}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{title: '로그인'}}
      />
      <Stack.Screen
        name="MyArticles"
        component={MyArticlesScreen}
        options={{title: '내가 쓴 글'}}
      />
      <Stack.Screen
        name="Article"
        component={ArticleScreen}
        options={{title: '게시글'}}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
