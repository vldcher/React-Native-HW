/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from "react-navigation";

import FeedScreen from './screens/feed';
import FirstScreen from './screens/first';
import SecondScreen from './screens/second';
import MovieDetails from './components/movieDetails';


const MovieNavigator = createStackNavigator ({
    Home: FeedScreen,
    Details: MovieDetails
});
  
const TabNavigator = createBottomTabNavigator({
    Home: MovieNavigator,
    First: FirstScreen,
    Second: SecondScreen
});

export default createAppContainer(TabNavigator);

AppRegistry.registerComponent(appName, () => createAppContainer(TabNavigator));