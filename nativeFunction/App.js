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
  Alert,
  Button,
  SafeAreaView,
  SafeAreaViewComponent,
  Text,
  View,
  Platform,
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

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log("NOTIFICATION RECEIVED");
        // console.log(JSON.stringify(notification,null,2));
        const userName = notification.request.content.data.userName;
        console.log(userName);
      }
    );

    const subscription2 = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log("NOTIFICATION RESPONSE");
        console.log(response);
      }
    );

    return () => {
      subscription.remove();
      subscription2.remove();
    };
  }, []);

  useEffect(() => {
    async function configurePushNotifications() {
      const { status } = await Notifications.getPermissionsAsync();
      let finalStatus = status;

      if (finalStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== "granted") {
        Alert.alert("알림", "권한설정하셈");
        return;
      }

      const pushTokendData = await Notifications.getExpoPushTokenAsync();
      console.log(pushTokendData);

      if (Platform.OS === "android") {
        Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.HIGH,
        });
      }
    }

    configurePushNotifications();
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
        data: { userName: "Max" },
      },
      trigger: {
        seconds: 5,
      },
    });
  }

  function sendPushNotificationHandler() {
    fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // to: "ExponentPushToken[Z6ljz4Fs9XzZcPC65QnufM]",
        to: "ExponentPushToken[HsKJerMMLAEcab5srxz2hT]",
        title: "테스트임",
        body: "ㄹㅇㅋㅋ",
      }),
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
        <Button title="PUSH버튼임" onPress={sendPushNotificationHandler} />
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
