import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar, LogBox } from 'react-native';

import Routes from './routes';

const App: React.FC = () => {
  LogBox.ignoreLogs(['No task registered', 'Require cycle']);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#222" />
      <Routes />
    </>
  );
};

export default App;
