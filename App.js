import { createStackNavigator } from 'react-navigation';

import HomeScreen from '/home/andre/Projects/react-native-websocket/src/index.js';

const App = createStackNavigator({
  Home: { screen: HomeScreen }
});

export default App;