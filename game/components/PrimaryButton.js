import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  function pressHandler() {
    console.log("Pressssssed");
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable style={({pressed}) =>pressed ? [styles.pressed , styles.buttonInnerContainer] : styles.buttonInnerContainer} onPress={pressHandler} android_ripple={{ color: "#644202" }}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow:'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },

  /** 아이폰전용 물결 */
  pressed : {
    opacity:0.75,
    
  }
});

export default PrimaryButton;
