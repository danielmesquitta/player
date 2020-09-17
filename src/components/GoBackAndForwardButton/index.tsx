import React from 'react';

import { Container, GoBackIcon, GoForwardIcon, Text } from './styles';

interface IProps {
  handlePress: () => void;
  type: 'back' | 'forward';
}

const GoBackAndForwardButton: React.FC<IProps> = ({ handlePress, type }) => {
  return (
    <Container onPress={handlePress}>
      {type === 'back' ? <GoBackIcon /> : <GoForwardIcon />}
      <Text>30</Text>
    </Container>
  );
};

export default GoBackAndForwardButton;
