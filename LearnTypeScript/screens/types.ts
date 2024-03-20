import {
  CompositeNavigationProp,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// MainTab ( BottomTab )
// 0. 사용할 Screen Name Param 정의
export type MainTabParamList = {
  Articles: undefined;
  UserMenu: undefined;
};
// BottomTab의 Screen먼저 등록해준다
export type MainTabNavigitionScreenParams =
  NavigatorScreenParams<MainTabParamList>;

// Stack이 상위니까 CompositeNavigationProp으로 NativeStackProp 와 BootmTabProp을 묶는다
export type MainTabNavigationProp = CompositeNavigationProp<
  RootStackNavigationProp,
  BottomTabNavigationProp<MainTabParamList>
>;

// 얜  useRoute에 쓰이는 Ts 인데 최상위는 MainTab이라 아래 Stack의 Param을 등록하는것같다
export type MainTabRouteProp = RouteProp<RootStackParamList, 'MainTab'>;

// RootStack
export type RootStackParamList = {
  MainTab: MainTabNavigitionScreenParams;
  Article: {
    id: number;
  };
  Register: undefined;
  Login: undefined;
  MyArticles: undefined;
  Write: {
    articleId?: number;
  };
};
export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
