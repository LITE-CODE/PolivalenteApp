
import { useDispatch, useSelector } from 'react-redux';
import Constants from 'expo-constants';
import React, {useState} from 'react';

import { Container, TitleContainer, Title, Description } from './styles';

const Main = () => {
  const user = useSelector((state) => state.user);

  return (
      <Container  statusBarHeight={Constants.statusBarHeight}>
          <TitleContainer>
              <Title>Bem-vindo de volta!</Title>
              <Description>{user.name}</Description>
          </TitleContainer>
      </Container>
  );
};

export default Main;