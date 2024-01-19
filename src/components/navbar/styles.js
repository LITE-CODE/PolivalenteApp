import styled from "styled-components";

import useViewport from "../../hooks/useViewport";
const { vh, vw } = useViewport();

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.primary};
    padding: 10px ${({padding}) => padding};
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    height: ${vh(6)};
    width: 100%;
    margin: 0;

`

export const IconButton = styled.TouchableOpacity`
    background-color: transparent;
    justify-content: center;
    align-items: center;
    border: none;
    height: auto;
    width: auto;
`