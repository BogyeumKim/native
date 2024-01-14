import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";
import { useState } from "react";

export default function GoalInput(props) {
  const [enteredText, setEnteredText] = useState("");

  function inputHandler(textVal) {
    setEnteredText(textVal);
  }

  function addHandler() {
    props.onAddGoal(enteredText);
    setEnteredText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')}/>
        <TextInput
          style={styles.TextInput}
          placeholder="입력하는곳임"
          onChangeText={inputHandler}
          value={enteredText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Goal" onPress={addHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Close Modal" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor : '#311b6b',
    padding: 16,
  },

  TextInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    color:'white',
    width: "100%",
    padding: 8,
  },

  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },

  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  
  image : {
    width : 100,
    height : 100,
    margin : 20,
  },
});
