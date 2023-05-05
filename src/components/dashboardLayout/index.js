import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import { ScrollView, View, Text} from 'react-native';
import Constants from 'expo-constants';
import React from 'react';


import { Container, Navbar, Footer, Children, NavbarIcons, InputContainer, NavbarSearch, Input, FooterItem, FooterText } from './styles';
import useKeyboardStatus from '../../hooks/useKeyboardStatus';
import { LightTheme } from '../../styles/themes/LightTheme';

const NavigationRoutes = [
  { name: 'Calendario', icon:'calendar', route:'Calendar'},
  { name: 'Avisos', icon:'megaphone', route:'Warnings'},
  { name: 'Home', icon:'home', route:'Home'},
  { name: 'Noticias', icon:'news', route:'News'},
  { name: 'Configurações', icon:'settings', library:'Ionicons', route:'Settings'}
];

const DashboardLayout = ({ children, navigationActive }) => {

  const keyboardStatus = useKeyboardStatus();
  const navigation = useNavigation();

  const changeRoute = (x) => navigation.navigate(x);

  return (
  
    <Container statusBarHeight={Constants.statusBarHeight} keyboardShouldPersistTaps='always'>
      <Navbar>
        <NavbarIcons>
          <Entypo name="menu" size={35} color={LightTheme.colors.background} />
          <FontAwesome5 name="user-circle" size={30} color={LightTheme.colors.background} />
        </NavbarIcons>
        <NavbarSearch>
          <InputContainer>
            <FontAwesome5 name="search" size={15} color={LightTheme.colors.primary} />
            <Input
              placeholder='O que você está procurando?'
            />
          </InputContainer>
        </NavbarSearch>
      </Navbar>
      <Children keyboardStatus={keyboardStatus}>
        <ScrollView style={{ flex: 1, width: '100%', padding: '5%'}}>
          {children}
        </ScrollView>
      </Children>
      {
        !keyboardStatus && (
          <Footer>
             {
                NavigationRoutes.map((x, i) => {

                  var color = navigationActive == x.name ? LightTheme.colors.primary : LightTheme.colors.secondaryText
                  return(
                    <FooterItem key={i} onPress={() => changeRoute(x.route)}>
                      {
                      x.library ? <Ionicons name={x.icon} size={35} color={color} /> : <Entypo name={x.icon} size={35} color={color} />
                      }
                      <FooterText style={{color: color}} >{x.name}</FooterText>
                    </FooterItem>
                  )

                })
             }
          </Footer>
        )
      }
    </Container>
  )

}

export default DashboardLayout