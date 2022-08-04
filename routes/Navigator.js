import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import AuthStack from '../stacks/AuthStack';

const paths = {
    Auth: {
        screen: AuthStack,
        navigationOptions: { header: false },
    },
};

const Navigator = createStackNavigator(paths);

export default createAppContainer(Navigator);