
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
  ProfileScreen,
  HomeScreen,
  MenuScreen,
  ArtDetailScreen,
} from '../screens'
import { useAppTheme } from '../hooks';
import { CustomTabBar } from './CustomTabBar';
import { ArtNavigationParamsType, IProduct } from '../types/artApiTypes';

//Базовый роут навигации
export const RootAppNavigationStack = () => {


  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


//Нижняя навигация по разделам
const Tabs = createBottomTabNavigator();
const BottomTabs = () => {
  const { colors } = useAppTheme()
  return (
    <Tabs.Navigator

      tabBar={props => <CustomTabBar {...props} />}
      initialRouteName='Home'
      sceneContainerStyle={{ backgroundColor: colors.Background.default }}

      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        // tabBarActiveTintColor: colors.accent,
        tabBarStyle: {},

        // headerStyle: { backgroundColor: colors.Background.default },
        // tabBarInactiveBackgroundColor: 'pink',
        // tabBarBadgeStyle: { backgroundColor: 'red' },

      }}


    >
      <Tabs.Screen name='Menu' component={MenuScreenStack} />
      <Tabs.Screen name='Home' component={HomeScreenStack} />
      <Tabs.Screen name='Profile' component={ProfileScreenStack} />
    </Tabs.Navigator >
  );
}


//Стек домашней страницы
export type HomeStackParamList = {
  HomeScreen: undefined;
  ArtDetailScreen: ArtNavigationParamsType;
};
const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const HomeScreenStack = () => {

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerBackVisible: false,
        headerShown: false,
        // headerTransparent: true,
        // headerStyle: {
        //   backgroundColor: 'transparent'
        // }
      }}
    >
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="ArtDetailScreen" component={ArtDetailScreen} />
    </HomeStack.Navigator>

  )
}

//Для теста, название тоже для теста
export type MenuStackList = {
  MenuScreen: undefined;
};
const MenuStack = createNativeStackNavigator<MenuStackList>();
const MenuScreenStack = () => {

  return (
    <MenuStack.Navigator
      screenOptions={{
        headerBackVisible: false,
        headerShown: false,

      }}

    >
      <MenuStack.Screen name="MenuScreen" component={MenuScreen} />
    </MenuStack.Navigator>

  )
}

//Стек профиля 
export type ProfileStackParamList = {
  ProfileScreen: undefined;
};
const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();
const ProfileScreenStack = () => {

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerBackVisible: false,
        headerShown: false
      }}
    >
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
    </ProfileStack.Navigator>

  )
}