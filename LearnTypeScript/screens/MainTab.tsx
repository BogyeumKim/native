import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import {MainTabParamList} from './types';
import ArticlesScreen from './ArticlesScreen';
import UserMenuScreen from './UserMenuScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTab() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel : false,
    }}>
      <Tab.Screen
        name="Articles"
        component={ArticlesScreen}
        options={{title: '게시글목록',
        tabBarIcon : ({color,size}) => (
          <MaterialIcons name="article" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen
        name="UserMenu"
        component={UserMenuScreen}
        options={{
          title: '게시글 목록',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
