import styled from 'styled-components/native';
import { ScrollView } from 'react-native-gesture-handler';

import { colors } from '../../styles/variables';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fafafa;
`;

export const Content = styled.ScrollView`
  flex: 1;
`;

export const Header = styled.Text`
  font-size: 30px;
  color: ${colors.main};
  text-align: center;
  padding: 10px;
`;

export const List = styled(ScrollView).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;
