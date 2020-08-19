import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container, Header, HeaderText, List } from './styles';
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
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fafafa" />

      <Container>
        <Header>
          <HeaderText>Audio Player</HeaderText>
          <Icon name="play-circle" size={35} color={colors.main} />
        </Header>

        <List>
          {audioDataList.map(audioData => (
            <AudioPreview audioData={audioData} key={audioData.id} />
          ))}
        </List>
      </Container>
    </>
  );
};

export default Home;
