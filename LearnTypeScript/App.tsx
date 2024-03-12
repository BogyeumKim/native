import React from 'react';
import Profile from './Profile';
import {Text} from 'react-native';

function App(): React.JSX.Element {
  return (
    <Profile name="John Doe">
      <Text>Hello TypeScript?</Text>
    </Profile>
  );
}

export default App;
