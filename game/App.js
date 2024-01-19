import { useState } from "react";
import { StyleSheet, Text, View, ImageBackground , SafeAreaView ,Platform, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {

  const [userNumber, setUserNumber] = useState();

  function pickerNumberHandler(pcikedNumber) {
    setUserNumber(pcikedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickerNumberHandler} />;

  if(userNumber) {
    screen = <GameScreen/>
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/images/background.png')} resizeMode="cover" style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
      >
        {/* <StartGameScreen /> */}
        <SafeAreaView style={[styles.rootScreen, Platform.OS === 'android' && { marginTop: StatusBar.currentHeight }]} >
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    // backgroundColor: "#ddb52f",
    flex: 1,
  },
  backgroundImage : {
    opacity : 0.35,
  }
});
