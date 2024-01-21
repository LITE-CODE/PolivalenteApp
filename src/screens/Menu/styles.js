import styled from "styled-components";

import useViewportUnits from '../../hooks/useViewport';
const {vh, vw} = useViewportUnits();

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    margin-top: ${(props) => props.statusBarHeight + 'px'};
    flex: 1;
    `

export const Content = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 5%;
`

export const MenuContainer = styled.View`
    background-color: rgba(246, 208, 60, 0.2);
    border-radius: 5px;
    height: ${vh(30)};
    width: ${vw(40)};
`

export const MenuImage = styled.Image`
    width: ${vw(35)};
    height:${vw(35)};
`

export const MenuText = styled.Text`
    color: ${({theme}) => theme.colors.background};
    text-align: center;
    font-family: Bold;
`
export const MenuContainerImage = styled.View`
    justify-content: center;
    align-items: center;
    height: 80%;
    width: 100%;
`

export const MenuContainerText = styled.View`
    background-color: rgba(246, 208, 60, 1);
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    justify-content: center;
    height: 20%;
    width: 100%;
`

export const Row = styled.View`
     justify-content: space-around;
     flex-direction: row;
     margin: 10px 0;
     height: auto;
     width: 100%;
`