import React, { useState, useEffect } from 'react';
import { AppState } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import TrackPlayer, {
  State as TrackState,
  STATE_NONE,
  STATE_PAUSED,
  STATE_PLAYING,
} from 'react-native-track-player';

import { AudioData } from '~/@types/global';

import ProgressBar from '~/components/ProgressBar';
import GoBackAndForwardButton from '~/components/GoBackAndForwardButton';

import { colors } from '~/styles/variables';
import {
  Container,
  TextContainer,
  Title,
  Author,
  ThumbImage,
  ControlsContainer,
  CenterButton,
} from './styles';

interface Params {
  audioData: AudioData;
}

const Audio: React.FC = () => {
  const { audioData } = useRoute().params as Params;

  const [trackState, setTrackState] = useState<TrackState>(STATE_NONE);

  useEffect(() => {
    TrackPlayer.destroy();

    const {
      id,
      audio_url: url,
      title,
      author: artist,
      thumb_image_url: artwork,
    } = audioData;

    TrackPlayer.add({
      id: String(id),
      url,
      title,
      artist,
      artwork,
    }).then(() => TrackPlayer.play());
  }, [audioData]);

  useEffect(() => {
    AppState.addEventListener('change', () => {
      TrackPlayer.getState().then(state => setTrackState(state));
    });
  });

  async function handleCenterButtonPress() {
    if (trackState === STATE_PAUSED) {
      const { id } = audioData;
      setTrackState(STATE_PLAYING);

      const track = await TrackPlayer.getTrack(String(id));
      if (!track) {
        const {
          audio_url: url,
          title,
          author: artist,
          thumb_image_url: artwork,
        } = audioData;

        await TrackPlayer.add({
          id: String(id),
          url,
          title,
          artist,
          artwork,
        });
      }
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
      setTrackState(await TrackPlayer.getState());
    }
  }

  async function handleGoBack() {
    const position = await TrackPlayer.getPosition();
    TrackPlayer.seekTo(position - 30 > 0 ? position - 30 : 0);
  }

  async function handleGoForward() {
    const position = await TrackPlayer.getPosition();
    const duration = await TrackPlayer.getDuration();
    TrackPlayer.seekTo(position + 30 > duration ? duration : position + 30);
  }

  return (
    <Container>
      <ThumbImage source={{ uri: audioData.cover_image_url }} />

      <TextContainer>
        <Title>{audioData.title}</Title>
        <Author>by {audioData.author}</Author>
      </TextContainer>

      <ControlsContainer>
        <ProgressBar />
        <GoBackAndForwardButton handlePress={handleGoBack} type="back" />
        <CenterButton onPress={handleCenterButtonPress}>
          <Icon
            name={trackState === STATE_PAUSED ? 'play' : 'pause'}
            size={70}
            color={colors.textWhite}
          />
        </CenterButton>
        <GoBackAndForwardButton handlePress={handleGoForward} type="forward" />
      </ControlsContainer>
    </Container>
  );
};

export default Audio;
