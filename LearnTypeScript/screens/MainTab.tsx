import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
  useNavigation,
} from '@react-navigation/native';
import {RootStackNavigationProp} from '../RootStack';
import {Button, Text, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type MainTabParamList = {
  Home: undefined;
  Account: undefined;
};

type MainTabNavigationProp = CompositeNavigationProp<
  RootStackNavigationProp,
  BottomTabNavigationProp<MainTabParamList>
>;
export type MainTabNavigationScreenParams =
  NavigatorScreenParams<MainTabParamList>;

// 만약 MainTabNavigationProp 에서 상단탭등 다른 네비게이션쓸땐 아래처럼 Composite로 또 묶어주자
type AccountStackParamList = {
  Account: undefined;
  Setting: undefined;
};

export type AccountStacknavigationProps = CompositeNavigationProp<
  MainTabNavigationProp,
  NativeStackNavigationProp<AccountStackParamList>
>;

const Tab = createBottomTabNavigator<MainTabParamList>();

function HomeScreen() {
  const navigation = useNavigation<MainTabNavigationProp>();
  //   const navigation = useNavigation<MainTabNavigationProp>();
  const onPress = () => {
    navigation.navigate('Detail', {id: 1});
  };
  return (
    <View>
      <Text>Home</Text>
      <Button title="Open Detail" onPress={onPress} />
    </View>
  );
}

function AccountScreen() {
  return (
    <View>
      <Text>Account</Text>
    </View>
  );
}

function MainTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

export default MainTab;
