import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import Constants from 'expo-constants';

import { Container, Content, ValueContainer, ValueText, Label } from './styles';
import Backnav from '../../components/backnav';
import appJson from '../../../app.json';
import Button from '../../components/button';


const Classe = () => {

  const classe = useSelector((state) => state.class);
  const { navigate } = useNavigation()

  const handleLogout = async () => {
    const classe = useSelector((state) => state.class);
    navigate('InitialPage')
  }
  
  return (
    <Container statusBarHeight={Constants.statusBarHeight}>
      <Backnav text='CONFIGURAÇÕES'/>
      <Content>
        <Label>Versão do aplicativo</Label>
        <ValueContainer>
          <ValueText>{appJson.expo?.version}</ValueText>
        </ValueContainer>

        <Label>Tema</Label>
        <ValueContainer>
          <ValueText>LIGHT</ValueText>
        </ValueContainer>

        <Button text={'DESLOGAR'} onPress={handleLogout}/>

      </Content>
    </Container>
  );
  
};

export default Classe;
