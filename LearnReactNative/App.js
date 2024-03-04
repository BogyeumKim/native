import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Greeting from './components/Greeting';

const App = () => {
  return (
    <SafeAreaView>
      <Greeting name="Test" />
    </SafeAreaView>
  );
};

export default App;
