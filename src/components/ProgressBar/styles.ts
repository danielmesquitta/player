import styled from 'styled-components/native';
import Slider from '@react-native-community/slider';

export const Container = styled.View`
  width: 100%;
  position: absolute;
  top: 15%;
  left: 0;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
`;

export const Time = styled.Text`
  color: #fafafa;
  padding: 0 10px;
`;

export const Bar = styled(Slider)`
  width: 100%;
  flex: 1;
`;
