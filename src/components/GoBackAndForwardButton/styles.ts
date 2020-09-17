import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors } from '~/styles/variables';

export const Container = styled.TouchableOpacity`
  position: relative;
`;

export const GoBackIcon = styled(Icon).attrs({
  name: 'refresh-outline',
  size: 50,
  color: colors.textWhite,
})`
  transform: scale(-1, 1);
`;

export const GoForwardIcon = styled(Icon).attrs({
  name: 'refresh-outline',
  size: 50,
  color: colors.textWhite,
})``;

export const Text = styled.Text`
  color: ${colors.textWhite};
  position: absolute;
  font-size: 13px;
  width: 100%;
  height: 100%;
  text-align: center;
  top: 20px;
`;
