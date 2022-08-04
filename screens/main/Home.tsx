import React from "react";
import { View, Text } from 'react-native';
import { Center, VStack, Button} from "native-base";
const Home = () => {
    return(
        <Center
        bg="white"
        _text={{ color: "black", fontWeight: "bold" }}
        height="full"
        width="full"
        >
            <VStack w="70%" space="md">
                <Text>Welcome to the Home Page!</Text>
                <Button variant="rounded" bg="red.300">
                Log Out
                </Button>
            </VStack>
        </Center>
    )
}

export default Home;