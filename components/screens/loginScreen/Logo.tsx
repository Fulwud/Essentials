import React from "react"
import { Center, Text, VStack, Flex} from "native-base";

const Logo = () => {
    return(
        <Center width="container">
            <VStack >
                <Text fontSize="2xl">
                    The
                </Text>
                <Text bold italic fontSize="3xl">
                    Essentials
                </Text>
                <Flex direction="row-reverse">
                    <Text fontSize="2xl">
                            App
                    </Text>
                </Flex>
            </VStack>
        </Center>
    );
}

export default Logo;