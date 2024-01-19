import styled from "styled-components";

import useViewport from "../../hooks/useViewport";
const { vh, vw} = useViewport()

export const Container = styled.View`
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1;
`

export const Service = styled.TouchableOpacity`
    align-items: center;
    height: ${vw(20)};
    width: ${vw(20)};
    margin: 5px 0;
    `
export const ServiceIcon = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.colors.background};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    height: ${vw(15)};
    width: ${vw(18)};


`
export const ServiceText = styled.Text`
    color: ${({theme}) => theme.colors.secondaryText};
    font-family: 'Medium';
`