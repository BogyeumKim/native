import { useState } from "react";
import { StyleSheet, Text, View, ImageBackground , SafeAreaView ,Platform, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./constants/colors";
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
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
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
    // backgroundColor: Colors.accent500,
    flex: 1,
  },
  backgroundImage : {
    opacity : 0.35,
  }
});
