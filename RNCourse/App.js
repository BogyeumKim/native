
import { StyleSheet, Text, View ,Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput} placeholder='입력하는곳임'/>
        <Button title='Goal'></Button>
      </View>
      <View>
        <Text>
          List of goals...
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 appContainer:{
  padding:50
 },

 inputContainer: {
  flexDirection:'row',
  justifyContent: 'space-between'
 },

 TextInput:{
  borderWidth:1,
  borderColor: '#cccccc',
  width:'80%',
  marginRight :8,
  padding: 8,
 }
});