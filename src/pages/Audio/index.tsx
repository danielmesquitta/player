import React, { useEffect } from 'react';
import { Text } from 'react-native';

import { Container } from './styles';
import { AudioData } from '../../components/AudioPreview';

interface Props {
  route: {
    params: {
      audioData: AudioData;
    };
  };
}

const Audio: React.FC<Props> = ({ route }) => {
  const { audioData } = route.params;

  useEffect(() => {
    console.log(audioData);
  }, [audioData]);

  return (
    <Container>
      <Text>Audio</Text>
    </Container>
  );
};

export default Audio;
