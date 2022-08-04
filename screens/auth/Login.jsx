import React, { useState } from "react";
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
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import * as SecureStore from "expo-secure-store";

import Logo from "../../components/loginScreen/Logo";

function Login({ navigation }) {

    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')

    const handleLogIn = () => {
        signInWithEmailAndPassword(auth, email, pwd)
        .then((userCredential) => {
            const user = userCredential.user;
            navigation.navigate("App");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert("Incorrect Credentials " + errorCode)
        });
    }

    const handleReg = () => {
        navigation.navigate("Register");
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
            <Input type="text" placeholder="Email" size="lg" bg="white" value={email} onChangeText={text => setEmail(text)}/>
            </FormControl>

            <FormControl isRequired>
            <Input type="password" placeholder="Password" size="lg" bg="white" value={pwd} onChangeText={text => setPwd(text)}/>
            </FormControl>

            <Button variant="rounded" bg="green.300" onPress={handleLogIn}>
            Login
            </Button>

            <Divider thickness="2" my="2" />

            <Center>
            <Button variant="link" onPress={handleReg}>
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
