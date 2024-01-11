import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Container, Image, TitleContainer, Title, Description, ButtonsContainer} from './styles';
import image from '../../../assets/imgs/initial-login.png';
import Button from '../../components/button';

const InitialPage = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Image source={image}></Image>
      <TitleContainer>
          <Title>Olá!</Title>
          <Description>Bem-vindo ao App Polivalente, aqui você vai encontrar tudo sobre a escola, de forma moderna e incrível!</Description>
      </TitleContainer>
      <ButtonsContainer>
          <Button width='100%' text='ENTRAR' type={1} onPress={() => navigate('SignIn')}/>
          <Button width='100%' text='CADASTRAR' type={2} onPress={() => navigate('SignUp')}/>
      </ButtonsContainer>
    </Container>
  );
  
};

export default InitialPage;
