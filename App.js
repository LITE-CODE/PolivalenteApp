import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store/configureStore.js';  // Substitua pelo caminho correto

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Router from './src/routes';
import { ThemeProvider } from 'styled-components';
import { LightTheme } from './src/styles/themes/light';
import { useFonts } from 'expo-font';
import Loading from './src/components/loading';

export default function App() {
  const [loaded] = useFonts({
    'regular': require('./assets/fonts/Inter-Regular.ttf'),
    'medium': require('./assets/fonts/Inter-Medium.ttf'),
    'black': require('./assets/fonts/Inter-Black.ttf'),
    'light': require('./assets/fonts/Inter-Light.ttf'),
    'bold': require('./assets/fonts/Inter-Bold.ttf'),
  });

  if (!loaded) return <Loading text={'carregando...'} />;

  return (
    <Provider store={store}>
      <PersistGate loading={<Loading text={'carregando...'} />} persistor={persistor}>
        <ThemeProvider theme={LightTheme}>
          <View style={styles.container}>
            <Router />
          </View>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
