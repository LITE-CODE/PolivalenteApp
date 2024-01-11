import styled from "styled-components";

export const Container = styled.TouchableOpacity`
    background-color: ${({theme, type}) => type == 1 ? theme.colors.primary : 'transparent'};
    border: 2px solid ${({theme}) => theme.colors.primary };
    height: ${({height}) => height};
    margin: ${({margin}) => margin};
    width: ${({width}) => width};
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    padding: 10px 20px;
    color: #000;
`

export const Text = styled.Text`
    color: ${({theme, type }) => type == 1 ? theme.colors.background : theme.colors.primary};
    font-family: 'Bold';
` 