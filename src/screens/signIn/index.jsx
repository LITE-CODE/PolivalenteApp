import React from 'react';
import Constants from 'expo-constants';

import Backnav from '../../components/backnav';
import { Container } from './styles';

const SignIn = () => {
 
  return (
      <Container  statusBarHeight={Constants.statusBarHeight}>
          <Backnav type={2}  text='VOLTAR'/>

      </Container>
  );
};

export default SignIn;