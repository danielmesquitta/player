import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors } from '~/styles/variables';
import { AudioData } from '~/@types/global';

import {
  Container,
  ThumbImage,
  BlackLinearGradient,
  TextContainer,
  Title,
  Author,
  Bottom,
  Tagline,
  IconContainer,
} from './styles';

interface Props {
  audioData: AudioData;
}

const AudioPreview: React.FC<Props> = ({ audioData }) => {
  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate('Audio', { audioData });
  }

  return (
    <Container onPress={handlePress}>
      <ThumbImage source={{ uri: audioData.medium_image_url }} />

      <BlackLinearGradient>
        <TextContainer>
          <Title>{audioData.title}</Title>
          <Author>by {audioData.author}</Author>

          <Bottom>
            <Tagline>{audioData.tagline}</Tagline>

            <IconContainer>
              <Icon name="play-arrow" size={40} color={colors.main} />
            </IconContainer>
          </Bottom>
        </TextContainer>
      </BlackLinearGradient>
    </Container>
  );
};

export default AudioPreview;
