import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors } from '../../styles/variables';

export const Container = styled.View`
  flex: 1;
  position: relative;
`;

export const ThumbImage = styled.Image.attrs({
  resizeMode: 'center',
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  border-radius: 5px;
`;

export const TextContainer = styled.View`
  position: absolute;
  bottom: 200px;
  width: 100%;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${colors.textWhite};
  text-shadow: 0 0 5px black;
  font-size: 20px;
  width: 280px;
  text-align: center;
`;

export const Author = styled.Text`
  color: ${colors.textGray};
  text-shadow: 0 0 5px black;
  font-size: 16px;
  width: 280px;
  text-align: center;
`;

export const ControlsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;
`;

export const GoBackAndForwardButton = styled(TouchableOpacity)`
  position: relative;
`;

export const GoBackIcon = styled(Icon).attrs({
  name: 'refresh-outline',
  size: 50,
  color: colors.textWhite,
})`
  transform: scale(-1, 1);
`;

export const GoBackAndForwardButtonText = styled.Text`
  color: ${colors.textWhite};
  position: absolute;
  font-size: 13px;
  width: 100%;
  height: 100%;
  text-align: center;
  top: 20px;
`;

export const CenterButton = styled(TouchableOpacity)`
  margin: 0 30px;
`;

export const GoForwardIcon = styled(Icon).attrs({
  name: 'refresh-outline',
  size: 50,
  color: colors.textWhite,
})``;
