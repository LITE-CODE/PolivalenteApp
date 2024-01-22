import styled from "styled-components";

import useViewportUnits from '../../hooks/useViewport';
const {vh, vw} = useViewportUnits();

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.background};
    margin-top: ${(props) => props.statusBarHeight + 'px'};
    flex: 1;
    `

export const Content = styled.View`
    align-items: center;
    padding: 5%;
    flex: 1;
`

export const Text = styled.Text`
    color: ${({theme}) => theme.colors.secondaryText};
    font-family: Medium;
    margin: ${vh(7)} 0;
    width: 100%;
`