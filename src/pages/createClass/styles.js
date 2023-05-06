import styled, { ThemeConsumer } from "styled-components";

import useViewportUnits from "../../hooks/useViewportUnits";
const { vw, vh } = useViewportUnits();
export const Container = styled.View`

flex: 1;
flex-direction: column;
       justify-content: space-evenly;
       align-items: center;
       width: 100%;
 
       height: ${vh(70)};
`
export const InputsContainer = styled.View`
width: 100%;
height: auto;
`
export const Text = styled.Text`
       font-size: 10px;
       color: #363636;
      
`
export const ButtonsContainer = styled.View`
       flex-direction: row;
       width: 100%;
       height: auto;
       justify-content: space-between;
`

export const RadioContainer = styled.View`
       flex-direction: column;
       justify-content: space-around;
       align-items: flex-start;
       width: 100%;
       height: auto;
`
export const RadioText = styled.Text`
       padding-left: 10px;
       color: ${({theme}) => theme.colors.secondaryText};
`

export const Radio = styled.TouchableOpacity`
  flex-direction: row;
  width: 20%;
  padding: 5px 0 ;


  align-items: center;
  justify-content: flex-start;
`