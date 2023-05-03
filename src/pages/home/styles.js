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
export const ItemsContainer = styled.View`
       width: 100%;
       height: auto;
       flex: 1;
`
export const FlatList = styled.FlatList`
       flex: 1;
       height: auto;
       width: 100%;
`

export const Item = styled.View`
       width: 100px;
       height: 100px;
       border-radius: 2px;
       flex-direction: column;
       justify-content: space-between;
       align-items: center;
  
       background-color: ${({theme}) => theme.colors.secondaryBackground};
`

