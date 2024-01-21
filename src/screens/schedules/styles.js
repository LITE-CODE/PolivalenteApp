import styled from "styled-components";

import useViewportUnits from '../../hooks/useViewport';
const {vh, vw} = useViewportUnits();

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    margin-top: ${(props) => props.statusBarHeight + 'px'};
    flex: 1;
    `

export const Content = styled.View`
    padding: 5%;
    `

export const IconContainer = styled.View`
    justify-content: center;
    align-items: center;
    height: ${vh(65)};
    width: ${vw(15)};
    `   
export const IconButton = styled.TouchableOpacity`
    background-color: transparent;
`   

export const GradeContainer = styled.View`
    justify-content: center;
    align-items: center;
    width: ${vw(60)};
`

export const Grade = styled.View`
    background-color: ${({theme}) => theme.colors.background};
    min-height: ${vh(20)};
    border-radius: 5px;
    width: ${vw(60)};
    padding: 10px;
    height: auto;

`

export const Table = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: ${vh(3)} 0;
`

export const Days = styled.View`
    justify-content: center;
    align-items: center;
    text-align: center;
    height: ${vh(6)};
    margin: 1px;    
`
export const DaysText = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-family: Bold;
`