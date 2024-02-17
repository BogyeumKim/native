import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { Colors } from "./constants/styles";
import { Provider, useDispatch, useSelector } from "react-redux";
import { AuthStore } from "./store/auth-store";
import IconButton from './components/ui/IconButton'
import { logout } from "./store/authSlice";
const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const dispatch = useDispatch();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{
        headerRight : ({tintColor}) => <IconButton icon="exit" color={tintColor} size={34} onPress={() => dispatch(logout())}/>
      }} />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authToken = useSelector(state => state.authReducer);
  

  return (
    <NavigationContainer>
      {!authToken.isAuthenticated && <AuthStack />}
      {authToken.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={AuthStore}>
        <Navigation />
      </Provider>
    </>
  );
}
