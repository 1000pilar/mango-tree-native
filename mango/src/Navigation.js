import {
  StackNavigator,
} from 'react-navigation';
import {
  AppRegistry
} from 'react-native';

import HomeScreen from './components/Home'
import MainScreen from './components/Main'
import ByeScreen from './components/Bye'

 const mango = StackNavigator({
  Home: { screen: HomeScreen },
  Main: { screen: MainScreen },
  Bye: { screen: ByeScreen },
});

AppRegistry.registerComponent('mango', () => mango);
