import styled from "styled-components";


export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.background}; 
    margin-top: ${(props) => props.statusBarHeight + 'px'};
    width: 100%;
    padding: 5%;
    flex: 1;
`

export const Image = styled.Image`
    height: 80%;
    width: 80%;
`

export const ButtonsContainer = styled.View`
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 35%;

`
export const ImageContainer = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50%;

`

export const TextContainer = styled.View`
    justify-content: center;
    flex-direction: column;
    height: 15%;
`

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-family: 'Inter-Bold';
    font-size: 30px;
`

export const Description = styled.Text`
    color: ${({theme}) => theme.colors.secondaryText};
    font-size: 15px;
`