
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
  ProfileScreen,
  HomeScreen,
  Test2
} from '../screens'
import { useAppTheme } from '../hooks';
import { Text, TouchableOpacity, View } from 'react-native';
import { CustomTabBar } from './CustomTabBar';

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
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.accent,
        // tabBarActiveBackgroundColor: colors.background.default,
        tabBarStyle: {
          backgroundColor: 'gray',
          width: 300,
          // columnGap: 3,

        },
        headerBackgroundContainerStyle: { backgroundColor: 'red' }

      }}
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tabs.Screen name="Home" component={HomeScreenStack} />
      <Tabs.Screen name='Camera' component={CameraScreenStack} />
      <Tabs.Screen name="Profile" component={ProfileScreenStack} />
    </Tabs.Navigator >
  );
}


//Стек домашней страницы
export type HomeStackParamList = {
  HomeScreen: undefined;
};
const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const HomeScreenStack = () => {

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerBackVisible: false,
        headerShown: false,

      }}

    >
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    </HomeStack.Navigator>

  )
}

//Для теста, название тоже для теста
export type CameraStackList = {
  Test2: undefined;
};
const CameraStack = createNativeStackNavigator<CameraStackList>();
const CameraScreenStack = () => {

  return (
    <CameraStack.Navigator
      screenOptions={{
        headerBackVisible: false,
        headerShown: false,

      }}

    >
      <CameraStack.Screen name="Test2" component={Test2} />
    </CameraStack.Navigator>

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