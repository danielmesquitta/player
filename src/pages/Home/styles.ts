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

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const HeaderText = styled.Text`
  font-size: 30px;
  color: ${colors.main};
  text-align: center;
  margin-right: 10px;
`;

export const List = styled(ScrollView).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;