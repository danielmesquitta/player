import styled from 'styled-components/native';

import { colors } from '~/styles/variables';
import Background from '~/styles/Background';

export const Container = styled(Background)``;

export const ThumbImage = styled.Image.attrs({
  resizeMode: 'center',
})`
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

export const CenterButton = styled.TouchableOpacity`
  margin: 0 30px;
`;
