import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';

import { Container, Content, Header, List } from './styles';

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
      <Content>
        <Header> Audio Player</Header>

        <List>
          {audioDataList.map(audioData => (
            <AudioPreview audioData={audioData} key={audioData.id} />
          ))}
        </List>
      </Content>
    </Container>
  );
};

export default Home;
