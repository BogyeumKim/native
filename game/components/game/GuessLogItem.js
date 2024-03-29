import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponet's Guess : {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width:'100%',
    elevation:4,
    // 아래는 IOS 위에 ele는 안드로이드
    shadowColor:'black',
    shadowOffset:{width:0, height:0},
    shadowOpacity:0.25,
    shadowRadius:3,
  },
  itemText: {
    fontFamily:'open-sans',

  }
});
export default GuessLogItem;
