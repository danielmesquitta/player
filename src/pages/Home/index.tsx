import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Content, Header, HeaderText, List } from './styles';
import { colors } from '../../styles/variables';

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
        <Header>
          <HeaderText>Audio Player</HeaderText>
          <Icon name="play-circle-outline" size={30} color={colors.main} />
        </Header>

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
