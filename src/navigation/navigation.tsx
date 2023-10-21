
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import {
  ProfileScreen,
  HomeScreen,
  Test2
} from '../screens'


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//Базовый роут навигации
export const RootAppNavigationStack = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}

//Нижняя навигация по разделам
const Tabs = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeScreenStack} />
      <Tabs.Screen name="ProfileScreenStack" component={ProfileScreenStack} />
    </Tabs.Navigator>
  );
}


//Стек домашней страницы
export type HomeStackParamList = {
  Test: undefined;
  Test2: undefined;
};
const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const HomeScreenStack = () => {

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Test" component={HomeScreen} />
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