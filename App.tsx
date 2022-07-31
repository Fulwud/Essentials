import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from "native-base";

import LoginScreen from './screens/Login';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
      <NavigationContainer>
        <NativeBaseProvider>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Registration Page" component={RegisterScreen}/>
          </Stack.Navigator>
        </NativeBaseProvider>
      </NavigationContainer>
  )
}
