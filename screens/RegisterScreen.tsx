import React, { useState } from "react";
import { Center, VStack, FormControl, Input, Button} from "native-base";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


function RegisterScreen() {

    const [email, setEmail] = useState('');
    const [emailCheck, setEmailCheck] = useState('');
    const [pwd, setPwd] = useState('');
    const [pwdCheck, setPwdCheck] = useState('');

    const handleAccountCreation = () => {
        createUserWithEmailAndPassword(auth, email, pwd)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Account Created");
        })
        .catch((error) => {
            const errorCode = error.code;
            alert("Incorrect Credentials " + errorCode);
        })
    };

    return(
        <Center
        bg="white"
        _text={{ color: "black", fontWeight: "bold" }}
        height="full"
        width="full"
        >
            <VStack w="70%" space="md">
                <FormControl isRequired>
                <FormControl.Label>Email Address</FormControl.Label>
                    <Input type="text" placeholder="Email Address" size="lg" bg="white" value={email} onChangeText={text => setEmail(text)}/>
                </FormControl>

                <FormControl isRequired>
                <FormControl.Label>Confirm Email Address</FormControl.Label>
                    <Input type="text" placeholder="Email Address" size="lg" bg="white" value={emailCheck} onChangeText={text => setEmailCheck(text)}/>
                </FormControl>

                <FormControl isRequired>
                <FormControl.Label>Password</FormControl.Label>
                    <Input type="password" placeholder="Password" size="lg" bg="white" value={pwd} onChangeText={text => setPwd(text)}/>
                </FormControl>

                <FormControl isRequired>
                <FormControl.Label>Confirm Password</FormControl.Label>
                    <Input type="password" placeholder="Password" size="lg" bg="white" value={pwdCheck} onChangeText={text => setPwdCheck(text)}/>
                </FormControl>

                <Button variant="rounded" bg="green.300" onPress={handleAccountCreation}>
                Sign Me Up!
                </Button>
            </VStack>
        </Center>
    )
}

export default RegisterScreen;