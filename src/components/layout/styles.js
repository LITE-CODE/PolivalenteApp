import styled from "styled-components";

import useViewport from "../../hooks/useViewport";
const { vh, vw} = useViewport()

export const Container = styled.View`
     margin-top: ${({statusBarHeight}) => statusBarHeight ? statusBarHeight : 100}px;
     background-color: ${({theme}) => theme.colors.secondaryBackground};
     flex: 1;
`
export const Children = styled.View`
     padding: ${({padding}) => padding};
     flex: 1;
`

export const SearchContainer = styled.View`
     background-color: ${({theme}) => theme.colors.primary};
     justify-content: start;
     align-items: center;
     height: ${ vh(7) };
`

export const SearchInputContainer = styled.View`
     background-color: ${({theme}) => theme.colors.background};
     justify-content: space-between;
     align-items: center;
     flex-direction: row;
     border-radius: 10px;
     padding: 5px 20px;
     height: auto;
     width: 60%;
`
export const SearchInput = styled.TextInput`
     border-radius: 10px;
     height: auto;
     width: 80%;
`