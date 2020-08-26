import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors } from '~/styles/variables';

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

export interface AudioData {
  id: number;
  title: string;
  tagline: string;
  description: string;
  author: string;
  medium_image_url: string;
  thumb_image_url: string;
  cover_image_url: string;
  sharing_url: string;
  audio_url: string;
}

interface Props {
  audioData: AudioData;
}

const AudioList: React.FC<Props> = ({ audioData }) => {
  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate('Audio', { audioData });
  }

  return (
    <Container>
      <RectButton onPress={handlePress} style={{ flex: 1 }}>
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
      </RectButton>
    </Container>
  );
};

export default AudioList;
