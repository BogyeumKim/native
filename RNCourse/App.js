
import { StyleSheet, Text, View ,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{marginTop: 16, borderWidth: 2, borderColor: 'red', padding: 16}}>new World</Text>
      </View>
      <Text style={styles.dummyText}>Hello</Text>
      <Text>World</Text>
      <Button title='touch' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dummyText: {
    margin:16,
    padding:16,
    borderWidth:2,
    borderColor:'blue',
  }
});