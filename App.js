import { StatusBar, View, Text } from 'react-native';
import { ThemeProvider } from 'styled-components';
import React, { useState, useEffect} from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Routes from './src/routes';

import { Container } from './src/styles/themes/globalStyles';
import { AuthProvider } from './src/contexts/AuthContext';
import {LightTheme} from './src/styles/themes/LightTheme';
import { useTheme } from './src/hooks/useTheme';


export default function App()  {
  
  const load = useTheme();
  const [theme, setTheme] = useState(LightTheme);

  useEffect(() => {
    if (load?.theme) setTheme(load.theme);
  }, [])

  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./src/assets/fonts/Inter-Black.ttf'),
    'Inter-Bold': require('./src/assets/fonts/Inter-Bold.ttf'),
    'Inter-Medium': require('./src/assets/fonts/Inter-Medium.ttf'),
    'Inter-Light': require('./src/assets/fonts/Inter-Light.ttf'),
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Container>
            <StatusBar backgroundColor={"#F6D03C"} barStyle="light-content"></StatusBar>
            <Routes/>
          </Container>
        </AuthProvider>
      </ThemeProvider>
         );

}
