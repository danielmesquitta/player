import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

const Background = styled(LinearGradient).attrs({
  colors: ['#0045', '#000d'],
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0007;
`;

export default Background;
