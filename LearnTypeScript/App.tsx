import React from 'react';
import Profile from './Profile';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './RootStack';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
