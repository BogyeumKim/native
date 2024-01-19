import { StyleSheet, TextInput, View, Alert } from "react-native";
import { useState } from "react";
import Colors from "../constants/colors";

import PrimaryButton from "../components/game/ui/PrimaryButton";
function StartGameScreen({onPickNumber}) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const choseNumber = parseInt(enteredNumber);
      console.log(enteredNumber);
    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      Alert.alert("유효하지않음!", "숫자입력하되 1~99만됨", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);      
      return;
    }

    onPickNumber(choseNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none" // 자동 대문자 변경
        autoCorrect={false} // 대소문자 변경 방지
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onpress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onpress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex : 1 ,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, // 안드로이드 전용 , border끝에 그림자효과

    /** 아이폰 전용 */
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 }, // 아래쪽으로 2
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 18,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
    alignSelf: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
