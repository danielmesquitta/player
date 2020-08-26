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

import AudioData from '~/@types/AudioData';
import ProgressBar from '~/components/ProgressBar';

import { colors } from '~/styles/variables';
import Background from '~/styles/Background';
import {
  Container,
  TextContainer,
  Title,
  Author,
  ThumbImage,
  ControlsContainer,
  GoBackAndForwardButton,
  GoBackIcon,
  GoForwardIcon,
  GoBackAndForwardButtonText,
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

  async function handlePause() {
    await TrackPlayer.pause();
    setTrackState(await TrackPlayer.getState());
  }

  async function handlePlay() {
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
    <>
      <Container>
        <Background />
        <ThumbImage source={{ uri: audioData.cover_image_url }} />

        <TextContainer>
          <Title>{audioData.title}</Title>
          <Author>by {audioData.author}</Author>
        </TextContainer>

        <ControlsContainer>
          <ProgressBar />
          <GoBackAndForwardButton onPress={handleGoBack}>
            <GoBackIcon />
            <GoBackAndForwardButtonText>30</GoBackAndForwardButtonText>
          </GoBackAndForwardButton>

          {trackState === STATE_PAUSED ? (
            <CenterButton onPress={handlePlay}>
              <Icon name="play" size={70} color={colors.textWhite} />
            </CenterButton>
          ) : (
            <CenterButton onPress={handlePause}>
              <Icon name="pause" size={70} color={colors.textWhite} />
            </CenterButton>
          )}

          <GoBackAndForwardButton onPress={handleGoForward}>
            <GoForwardIcon />
            <GoBackAndForwardButtonText>30</GoBackAndForwardButtonText>
          </GoBackAndForwardButton>
        </ControlsContainer>
      </Container>
    </>
  );
};

export default Audio;
