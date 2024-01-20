import styled from "styled-components";

import useViewportUnits from '../../hooks/useViewport';
const {vh, vw} = useViewportUnits();

export const OptionsContainer = styled.View`
    justify-content: space-between;
    flex-direction: row;
    margin: 10px 0;
    height: ${vh(7)};
    width: 100%;
    `

export const OptionButton = styled.TouchableOpacity`
    background-color: ${({theme, select}) => select ? theme.colors.primary : theme.colors.background};
    border: 1px solid ${({theme}) => theme.colors.primary };
    justify-content: center;
    border-radius: 5px;
    align-items: center;
    height: ${vh(5)};
    width: ${vw(20)};
    `
export const OptionText = styled.Text`
    color: ${({theme, select}) => select ? theme.colors.background : theme.colors.primary };
    
`