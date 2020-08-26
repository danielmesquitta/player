import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import { colors } from '~/styles/variables';

export const BlackLinearGradient = styled(LinearGradient).attrs({
  colors: ['#0000', '#000f'],
})`
  flex: 1;
`;

export const Container = styled.View`
  position: relative;
  flex: 1;
  margin: 20px;
  height: 400px;
  width: 300px;
  border-radius: 25px;
  overflow: hidden;
`;

export const ThumbImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const TextContainer = styled.View`
  position: absolute;
  justify-content: flex-end;
  width: 100%;
  height: 150px;
  bottom: 0;
  left: 0;
  padding: 0 70px 20px 30px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.textWhite};
`;

export const Author = styled.Text`
  font-size: 12px;
  color: ${colors.textGray};
`;

export const Bottom = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Tagline = styled.Text`
  color: ${colors.textWhite};
  padding-right: 25px;
`;

export const IconContainer = styled.View`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  border-radius: 32px;
`;
