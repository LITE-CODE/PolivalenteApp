import Constants from 'expo-constants';
import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

import initialLoginImage from '../../assets/imgs/initial-login.png';
import { Container, ImageContainer, ButtonsContainer, Image, TextContainer, Title, Description} from './styles';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

  
const InitialLoginPage = () => {
  const navigation = useNavigation()
  const changePage = (page) => navigation.navigate(page);
  return (
    <Container statusBarHeight={Constants.statusBarHeight}>
       <StatusBar backgroundColor={"#F6D03C"} barStyle="light-content"></StatusBar>
        <ImageContainer>
         <Image source={initialLoginImage}/>
        </ImageContainer>
        <TextContainer>
            <Title>Hello!</Title>
            <Description>Bem-vindo ao app polivalente! Aqui você tem tudo sobre a escola, de forma moderna e incrível!</Description>
        </TextContainer>
       <ButtonsContainer>
            <Button type={1} text={"LOGIN"} onPress={() => changePage('Signin')}/>
            <Button type={2} text={"CADASTRAR"} onPress={() => changePage('Signup')}/>
       </ButtonsContainer>
    </Container>
  )
}

export default InitialLoginPage