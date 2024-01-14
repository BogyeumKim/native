import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import { StatusBar } from 'expo-status-bar'
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [course, setCourse] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addHandler(enteredText) {
    setCourse((currentCourse) => [
      ...currentCourse,
      { text: enteredText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteHandler(id) {
    setCourse((currentItem) => {
      return currentItem.filter((item) => item.id !== id);
    });
  }

  return (
    <>
    <StatusBar style="light" />
    <View style={styles.appContainer}>
      <Button
        title='Add New Goal'
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />

      <GoalInput
        onAddGoal={addHandler}
        visible={modalIsVisible}
        onCancel={endAddGoalHandler}
      />

      <View style={styles.goalsContainer}>
        <FlatList
          data={course}
          renderItem={(itemData) => {
            return (
              <GoalItem
                item={itemData.item}
                onDeleteItem={deleteHandler}
                id={itemData.item.id}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        ></FlatList>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  
  },

  goalsContainer: {
    flex: 5,
  },
});
