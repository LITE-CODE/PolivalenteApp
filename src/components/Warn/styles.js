import styled from "styled-components";

import useViewport from "../../hooks/useViewport";
const { vh, vw} = useViewport()

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.background};
    justify-content: space-between;
    min-height: ${vh(15)};
    border-radius: 5px;
    padding: 10px 20px;
    margin: 5px 0;
    height: auto;
    width: 100%;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-family: Bold;
    font-size: 20px;
`;
export const Description = styled.Text`
    color: ${({theme}) => theme.colors.secondaryText};
    font-family: Medium;
`;
export const Date = styled.Text`
    color: ${({theme}) => theme.colors.secondaryText};
    font-family: Regular;
    margin-left: 10px;
`;
export const TitleContainer = styled.View`
   justify-content: start;
   flex-direction: row;
`;
export const Content = styled.View`
   justify-content: start;
   flex-direction: column;
`;
export const FooterContainer = styled.View`
   justify-content: space-between;
   flex-direction: row;
   margin-top: 15px;
`;
export const DateContainer = styled.View`
   justify-content: start;
   align-items: center;
   flex-direction: row;
   width: auto;
   width: auto;
`;
export const Type = styled.Text`
    background-color: ${({theme}) => theme.colors.secondaryText};
    color: ${({theme}) => theme.colors.background};
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    text-align: center;
    margin: 0 10px;
    height: auto;
    width: auto;
`
export const OpenButton = styled.TouchableOpacity`

`
export const OpenText = styled.Text`
    color: ${({theme}) => theme.colors.primary};
`