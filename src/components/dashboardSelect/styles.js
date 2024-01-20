import styled from "styled-components";

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    height: auto;
    width: 100%;
    flex: 1;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-family: Bold;
    `;

export const OpenButton = styled.TouchableOpacity`
    color: ${({theme}) => theme.colors.primary};
`