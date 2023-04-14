import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';

import useNetworkStatus from './src/hooks/useNetworkStatus.js';
import { AuthProvider } from './src/contexts/AuthContext.js';
import useUserStatus from './src/hooks/useUserStatus';
import Loading from './src/pages/loading';
import styles from './src/styles/index';
import Router from './src/routes';

export default function App() {

  const { isConnected } = useNetworkStatus();
  const { hasUser } = useUserStatus();

  const [loaded] = useFonts({
    'Inter-Medium': require('./src/assets/fonts/Inter-Medium.ttf'),
    'Inter-Black': require('./src/assets/fonts/Inter-Black.ttf'),
    'Inter-Light': require('./src/assets/fonts/Inter-Light.ttf'),
    'Inter-Bold': require('./src/assets/fonts/Inter-Bold.ttf')
  });

  useEffect(() => {
    if (!loaded) {
      return;
    }
   
  }, [loaded]);



  if (!loaded) return <Loading text={"carregando informações..."}/>


  return (
    <ThemeProvider theme={styles.LightTheme}>
        <AuthProvider> 
          <StatusBar  bbackgroundColor={"#F6D03C"} barStyle="light-content"></StatusBar>
            <Router/>
        </AuthProvider>
    </ThemeProvider>

  );
}

