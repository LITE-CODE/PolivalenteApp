import { StatusBar, View,Text} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import React from 'react';

import Routes from './src/routes';




export default function App() {

  const [fontsLoaded] = useFonts({

    'Inter-Black': require('./src/assets/fonts/Inter-Black.ttf'),
    'Inter-Bold': require('./src/assets/fonts/Inter-Bold.ttf'),
    'Inter-Medium': require('./src/assets/fonts/Inter-Medium.ttf'),

  })

  if (!fontsLoaded){
    return <AppLoading />;
  }

  return (

<View style={{fontFamily: 'Inter-Medium', height: '100%'}}>
    <StatusBar backgroundColor={"#F6D03C"} barStyle="light-content"></StatusBar>
    <Routes/>
    </View>

  );

}
