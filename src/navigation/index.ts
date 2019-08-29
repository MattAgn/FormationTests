import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Home } from '../basic-version/pages/Home/Home';
import { About } from '../basic-version/pages/About/About';

export enum Routes {
  Home = 'Home',
  About = 'About',
}

const stackNav = createStackNavigator({
  [Routes.Home]: {
    screen: Home,
  },
  [Routes.About]: {
    screen: About,
  },
});

export const AppContainer = createAppContainer(stackNav);
