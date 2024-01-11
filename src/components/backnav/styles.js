import styled from "styled-components";

export const Container = styled.View`
    background-color: ${({theme, type}) => type == 1 ? theme.colors.primary : 'transparent'};
    height: ${({height}) => height};
    margin: ${({margin}) => margin};
    width: ${({width}) => width};
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: 15px ${({padding}) => padding};

`

export const IconButton = styled.TouchableOpacity`
    background-color: transparent;
    justify-content: center;
    align-items: center;
    border: none;
    height: auto;
    width: auto;
`

export const Text = styled.Text`
    color: ${({theme, type }) => type == 1 ? theme.colors.background : theme.colors.text};
    letter-spacing: 1.5px;
    font-family: 'Black';
` 