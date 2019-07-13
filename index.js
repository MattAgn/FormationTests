import { AppRegistry } from 'react-native';
import { App } from './src/App';
import { AppFinal } from './src/App.final';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppFinal);
