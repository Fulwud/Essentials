import React from "react";
import {
    Center,
    VStack,
    HStack,
    FormControl,
    Input,
    Divider,
    Text,
    Button,
    } from "native-base";

import Logo from "../components/loginScreen/Logo";

function Login({ navigation }) {

    const handleSignIn = () => {
        console.log("Hello");
        navigation.replace("Home");
    }

    const handleReg = () => {
        console.log("Reg")
        navigation.replace("Reg");
    }

    return (
        <Center
        bg="white"
        _text={{ color: "black", fontWeight: "bold" }}
        height="full"
        width="full"
        >
        <VStack w="70%" space="md">
            <Logo />

            <FormControl isRequired>
            <Input type="text" placeholder="Username" size="lg" bg="white" />
            </FormControl>

            <FormControl isRequired>
            <Input type="password" placeholder="Password" size="lg" bg="white" />
            </FormControl>

            <Button variant="rounded" bg="green.300" onPress={() => navigation.navigate('Home')}>
            Login
            </Button>

            <Divider thickness="2" my="2" />

            <Center>
            <Button variant="link" onPress={() => navigation.navigate('Reg')}>
                <HStack>
                <Text>Don't Have an account? </Text>
                <Text bold underline>
                    Sign Up!
                </Text>
                </HStack>
            </Button>
            </Center>
        </VStack>
        </Center>
    );
    };

export default Login;
