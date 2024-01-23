import styled from "styled-components";

import useViewportUnits from '../../hooks/useViewport';
const {vh, vw} = useViewportUnits();

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    margin-top: ${(props) => props.statusBarHeight + 'px'};
    flex: 1;
    `

export const Content = styled.View`
    padding: 5%;
    `

export const Label = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-size: 18px;
    font-family: Bold;
    `
export const ValueText = styled.Text`
    color: ${({theme}) => theme.colors.secondaryText};
    font-family: Medium;
    `

export const ValueContainer = styled.View`
    background-color: ${({theme}) => theme.colors.background};
    flex-direction: column;
    min-height: ${vh(5)};
    margin-bottom: 10px;
    border-radius: 5px;
    margin-top: 5px;
    padding: 10px;
    height: auto;
    width: 100%;
`