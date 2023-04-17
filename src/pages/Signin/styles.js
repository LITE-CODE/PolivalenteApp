import styled from "styled-components";

import useViewportUnits from "../../hooks/useViewportUnits";
const {vh, vw} = useViewportUnits();

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.background}; 
    margin-top: ${(props) => props.statusBarHeight + 'px'};
    width: 100%;
    padding: 5%;
    flex: 1;
    justify-content: space-between;
`

export const ButtonsContainer = styled.View`
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: ${vh(25)};

`

export const TextContainer = styled.View`
    justify-content: center;
    flex-direction: column;
    height: ${vh(15)};
`

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-family: 'Inter-Bold';
    font-size: 30px;
`

export const Description = styled.Text`
    color: ${({theme}) => theme.colors.secondaryText};
    font-size: 15px;
`

export const BackContainer = styled.View`
    align-items: flex-start;
    justify-content: center;
    height: ${vh(5)};
    width: 100%;
`

export const InputContainer = styled.View`
    width: 100%;
    height: ${vh(50)};
    flex-direction: column;

    justify-content: center;
`

export const Label = styled.Text`
  margin-bottom: 2px;
  color: ${({theme}) => theme.colors.secondaryText};
  font-size: 12px;
`;

export const LabelContainer = styled.View`
width: 70%;
margin: 0 15%;
`