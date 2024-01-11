import styled from "styled-components";

import useViewportUnits from './../../hooks/useViewport';
const {vh, vw} = useViewportUnits();

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.background};
    justify-content: space-around;
    align-items: center;
    padding: 10%;
    flex: 1;
    `
export const Image = styled.Image`
    height: ${vh(40)};
    width: ${vw(60)};
`

export const TitleContainer = styled.View`
    align-items: start;
    height: auto;
    margin: 20px 0;
` 

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-family: 'Black';
    font-size: 30px;
    `

export const Description = styled.Text`
    color: ${({theme}) => theme.colors.secondaryText};
    font-size: 15px;
`

export const ButtonsContainer = styled.View`
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100%;
`