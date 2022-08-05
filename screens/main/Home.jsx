import React from "react";
import { Text } from 'react-native';
import { Center, VStack, Button} from "native-base";

import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
function Home({ navigation }) {

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            navigation.popToTop();
            console.log("user signed out");
        })
        .catch((error) => {
            console.log("User failed to sign out - ", error);
        })
    }

    return(
        <Center
        bg="white"
        _text={{ color: "black", fontWeight: "bold" }}
        height="full"
        width="full"
        >
            <VStack w="70%" space="md">
                <Text>Welcome to the Home Page!</Text>
                <Button variant="rounded" bg="red.300" onPress={handleSignOut}>
                Log Out
                </Button>
            </VStack>
        </Center>
    )
}

export default Home;