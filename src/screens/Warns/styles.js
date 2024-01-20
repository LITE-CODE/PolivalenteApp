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