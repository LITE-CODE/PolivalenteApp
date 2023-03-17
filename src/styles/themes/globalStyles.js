import styled from 'styled-components';

export const Container = styled.View`
font-family: 'Inter-Medium';
flex: auto;
`

export const Name = styled.Text`
font-family: 'Inter-Medium';
color: ${({theme}) => theme.colors.primary};
`