import React from 'react';
import TrackPlayer, { ProgressComponent } from 'react-native-track-player';
import convertSecondsToMinutes from '~/utils/convertSecondsToMinutes';

import { colors } from '~/styles/variables';
import { Container, Time, Bar } from './styles';

class ProgressBar extends ProgressComponent {
  render() {
    return (
      <Container>
        <Time>{convertSecondsToMinutes(this.state.position)}</Time>
        <Bar
          minimumValue={0}
          value={this.state.position}
          onValueChange={value => TrackPlayer.seekTo(value)}
          maximumValue={this.state.duration}
          minimumTrackTintColor="#ddd9"
          maximumTrackTintColor="#bbbe"
          thumbTintColor={colors.main}
        />
        <Time>{convertSecondsToMinutes(this.state.duration)}</Time>
      </Container>
    );
  }
}

export default ProgressBar;
