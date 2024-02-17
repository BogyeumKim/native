import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { Colors } from "./constants/styles";
import { Provider, useDispatch, useSelector } from "react-redux";
import { AuthStore } from "./store/auth-store";
import IconButton from "./components/ui/IconButton";
import { authenticateLogin, logout } from "./store/authSlice";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={34}
              onPress={() => dispatch(logout())}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const {isAuthenticated} = useSelector((state) => state.authReducer);

  return (
    <NavigationContainer>
      {!isAuthenticated && <AuthStack />}
      {isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

 function Root() {
   const dispatch = useDispatch();
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (token) {
          dispatch(authenticateLogin(token));
        }
      } catch (error) {
        console.error("Error fetching token from AsyncStorage:", error);
      } finally {
        setIsTryingLogin(false);
      }
    };
    
    fetchToken();
  }, []);

  if(isTryingLogin){
    return;
  }

  return (
    <>
     <Navigation />
    </>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={AuthStore}>
        <Root />
      </Provider>
    </>
  );
}
