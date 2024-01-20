import styled from "styled-components";

import useViewport from "../../hooks/useViewport";
const { vh, vw} = useViewport()

export const OpenButton = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.colors.primary};
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    margin-top: 10px;
    padding: 5px;
    width: 70%;
`
export const OpenText = styled.Text`
    color: ${({theme}) => theme.colors.background};
    font-family: Bold;
`
export const SupportTitle = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-family: Bold;
    font-size: 20px;
`
export const SupoertDescription = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-family: Medium;
`

export const SupportContainer = styled.View`
    border: 2px dashed ${({theme}) => theme.colors.primary};
    background-color: rgba(246, 208, 60, 0.2);
    flex-direction: row;
    margin: ${vh(3)} 0;
    border-radius: 5px;
    height: ${vh(22)};
    padding: 10px;
    width: 100%;
`

export const IconColumn = styled.View`
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 30%;
`
export const SupportColumn = styled.View`
    justify-content: center;
    height: 100%;
    width: 70%;
`

