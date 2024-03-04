import React from 'react';
import {View, Text} from 'react-native';

function getDiffrece(a, b) {
  return a - b;
}

function Sample() {
  const value = 'hello';
  const user = {
    name: 'Hohn Doe',
  };

  return (
    <View>
      <Text>{1 + 1}</Text>
      <Text>{value}</Text>
      <Text>{user.name}</Text>
      <Text>{getDiffrece(5, 4)}</Text>
    </View>
  );
}

function Greeting(props) {
  return (
    <View>
      <Text>안녕하세요 {props.name}!</Text>
    </View>
  );
}

export default Greeting;
