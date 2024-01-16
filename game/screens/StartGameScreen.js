import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none" // 자동 대문자 변경
        autoCorrect={false} // 대소문자 변경 방지
      />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex : 1 ,
    padding: 16,
    marginTop: 100,
    marginHorizontal: 16,
    backgroundColor: "#72063c",
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
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 18,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
    alignSelf: "center",
  },
});

export default StartGameScreen;
