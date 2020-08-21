import TrackPlayer from 'react-native-track-player';

module.exports = async function () {
  TrackPlayer.addEventListener('remote-play', () => TrackPlayer.play());

  TrackPlayer.addEventListener('remote-pause', () => TrackPlayer.pause());

  TrackPlayer.addEventListener('remote-stop', () => TrackPlayer.destroy());

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
