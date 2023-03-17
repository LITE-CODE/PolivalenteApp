import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Container, Text} from './styles';

const Settings = () => {
  return (
    <Container>
      <StatusBar backgroundColor={"#F6D03C"} barStyle="light-content"></StatusBar>
      <Text>Settings</Text>
    </Container>
  )
}

export default Settings