/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ReviewScreen from './src/ui/ReviewScreen';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => ReviewScreen);

