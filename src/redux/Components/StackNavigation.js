import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import HomeScreen from './HomeScreen';
import PostScreen from './PostScreen';

export default function MainApp() {   
  return (
    <NavigationContainer>  
       <Stack.Navigator screenOptions={{ headerShown: false}} >
       <Stack.Screen  name="HomeScreen" component={HomeScreen} /> 
       <Stack.Screen  name="PostScreen" component={PostScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}