import React from 'react';
import Profile from './Profile';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './RootStack';
import qs from 'qs';
import {QueryClient, QueryClientProvider} from 'react-query';
import { UserContextProvider } from './contexts/UserContext';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <UserContextProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </QueryClientProvider>
    </UserContextProvider>
  );
}

export default App;
