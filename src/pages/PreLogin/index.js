import React from 'react';


import image from '../../assets/imgs/InitialLoginPage.png'
import { Image, Container, SignInButton, SignInText, ButtonsContainer,SignUpButton, SignUpText, TextContainer, Title, Description} from './styles';

const PreLogin = ({navigation}) => {

    const handleToSignIn = () => navigation.navigate('SignIn')
    const handleToSignUp = () => navigation.navigate('SignUp')
    return (
<Container>
    <Image source={image}/>
    <TextContainer>
        <Title>Hello!</Title>
        <Description>
        Seja bem vindo ao app polivalente, Onde sera postado as principais informações da escola.            
        </Description>
    </TextContainer>
    <ButtonsContainer>
        <SignInButton onPress={handleToSignIn}>
            <SignInText>LOGIN</SignInText>
        </SignInButton>
        <SignUpButton onPress={handleToSignUp}>
            <SignUpText>CADASTRAR</SignUpText>
        </SignUpButton>
    </ButtonsContainer>
</Container>
    )
}

export default PreLogin