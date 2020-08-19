import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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

export const ThumbGradient = styled(LinearGradient).attrs({
  colors: ['#0045', '#000d'],
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0007;
`;

export const TextContainer = styled.View`
  position: absolute;
  bottom: 200px;
  width: 100%;
  text-align: center;
`;

export const Title = styled.Text`
  color: ${colors.textWhite};
  text-shadow: 0 0 10px black;
  font-size: 20px;
`;

export const Author = styled.Text`
  color: ${colors.textWhite};
  text-shadow: 0 0 10px black;
  font-size: 16px;
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

export const StyledTouchableOpacity = styled(TouchableOpacity)`
  margin: 0 30px;
`;
