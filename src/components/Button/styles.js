import styled from "styled-components";


export const Container = styled.TouchableOpacity`
      background-color: ${({theme, type}) => type == 2? 'transparent' : theme.colors.primary };
      border-color: ${({theme}) => theme.colors.primary };
      margin: ${({margin}) => margin + 'px'} 0;
      justify-content: center;
      align-items: center;
      border-radius: 2px;
      border-width: 2px;
      height: 45px;
      width: 50%;
`

export const Text = styled.Text`
    color: ${({theme, type}) => type == 1? theme.colors.background : theme.colors.primary };
    font-family: 'Inter-Bold';
`