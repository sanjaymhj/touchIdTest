/** @format */

// import {AppRegistry} from 'react-native';
import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import { Navigation } from 'react-native-navigation';

// import { registerScreens } from './screens';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startSingleScreenApp({
  screen: {
    label: 'One',
    screen: 'example.FirstTabScreen', // this is a registered name for a screen
    // icon: require('../img/one.png'),
    // selectedIcon: require('../img/one_selected.png'), // iOS only
    title: 'Screen One'
  }
});

function registerScreens() {
  Navigation.registerComponent('example.FirstTabScreen', () => App);
}
