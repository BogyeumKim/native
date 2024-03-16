import React from 'react';
import Profile from './Profile';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './RootStack';
import qs from 'qs';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
