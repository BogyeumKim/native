import { useState } from 'react';
import { StyleSheet, Text, View ,Button, TextInput , FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {


  const [course, setCourse] = useState([]);


  function addHandler(enteredText) {
    setCourse(currentCourse => [...currentCourse,{text : enteredText, id : Math.random().toString()}])
  };

  function deleteHandler(){
    console.log('DELETE');
  }


  return (
    <View style={styles.appContainer}>

      <GoalInput onAddGoal={addHandler} />
      
      <View style={styles.goalsContainer}>
        <FlatList data={course} renderItem={itemData => {
          return <GoalItem item={itemData.item} onDeleteItem={deleteHandler} />;
        }} 
        keyExtractor={(item, index)=>{
          return item.id;
        }}
        alwaysBounceVertical={false}>
         
        
         
        </FlatList>
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


 goalsContainer: {
  flex:5
 },
 
});