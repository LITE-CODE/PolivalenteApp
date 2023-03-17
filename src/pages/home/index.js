import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Container, Text} from './styles';

const Home = () => {
  return (
    <Container>
      <StatusBar backgroundColor={"#F6D03C"} barStyle="light-content"></StatusBar>
      <Text>Home</Text>
    </Container>
  )
}

export default Home