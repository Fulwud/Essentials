import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from "native-base";

import LoginScreen from './components/screens/LoginScreen';
import HomeScreen from './components/screens/LoginScreen';
import RegisterScreen from './components/screens/LoginScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen}/>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Reg" component={RegisterScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
