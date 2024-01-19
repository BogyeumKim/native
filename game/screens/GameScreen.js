import { Text, View, StyleSheet } from "react-native";
import  { useState } from 'react'
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";


function generateRandomBetween(min , max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if( rndNum === exclude ){
    return generateRandomBetween(min, max, exclude);
  }else{
    return rndNum;
  }
}

function GameScreen({userNumber}) {

  const initalGuess = generateRandomBetween(1,100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initalGuess);
  return (
    <View style={styles.screen}>
      <Title>Opponents'Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      {/* GUESS */}
      <View>
        <Text>Higher or lower?</Text>
        {/* + - */}
      </View>
      {/* <View>LoG ROUNDS</View> */}
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
 
  
});
