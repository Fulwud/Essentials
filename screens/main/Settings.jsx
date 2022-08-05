import React from "react";
import { Text } from 'react-native';
import { Center, VStack } from "native-base";

function Home({ navigation }) {

    return(
        <Center
        bg="white"
        _text={{ color: "black", fontWeight: "bold" }}
        height="full"
        width="full"
        >
            <VStack w="70%" space="md">
                <Text>Welcome to the Settings!</Text>
            </VStack>
        </Center>
    )
}

export default Home;