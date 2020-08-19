import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import TrackPlayer from 'react-native-track-player';

import { colors } from '../../styles/variables';
import { AudioData } from '../../components/AudioPreview';
import {
  Container,
  TextContainer,
  Title,
  Author,
  ThumbImage,
  ThumbGradient,
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

  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    async function createPlayer() {
      const { id, audio_url: url, title, author: artist } = audioData;

      await TrackPlayer.setupPlayer();

      await TrackPlayer.add({
        id: String(id),
        url,
        title,
        artist,
      });

      TrackPlayer.play();
    }
    createPlayer();
  }, [audioData]);

  function handlePause() {
    TrackPlayer.pause();
    setIsPaused(true);
  }

  function handlePlay() {
    TrackPlayer.play();
    setIsPaused(false);
  }

  function handleGoBack() {}

  function handleGoForward() {}

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#222" />

      <Container>
        <ThumbGradient />
        <ThumbImage source={{ uri: audioData.cover_image_url }} />

        <TextContainer>
          <Title>{audioData.title}</Title>
          <Author>by {audioData.author}</Author>
        </TextContainer>

        <ControlsContainer>
          <GoBackAndForwardButton onPress={handleGoBack}>
            <GoBackIcon />
            <GoBackAndForwardButtonText>30</GoBackAndForwardButtonText>
          </GoBackAndForwardButton>

          {isPaused ? (
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
