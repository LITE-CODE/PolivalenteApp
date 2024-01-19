
import { useDispatch, useSelector } from 'react-redux';
import Constants from 'expo-constants';
import React, {useState} from 'react';

import { Container, TitleContainer, Title, Description } from './styles';
import Layout from '../../components/layout';

const Main = () => {
  const user = useSelector((state) => state.user);

  return (
      <Layout Layout>
          <TitleContainer>
              <Title>Bem-vindo de volta!</Title>
              <Description>{user.name}</Description>
          </TitleContainer>
      </Layout>
  );
};

export default Main;