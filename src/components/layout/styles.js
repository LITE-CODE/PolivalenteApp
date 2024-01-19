import styled from "styled-components";

export const Container = styled.View`
     background-color: ${({theme}) => theme.colors.background};
     margin-top: ${({statusBarHeight}) => statusBarHeight ? statusBarHeight : 0}px;
     flex: 1;
`