import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Container, Text} from './styles';

const Calendar = () => {
  return (
    <Container>
      <StatusBar backgroundColor={"#F6D03C"} barStyle="light-content"></StatusBar>
      <Text>Calendar</Text>
    </Container>
  )
}

export default Calendar