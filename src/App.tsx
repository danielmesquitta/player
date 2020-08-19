import 'react-native-gesture-handler';

import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fafafa" />
      <Routes />
    </>
  );
};

export default App;
