import styled from "styled-components";

/* Containers */
export const Container = styled.View`
    justify-content: space-evenly;
    background-color: #FFFFFF;
    align-items: center;
    flex: 1;
`
export const ButtonsContainer = styled.View`
    justify-content: space-around;
    align-items: center;
    height: 120px;
    width: 100%;
`
export const TextContainer = styled.View`
    height: 100px;
    width: 80%;
`

/* Buttons */
export const SignInButton = styled.Pressable`
    justify-content: center;
    align-items: center;
    background: #F6D03C;
    border-radius: 2;
    height: 45px;
    width: 150px;
`

export const SignUpButton = styled.Pressable`
    justify-content: center;
    border-color: #F6D03C;
    align-items: center;
    border-width: 2px;
    border-radius: 2;
    height: 45px;
    width: 150px;
`

/* Texts */
export const SignInText = styled.Text`
    font-family: 'Inter-Medium';
    color: #EEEEEE;
`

export const SignUpText = styled.Text`
    font-family: 'Inter-Medium';
    color: #F6D03C;
`

export const Title = styled.Text`
    font-family: 'Inter-Bold';
    color: #363636;
    font-size: 30;
`

export const Description = styled.Text`
    color: #ACACAC;
    font-size: 15;
`

/* Images */
export const Image = styled.Image`
    height: 280px;
    width: 280px; 
` 