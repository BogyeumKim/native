import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import {MainTabParamList} from './types';
import ArticlesScreen from './ArticlesScreen';

const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Articles"
        component={ArticlesScreen}
        options={{title: '게시글목록'}}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
