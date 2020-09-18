import TrackPlayer from 'react-native-track-player';
import { updatePlayerState } from '~/store/modules/player/actions';
import store from '~/store';

module.exports = async function () {
  TrackPlayer.addEventListener('remote-play', () => {
    TrackPlayer.play();
    store.dispatch(updatePlayerState('playing'));
  });

  TrackPlayer.addEventListener('remote-pause', () => {
    TrackPlayer.pause();
    store.dispatch(updatePlayerState('paused'));
  });

  TrackPlayer.addEventListener('remote-stop', () => {
    TrackPlayer.destroy();
    store.dispatch(updatePlayerState('destroyed'));
  });

  TrackPlayer.addEventListener('remote-jump-backward', async () => {
    const position = await TrackPlayer.getPosition();
    const updatedPosition = position - 30 > 0 ? position - 30 : 0;
    TrackPlayer.seekTo(updatedPosition);
  });

  TrackPlayer.addEventListener('remote-jump-forward', async () => {
    const position = await TrackPlayer.getPosition();
    const duration = await TrackPlayer.getDuration();
    const updatedPosition = position + 30 > duration ? duration : position + 30;
    TrackPlayer.seekTo(updatedPosition);
  });
};
