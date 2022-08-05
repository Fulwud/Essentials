import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import AuthStack from '../stacks/AuthStack';
import DrawerNav from './DrawerNav';

const RootPaths = createStackNavigator({
    Auth: {
        screen: AuthStack,
        navigationOptions: { header: false },
    },
    App: {
        screen: DrawerNav,
    }
});

export default createAppContainer(RootPaths);