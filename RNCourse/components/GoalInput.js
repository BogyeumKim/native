import {View, TextInput , Button, StyleSheet, Modal} from 'react-native'
import { useState } from 'react';

export default function GoalInput(props){
    const [enteredText, setEnteredText] = useState('');

    function inputHandler(textVal) {
        setEnteredText(textVal);
      };

      function addHandler(){
        props.onAddGoal(enteredText);
        setEnteredText('');
      }

    return ( 
        <Modal visible={props.visible} animationType='slide'>
                <View style={styles.inputContainer}>
                <TextInput 
                style={styles.TextInput} 
                placeholder='입력하는곳임' 
                onChangeText={inputHandler} 
                value={enteredText}
                />
                
                <Button title='Goal' onPress={addHandler} />
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({

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
})