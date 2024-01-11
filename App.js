import React, { useEffect, useState, useCallback } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store/configureStore.js';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Router from './src/routes';
import { ThemeProvider } from 'styled-components';
import { LightTheme } from './src/styles/themes/light';
import Loading from './src/components/loading';
import { hideAsync, preventAutoHideAsync} from 'expo-splash-screen';
import * as Font from 'expo-font';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  Inter_900Black,
} from '@expo-google-fonts/inter';

export default function App() {

const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
   //     await preventAutoHideAsync();
        await Font.loadAsync({ 
           'Black': Inter_900Black,
           'Bold': Inter_700Bold,
           'Medium': Inter_500Medium,
           'Regular': Inter_400Regular
         });
      }
      catch(err) {
        console.log(err)
      }
      finally {
        setAppIsReady(true);
      }
    })();
  }, []);


  if (!appIsReady) {
    return <Loading text='fonte não carregada'/>;
  } else {
//     hideAsync()
  }

  return (
    <Provider store={store}>
      <PersistGate loading={<Loading text={'Carregando...'} />} persistor={persistor}>
        <ThemeProvider theme={LightTheme}>
            <StatusBar  backgroundColor={"#F6D03C"} barStyle="light-content" />
            <Router/>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}