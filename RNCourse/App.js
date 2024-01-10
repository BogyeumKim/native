
import { StyleSheet, Text, View ,Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder='입력하는곳임'/>
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
 }
});