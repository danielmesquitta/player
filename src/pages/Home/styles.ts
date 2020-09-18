import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Background from '~/styles/Background';

import { colors } from '~/styles/variables';
import { IAudioData } from '~/@types/global';

export const Container = styled(Background)``;

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

export const Header = styled.View`
  width: 100%;
  padding: 30px 0 10px;
`;

export const HeaderText = styled.Text`
  font-size: 30px;
  color: ${colors.textWhite};
  text-align: center;
  margin-right: 10px;
`;

export const MainHeader = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
`;

export const SearchContainer = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  width: 85%;
  border-radius: 4px;
  margin: 0 auto 20px;
  background: #0013;
  padding-left: 20px;
`;

export const SearchInput = styled.TextInput`
  width: 100%;
  font-size: 18px;
  margin-left: 10px;
  padding: 12px 20px 12px 0;
  color: #bbb;
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: '#fafafa',
  size: 70,
})`
  flex: 1;
`;

export const List = styled(FlatList as new () => FlatList<IAudioData>).attrs({
  horizontal: true,
})`
  flex: 1;
`;
