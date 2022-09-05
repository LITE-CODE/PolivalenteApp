import styled from 'styled-components';


export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  justify-content: center;
  flex: 1;
  align-items: center;
`

export const Name = styled.Text`
 color: ${({theme}) => theme.colors.text};
`



