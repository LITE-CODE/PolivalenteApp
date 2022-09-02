import { ThemeProvider } from 'styled-components';
import { StatusBar, View, Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Routes from './src/routes';
import React from 'react';

import { Container } from './src/styles/themes/globalStyles';
import theme from './src/styles/themes/LightTheme';


export default function App()  {

  const [fontsLoaded] = useFonts({

    'Inter-Black': require('./src/assets/fonts/Inter-Black.ttf'),
    'Inter-Bold': require('./src/assets/fonts/Inter-Bold.ttf'),
    'Inter-Medium': require('./src/assets/fonts/Inter-Medium.ttf'),
    'Inter-Light': require('./src/assets/fonts/Inter-Light.ttf'),

  })
  if (!fontsLoaded) return <AppLoading />;

/*
  const { theme } = useTheme();
  if (!theme) return <AppLoading />;
*/


  return (

<ThemeProvider theme={{theme}}>
    <Container>
      <StatusBar backgroundColor={"#F6D03C"} barStyle="light-content"></StatusBar>
      <Routes/>
    </Container>
</ThemeProvider>

  );

}
