import React from "react"
import { Center, VStack, FormControl, Input, Divider } from "native-base";

import Logo from "../components/screens/loginScreen/Logo";

const LoginScreen = () => {
    return(
        <Center 
        bg="blue.100" 
        _text={{ color: "black", fontWeight: "bold"}} 
        height="full" 
        width="full">
            <VStack w="70%" space="md">

                <Logo/>

                <FormControl isRequired>
                    <FormControl.Label>Username</FormControl.Label>
                    <Input type="text" placeholder="Username" size="lg"/>
                </FormControl>

                <FormControl isRequired>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input type="password"  placeholder="Password" size="lg" bg="white"/>
                </FormControl>

                <Divider thickness="2" my="10"/>

            </VStack>
        </Center>
    );
};

export default LoginScreen;