import React, { useState } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import AppStack from "./AppStack";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="App" component={AppStack} />
        </Stack.Navigator>
    );
}

export default AuthStack;