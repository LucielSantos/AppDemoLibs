import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';
import Lottie from './pages/Lottie'

const routes = createAppContainer(
    createStackNavigator({
        Home,
        Lottie,
    },{
        headerMode: "none"
    })
);

export default routes;