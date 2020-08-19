import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

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

  function handlePause() {
    setIsPaused(true);
  }

  function handlePlay() {
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
