import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Container, Text} from './styles';

const News = () => {
  return (
    <Container>
      <StatusBar backgroundColor={"#F6D03C"} barStyle="light-content"></StatusBar>
      <Text>News</Text>
    </Container>
  )
}

export default News