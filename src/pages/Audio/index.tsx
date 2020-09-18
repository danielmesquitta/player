import React, { useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import TrackPlayer from 'react-native-track-player';
import { useSelector, useDispatch } from 'react-redux';

import ProgressBar from '~/components/ProgressBar';
import GoBackAndForwardButton from '~/components/GoBackAndForwardButton';

import { colors } from '~/styles/variables';
import {
  Container,
  TextContainer,
  Title,
  Author,
  ThumbImage,
  ControlsContainer,
  CenterButton,
} from './styles';

import { AudioData } from '~/@types/global';
import { IStore } from '~/@types/store';

import { updatePlayerState } from '~/store/modules/player/actions';

interface Params {
  audioData: AudioData;
}

const Audio: React.FC = () => {
  const dispatch = useDispatch();
  const { player } = useSelector<IStore, IStore>(state => state);

  const { audioData } = useRoute().params as Params;

  useEffect(() => {
    TrackPlayer.destroy();

    const {
      id,
      audio_url: url,
      title,
      author: artist,
      thumb_image_url: artwork,
    } = audioData;

    TrackPlayer.add({
      id: String(id),
      url,
      title,
      artist,
      artwork,
    }).then(() => TrackPlayer.play());

    dispatch(updatePlayerState('playing'));
  }, [audioData, dispatch]);

  async function handleCenterButtonPress() {
    switch (player) {
      case 'playing':
        await TrackPlayer.pause();
        dispatch(updatePlayerState('paused'));
        break;

      default:
        const { id } = audioData;
        const track = await TrackPlayer.getTrack(String(id));
        if (!track) {
          const {
            audio_url: url,
            title,
            author: artist,
            thumb_image_url: artwork,
          } = audioData;

          await TrackPlayer.add({
            id: String(id),
            url,
            title,
            artist,
            artwork,
          });
        }
        await TrackPlayer.play();
        dispatch(updatePlayerState('playing'));
    }
  }

  async function handleGoBack() {
    const position = await TrackPlayer.getPosition();
    TrackPlayer.seekTo(position - 30 > 0 ? position - 30 : 0);
  }

  async function handleGoForward() {
    const position = await TrackPlayer.getPosition();
    const duration = await TrackPlayer.getDuration();
    TrackPlayer.seekTo(position + 30 > duration ? duration : position + 30);
  }

  return (
    <Container>
      <ThumbImage source={{ uri: audioData.cover_image_url }} />

      <TextContainer>
        <Title>{audioData.title}</Title>
        <Author>by {audioData.author}</Author>
      </TextContainer>

      <ControlsContainer>
        <ProgressBar />
        <GoBackAndForwardButton handlePress={handleGoBack} type="back" />
        <CenterButton onPress={handleCenterButtonPress}>
          <Icon
            name={player === 'playing' ? 'pause' : 'play'}
            size={70}
            color={colors.textWhite}
          />
        </CenterButton>
        <GoBackAndForwardButton handlePress={handleGoForward} type="forward" />
      </ControlsContainer>
    </Container>
  );
};

export default Audio;
