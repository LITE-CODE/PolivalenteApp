import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Router from './src/routes';
import { ThemeProvider } from 'styled-components';
import { LightTheme } from './src/styles/themes/light';

export default function App() {

  return (
    <ThemeProvider theme={LightTheme}>
               <Router/>
    </ThemeProvider>
  );
}