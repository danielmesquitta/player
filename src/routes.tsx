import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Home from './pages/Home';
import Audio from './pages/Audio';

const { Navigator, Screen } = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Navigator
        headerMode="none"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Screen name="Home" component={Home} />
        <Screen name="Audio" component={Audio} />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
