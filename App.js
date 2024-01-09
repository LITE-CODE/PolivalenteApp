import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Router from './src/routes';
import { ThemeProvider } from 'styled-components';
import { LightTheme } from './src/styles/themes/light';
import { useFonts } from 'expo-font';

export default function App() {

  const [loaded] = useFonts({
    'regular': require('./assets/fonts/Inter-Regular.ttf'),
    'medium': require('./assets/fonts/Inter-Medium.ttf'),
    'black': require('./assets/fonts/Inter-Black.ttf'),
    'light': require('./assets/fonts/Inter-Light.ttf'),
    'bold': require('./assets/fonts/Inter-Bold.ttf'),
  });

  if (!loaded) return <View><Text>carregando fonte...</Text></View>

  return (
    <ThemeProvider theme={LightTheme}>
               <Router/>
    </ThemeProvider>
  );
}