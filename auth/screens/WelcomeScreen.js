import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function WelcomeScreen() {
  const [fetchedMessage, setFetchMessage] = useState("");
  const authReducer = useSelector(state => state.authReducer);
  const token = authReducer.token;
  useEffect(() => {
    axios
      .get(
        "https://react-native-course-b79fe-default-rtdb.asia-southeast1.firebasedatabase.app/message.json?auth=" + token
      )
      .then((res) => {
        setFetchMessage(res.data);
      });
  }, [token]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
