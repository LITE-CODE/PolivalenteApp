import styled from "styled-components";


export const Container = styled.View`
    background-color: #EEEEEE;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-color: transparent;
    border-bottom-width: 1.5px;
    border-bottom-color: ${props => (!props.focus ? '#F6D03C': '#EEEEEE') };
    width: 70%;
    height: 45px;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
`
export const Input = styled.TextInput`
 width: 65%;
 padding-left: 10;
`
