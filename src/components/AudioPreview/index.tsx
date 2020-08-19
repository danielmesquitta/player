import React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container } from './styles';

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
  audio: AudioData;
}

const AudioList: React.FC<Props> = ({ audio }) => {
  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate('Audio', { audio });
  }

  return (
    <Container onPress={handlePress}>
      <Text>Button text</Text>
    </Container>
  );
};

export default AudioList;
