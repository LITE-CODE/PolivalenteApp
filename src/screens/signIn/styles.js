import styled from "styled-components";

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.background};
    margin-top: ${(props) => props.statusBarHeight + 'px'};
    flex: 1;
`