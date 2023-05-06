import styled from "styled-components";


export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    height: 50px;
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-width: 2.5px;
    flex-direction: row;
    padding: 5px 10px;
    align-items: center;
    margin: 5px 0;
    border-bottom-color: ${({theme, focus}) => focus ? theme.colors.primary : '#DDDDDD'};

    ${props => props?.error && `
        background-color: #FEBBBB;
        border-bottom-color: red;
    `}
     ${props => props?.border && `
        border-radius: ${props?.border};
    `}

    
`

export const InputContainer = styled.TextInput`
flex: 1;
margin: 0 10px; 
`