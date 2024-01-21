import styled from "styled-components";

import useViewportUnits from '../../hooks/useViewport';
const {vh, vw} = useViewportUnits();

export const OptionsContainer = styled.View`
    justify-content: space-between;
    background-color: ${({theme}) => theme.colors.background};
    flex-direction: row;
    border-radius: 5px;
    margin: 10px auto;
    height: ${vh(5)};
    width: ${vw(75)};
    `

export const OptionButton = styled.TouchableOpacity`
    background-color: ${({theme, select}) => select ? theme.colors.primary : 'transparent'};
    justify-content: center;
    border-radius: 5px;
    align-items: center;
    height: ${vh(5)};
    width: ${vw(15)};
    `
export const OptionText = styled.Text`
    color: ${({theme, select}) => select ? theme.colors.background : theme.colors.secondaryText };
    font-family: Bold;
    
`