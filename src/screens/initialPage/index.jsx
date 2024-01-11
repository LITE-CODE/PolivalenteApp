import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import image from '../../../assets/imgs/initial-login.png'
import { Container, Image, TitleContainer, Title, Description } from './styles';
import Button from '../../components/button';


const InitialPage = () => {

  return (
    <Container>
      <Image source={image}></Image>
      <TitleContainer>
          <Title>Olá!</Title>
          <Description>Bem-vindo ao App Polivalente, aqui você vai encontrar tudo sobre a escola, de forma moderna e incrível!</Description>
          <Button text='ENTRAR' type={1}/>
          <Button text='CADASTRAR' type={2}/>
      </TitleContainer>
    </Container>
  );
};

export default InitialPage;
