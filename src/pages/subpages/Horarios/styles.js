import styled from 'styled-components'
import {  StyleSheet } from 'react-native'


export const Container = styled.View`
   background-color: #ffffff;
  align-items: center;
justify-content: space-evenly;
  flex: 1;
`;

export const Text = styled.Text`
 color: #363636;
`

export const LoginButton = styled.Pressable`
  justify-content: center;
  align-items: center;
  background: #f6d03c;
  border-radius: 4px;
  height: 45px;
  width: 150px;
`;

export const LoginText = styled.Text`
  font-family: "Inter-Medium";
  color: #eeeeee;
`;

