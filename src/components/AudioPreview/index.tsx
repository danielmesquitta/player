import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors } from '~/styles/variables';
import AudioData from '~/@types/AudioData';

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
