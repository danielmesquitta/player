import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { StatusBar, LogBox } from 'react-native';
import TrackPlayer from 'react-native-track-player';

import Routes from './routes';

const App: React.FC = () => {
  LogBox.ignoreLogs(['Require cycle']);

  useEffect(() => {
    TrackPlayer.setupPlayer().then(() => {
      TrackPlayer.updateOptions({
        capabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
          TrackPlayer.CAPABILITY_STOP,
          TrackPlayer.CAPABILITY_JUMP_BACKWARD,
          TrackPlayer.CAPABILITY_JUMP_FORWARD,
        ],
        jumpInterval: 30,
      });
    });
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#222" />
      <Routes />
    </>
  );
};

export default App;
