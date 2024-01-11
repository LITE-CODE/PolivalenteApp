// InitialPage.js
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import image from '../../../assets/imgs/initial-login.png'
import { Container, Image, TitleContainer, Title, Description } from './styles';

const InitialPage = () => {

  return (
    <Container>
      <Image source={image}></Image>
      <TitleContainer>
          <Title>Olá!</Title>
          <Description>Bem-vindo  ao App Polivalente, aqui você vai encontrar tudo sobre a escola, de forma moderna e incrível!</Description>
      </TitleContainer>
    </Container>
  );
};

export default InitialPage;
