import styled from 'styled-components/native';

export const DropdownContainer = styled.View`
    position: relative;
    width: 100%;
    margin: 10px;
`;

export const DropdownButton = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 10px 20px;
    border-radius: 5px;
    height: 50px;
    z-index: 4;
`;

export const DropdownText = styled.Text`
    color: ${({theme}) => theme.colors.secondaryText};
    font-family:  Bold;
`;

export const DropdownOptions = styled.View`
    position: absolute;
    border-radius: 5px;
    width: 100%;
    z-index: 5;
    top: 55px;
    left: 0;
    `;

export const DropdownOptionText = styled.Text`
    color: ${({theme, select}) => select ? theme.colors.background : theme.colors.secondaryText};
    background-color: ${({theme, select}) => select ? theme.colors.primary : theme.colors.secondaryBackground};
    border-radius: 5px;
    font-family:  Bold;
    padding: 10px;
`;
