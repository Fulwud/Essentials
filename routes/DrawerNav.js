import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from '../screens/main/Home';
import Settings from '../screens/main/Settings';

const RootDrawer = createDrawerNavigator({
    Home: {
        screen: Home
    },
    Settings: {
        screen: Settings
    },
});

export default createAppContainer(RootDrawer);