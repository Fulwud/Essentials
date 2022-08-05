import React from "react";

import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';

import Navigator from "./routes/AuthNav";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Navigator/>
      </NativeBaseProvider>
    </NavigationContainer>
  )
}
