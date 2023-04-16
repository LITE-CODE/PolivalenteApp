import styled from "styled-components";

import useViewportUnits from "../../hooks/useViewportUnits";
const { vw, vh } = useViewportUnits();

export const Container = styled.SafeAreaView`
       background-color: ${({theme}) => theme.colors.background};;
       margin-top: ${(props) => props.statusBarHeight + 'px'};
       justify-content: space-between;
       width: 100%;
       flex: 1;

`

export const Navbar = styled.View`
       background-color: ${({theme}) => theme.colors.primary};
       height: ${vh(15)};
       padding: 0 5%;
       width: 100%;
`

export const NavbarIcons = styled.View`
       justify-content: space-between;
       flex-direction: row;
       align-items: center;
       height: 50%;
`

export const NavbarSearch = styled.View`
       justify-content: center;
       align-items: center;
       height: 50%;
`

export const InputContainer = styled.View`
       background-color: ${({theme}) => theme.colors.background};
       justify-content: space-between;
       align-items: center;
       border-radius: 20px;
       flex-direction: row;
       padding: 5px 5%;
       height: 60%;
       width: 60%;
`

export const Input = styled.TextInput`
       color: ${({theme}) => theme.colors.secondaryText};
       background-color: transparent;
       padding-left: 10px;
       font-size: 10px;
       height: 100%;
       border: none;
       width: 70%;
       flex: 1;

`

export const Children = styled.View`
       height: ${props => props.keyboardStatus ? vh(85) : vh(70)};
       width: 100%;
`

export const Footer = styled.View`
       background-color: ${({theme}) => theme.colors.secondaryBackground};
       flex-direction: row;
       height: ${vh(10)};
       width: 100%;
`

export const FooterItem = styled.TouchableOpacity`
       justify-content: center;
       align-items: center;
       font-size: 5px;
       flex: 1;
`

export const FooterText = styled.Text`
       font-weight: 500;
       font-size: 10px;
`