import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/main/Home";

const Stack = createNativeStackNavigator();
const AppStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}

export default AppStack;