import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  Container,
  Header,
  MainHeader,
  HeaderText,
  SearchContainer,
  SearchInput,
  Loading,
  List,
} from './styles';
import { colors } from '~/styles/variables';

import AudioPreview from '~/components/AudioPreview';
import searchForBooks from '~/utils/searchForBooks';

import { IAudioData } from '~/@types/global';
import api from '~/services/api';

const Home: React.FC = () => {
  const [audioDataList, setAudioDataList] = useState<IAudioData[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filteredAudioDataList, setFilteredAudioDataList] = useState<
    IAudioData[]
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
      <Header>
        <MainHeader>
          <HeaderText>Player</HeaderText>
          <Icon name="play-circle" size={35} color={colors.textWhite} />
        </MainHeader>

        <SearchContainer>
          <Icon name="search" color="#bbb" size={18} />
          <SearchInput
            onChangeText={setSearch}
            placeholder="Realizar busca..."
            placeholderTextColor="#bbb"
          />
        </SearchContainer>
      </Header>

      {loading ? (
        <Loading />
      ) : (
        <List
          data={filteredAudioDataList}
          keyExtractor={audioData => String(audioData.id)}
          renderItem={({ item: audioData }) => (
            <AudioPreview audioData={audioData} />
          )}
        />
      )}
    </Container>
  );
};

export default Home;
