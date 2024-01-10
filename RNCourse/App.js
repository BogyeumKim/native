
import { StyleSheet, Text, View ,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>new World</Text>
      </View>
      <Text>Hello</Text>
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
});