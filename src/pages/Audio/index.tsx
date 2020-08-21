import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import TrackPlayer from 'react-native-track-player';

import { AudioData } from '../../components/AudioPreview';
import ProgressBar from '../../components/ProgressBar';

import { colors } from '../../styles/variables';
import Background from '../../styles/Background';
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

  const [trackState, setTrackState] = useState<TrackPlayer.State>();

  useEffect(() => {
    (async () => {
      const {
        id,
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

      TrackPlayer.play();
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const updatedTrackState = await TrackPlayer.getState();
      setTrackState(updatedTrackState);
      console.log(updatedTrackState);
    })();
  }, [TrackPlayer.getState]);

  async function handlePause() {
    await TrackPlayer.pause();
  }

  async function handlePlay() {
    await TrackPlayer.play();
  }

  async function handleGoBack() {
    const position = await TrackPlayer.getPosition();
    const updatedPosition = position - 30 > 0 ? position - 30 : 0;
    TrackPlayer.seekTo(updatedPosition);
  }

  async function handleGoForward() {
    const position = await TrackPlayer.getPosition();
    const duration = await TrackPlayer.getDuration();
    const updatedPosition = position + 30 > duration ? duration : position + 30;
    TrackPlayer.seekTo(updatedPosition);
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

          {trackState === 3 ? (
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
