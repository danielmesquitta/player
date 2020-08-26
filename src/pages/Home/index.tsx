import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  Container,
  Header,
  MainHeader,
  HeaderText,
  InputContainer,
  Input,
  List,
} from './styles';
import { colors } from '~/styles/variables';
import Background from '~/styles/Background';

import AudioPreview from '~/components/AudioPreview';
import searchForBooks from '~/utils/searchForBooks';

import AudioData from '~/@types/AudioData';
import api from '~/services/api';

const Home: React.FC = () => {
  const [audioDataList, setAudioDataList] = useState<AudioData[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filteredAudioDataList, setFilteredAudioDataList] = useState<
    AudioData[]
  >([]);

  useEffect(() => {
    api
      .get('/')
      .then(response => {
        setAudioDataList(response.data.data);
      })
      .then(() => setLoading(false));
  }, []);

  useEffect(() => {
    setFilteredAudioDataList(searchForBooks(search, audioDataList));
  }, [search, audioDataList]);

  return (
    <Container>
      <Background />
      <Header>
        <MainHeader>
          <HeaderText>Player</HeaderText>
          <Icon name="play-circle" size={35} color={colors.textWhite} />
        </MainHeader>

        <InputContainer>
          <Icon name="search" color="#bbb" size={18} />
          <Input
            onChangeText={setSearch}
            placeholder="Realizar busca..."
            placeholderTextColor="#bbb"
          />
        </InputContainer>
      </Header>

      {loading ? (
        <ActivityIndicator color="#fafafa" size={70} style={{ flex: 1 }} />
      ) : (
        <List>
          {filteredAudioDataList.map(audioData => (
            <AudioPreview audioData={audioData} key={audioData.id} />
          ))}
        </List>
      )}
    </Container>
  );
};

export default Home;
