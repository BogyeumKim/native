import { useState } from 'react';
import { StyleSheet, Text, View ,Button, TextInput } from 'react-native';

export default function App() {

  const [enteredText, setEnteredText] = useState('');
  const [course, setCourse] = useState([]);

  function inputHandler(enteredText) {
    setEnteredText(enteredText);
  };

  function addHandler() {
    setCourse(currentCourse => [...currentCourse,enteredText])
  };


  return (
    <View style={styles.appContainer}>

      <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput} placeholder='입력하는곳임' onChangeText={inputHandler} />
        <Button title='Goal' onPress={addHandler} />
      </View>

      <View style={styles.goalsContainer}>
        {course.map((item,index) => <Text key={index}>{item}</Text>)}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
 appContainer:{
  flex : 1,
  padding:50,
  paddingHorizontal:16
 },

 inputContainer: {
  flex : 1,
  flexDirection:'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom : 24,
  borderBottomWidth : 1,
  borderColor : '#cccccc'
 },

 TextInput:{
  borderWidth:1,
  borderColor: '#cccccc',
  width:'70%',
  marginRight :8,
  padding: 8,
 },

 goalsContainer: {
  flex:5
 }

 
});