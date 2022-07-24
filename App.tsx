import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from "native-base";

import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
