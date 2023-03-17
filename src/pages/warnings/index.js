import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Container, Text} from './styles';

const Warnings = () => {
  return (
    <Container>
      <StatusBar backgroundColor={"#F6D03C"} barStyle="light-content"></StatusBar>
      <Text>Warnings</Text>
    </Container>
  )
}

export default Warnings