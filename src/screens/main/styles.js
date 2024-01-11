import styled from "styled-components";

import useViewport from "../../hooks/useViewport";
const { vh, vw} = useViewport()
export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.background};
    margin-top: ${(props) => props.statusBarHeight + 'px'};
    padding: 0 7%;
    flex: 1;
`

export const TitleContainer = styled.View`
    align-items: start;
    margin: 20px 0;
    height: auto;
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

export const InputContainer = styled.View`
    justify-content: center;
    align-items: center;
    height: ${vh(50)};
    width: 100%;
`