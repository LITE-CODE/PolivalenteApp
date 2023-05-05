import styled from "styled-components";

import useViewportUnits from "../../hooks/useViewportUnits";
const { vw, vh } = useViewportUnits();

export const Container = styled.View`
       background-color: ${({theme}) => theme.colors.background};
       justify-content: center;
       align-items: center;
       flex: 1;
`

export const Text = styled.Text`
       font-size: 10px;
       color: #363636;
      
`
export const ItemText = styled.Text`
       font-size: 13px;
       color: ${({theme}) => theme.colors.text};
       
       font-family: 'Inter-Medium';
       text-align: center;
      
`
export const ItemsContainer = styled.View`
       width: 100%;
       height: auto;
       flex: 1;
`
export const WarnsContainer = styled.View`
width: 100%;
height: auto;
flex: 1;
flex-direction: column;
margin-bottom: 50px;

`
export const WarnFooter = styled.View`
       width: 100%;
       height: auto;
       justify-content: space-between;
       align-items: center;
       flex-direction: row;
`

export const WarnFlatlist = styled.FlatList`
       flex: 1;
       height: auto;
       width: 100%;
`

export const FlatList = styled.FlatList`
flex: 1;
       height: auto;
       width: 100%;
`
export const ExpansiveButton = styled.View`
       flex: 1;
       justify-content: center;
       align-items: center;
       width: 100%;
       height: auto;
`

export const Item = styled.View`
     flex: 1;
     width: 100%;
       height: 100px;
       border-radius: 5px;
       flex-direction: column;
       justify-content: space-between;
       padding: 10px 5px;
       align-items: center;
  
       background-color: ${({theme}) => theme.colors.secondaryBackground};
`
export const Warn = styled.View`
     flex: 1;
     width: 100%;
       min-height: 130px;
       height: auto;
       border-radius: 5px;
       flex-direction: column;
       justify-content: space-between;
       padding: 5%;


  
       background-color: ${({theme}) => theme.colors.secondaryBackground};
`

export const FoodContainer = styled.View`
       
       flex-direction: row;
       justify-content: space-between;
       align-items: center;
       width: 100%;
       height: ${vh(20)};
       border-radius: 5px;
       margin: ${vh(5)} 0;
       background-color: ${({theme}) => theme.colors.secondaryBackground};

`

export const FoodIcon = styled.View`
width: 30%;
       height: 100%;
       justify-content: center;
       align-items: center;
`
export const FoodInformations = styled.View`
       width: 70%;
       height: 100%;
       padding: 5%;
       flex-direction:column;
       justify-content: space-between;
`

export const FoodTitle = styled.Text`
       font-size: 16px;
       color: ${({theme}) => theme.colors.text};
       font-family: 'Inter-Bold';
       margin-bottom: 5%;
 
`
export const FoodText = styled.Text`
       font-size: 12px;
       color: ${({theme}) => theme.colors.secondaryText};

 
`
export const FoodDate = styled.Text`
       font-size: 11px;
       margin-top: 2%;
       color: ${({theme}) => theme.colors.text};
       font-family: 'Inter-Bold';
 
`
export const RedirectText = styled.Text`
       color: ${({theme}) => theme.colors.primary};

`

export const Redirect = styled.TouchableOpacity`
       
`

export const WarnTitleContainer = styled.View`
width: 100%;
height: auto;
justify-content: space-between;
flex-direction: row;
margin-top: 25px;
`
export const WarnRedirect = styled.TouchableOpacity`
       background-color: ${({theme}) => theme.colors.primary};
       padding: 5px;
       border-radius: 2px;
`
export const WarnRedirectText = styled.Text`
font-size: 10px;
color: ${({theme}) => theme.colors.text};
font-family: 'Inter-Bold';
`
