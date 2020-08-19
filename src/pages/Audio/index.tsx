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
  StyledTouchableOpacity,
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
          <Icon name="play-back" size={35} color={colors.textWhite} />

          {isPaused ? (
            <StyledTouchableOpacity onPress={handlePlay}>
              <Icon name="play" size={50} color={colors.textWhite} />
            </StyledTouchableOpacity>
          ) : (
            <StyledTouchableOpacity onPress={handlePause}>
              <Icon name="pause" size={50} color={colors.textWhite} />
            </StyledTouchableOpacity>
          )}
          <Icon name="play-forward" size={35} color={colors.textWhite} />
        </ControlsContainer>
      </Container>
    </>
  );
};

export default Audio;
