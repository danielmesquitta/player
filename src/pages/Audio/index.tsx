import React, { useEffect } from 'react';
import { Text } from 'react-native';

import { Container } from './styles';
import { AudioData } from '../../components/AudioPreview';

interface Props {
  route: {
    params: {
      audio: AudioData;
    };
  };
}

const Audio: React.FC<Props> = ({ route }) => {
  const { audio } = route.params;

  useEffect(() => {
    console.log(audio);
  }, [audio]);

  return (
    <Container>
      <Text>Audio</Text>
    </Container>
  );
};

export default Audio;
