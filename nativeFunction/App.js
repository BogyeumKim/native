import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/UI/IconButton";
import { Colors } from "./constants/colors";
import Map from "./screens/Map";
import { useCallback, useEffect, useState } from "react";
import { deletePlace, init } from "./util/database";
import * as SplashScreen from "expo-splash-screen";
import {
  Button,
  SafeAreaView,
  SafeAreaViewComponent,
  Text,
  View,
} from "react-native";
import PlaceDetails from "./screens/PlaceDetails";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true,
    };
  },
});

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    async function initializeApp() {
      try {
        await init();
        console.log("db init!");
        setDbInitialized(true);
      } catch (error) {
        console.error(error);
      } finally {
        await SplashScreen.hideAsync();
      }
    }

    initializeApp();
  }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (!dbInitialized) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [dbInitialized]);

  if (!dbInitialized) {
    return null;
  }

  function scheduleNotificationHandler() {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "로컬 알림임",
        body: "본문임ㅋ",
        data: { useName: "Max" },
      },
      trigger: {
        seconds: 5,
      },
    });
  }

  return (
    <>
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Button
          title="Schedule Notification"
          onPress={scheduleNotificationHandler}
        />
      </SafeAreaView>

      {/* <StatusBar style="dark" /> */}
      {/* <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
            contentStyle: { backgroundColor: Colors.gray700 },
          }}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              title: "Your Favorite Places",
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon="add"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate("AddPlace")}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlace}
            options={{
              title: "Add a new Place",
            }}
          />
          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen name="PlaceDetails" component={PlaceDetails} options={{
            title:'Loading Place...',
          }} />
        </Stack.Navigator>
      </NavigationContainer> */}
    </>
  );
}
