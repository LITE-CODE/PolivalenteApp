import styled from "styled-components";

export const Container = styled.View`
     margin-top: ${({statusBarHeight}) => statusBarHeight ? statusBarHeight : 100}px;
     background-color: ${({theme}) => theme.colors.background};
     flex: 1;
`
export const Children = styled.View`
     padding: ${({padding}) => padding};
`