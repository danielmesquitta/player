import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { colors } from '../../styles/variables';

export const Container = styled(RectButton)`
  background: ${colors.main};
  flex: 1;
  padding: 20px;
  margin: 20px;
`;
