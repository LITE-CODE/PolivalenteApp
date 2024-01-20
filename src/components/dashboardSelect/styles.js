import styled from "styled-components";

import useViewport from "../../hooks/useViewport";
const { vh, vw} = useViewport()

export const Container = styled.View`
    justify-content: space-between;
    margin-bottom: ${vh(1)};
    margin-top: ${vh(4)};
    flex-direction: row;
    height: auto;
    width: 100%;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-family: Bold;
    `;

export const OpenButton = styled.TouchableOpacity`

`
export const OpenText = styled.Text`
    color: ${({theme}) => theme.colors.primary};
`