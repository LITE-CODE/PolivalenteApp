import styled from "styled-components";


export const Container = styled.View`
    background-color: #EEEEEE;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-color: transparent;
    border-bottom-width: 1.5px;
    border-bottom-color: ${props => props?.children[1]?.props?.inputFocus ? '#F6D03C': '#DDDDDD'};
    width: 70%;
    height: 45px;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;

    ${props => props?.children[1]?.props?.error && `
        background-color: #FEBBBB;
        border-bottom-color: red;
    `}

`
export const Input = styled.TextInput`
 width: 65%;
 padding-left: 10px;
`

export const TransparentView  = styled.View`
    width: 22px;
    height: 22px;
`

export const Title = styled.Text`
    color: #ACACAC;
    font-size: 12px;
`