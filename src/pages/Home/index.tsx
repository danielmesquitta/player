import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container, ThumbGradient, Header, HeaderText, List } from './styles';
import { colors } from '../../styles/variables';
import Background from '../../styles/Background';

import AudioPreview, { AudioData } from '../../components/AudioPreview';

import api from '../../services/api';

const Home: React.FC = () => {
  const [audioDataList, setAudioDataList] = useState<AudioData[]>([]);

  useEffect(() => {
    api.get('/').then(response => {
      setAudioDataList(response.data.data);
    });
  }, []);

  return (
    <Container>
      <Background />
      <Header>
        <HeaderText>Audio Player</HeaderText>
        <Icon name="play-circle" size={35} color={colors.textWhite} />
      </Header>

      <List>
        {audioDataList.map(audioData => (
          <AudioPreview audioData={audioData} key={audioData.id} />
        ))}
      </List>
    </Container>
  );
};

export default Home;
