
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
  ProfileScreen,
  HomeScreen,
  Test2
} from '../screens'

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
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="Home" component={HomeScreenStack} />
      <Tabs.Screen name="ProfileScreenStack" component={ProfileScreenStack} />
    </Tabs.Navigator>
  );
}


//Стек домашней страницы
export type HomeStackParamList = {
  HomeScreen: undefined;
  Test2: undefined;
};
const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const HomeScreenStack = () => {

  return (
    <HomeStack.Navigator screenOptions={{ headerBackVisible: false, headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="Test2" component={Test2} />
    </HomeStack.Navigator>

  )
}

//Стек профиля 
export type ProfileStackParamList = {
  ProfileScreen: undefined;
};
const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();
const ProfileScreenStack = () => {

  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
    </ProfileStack.Navigator>

  )
}