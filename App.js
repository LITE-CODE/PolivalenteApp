import { StatusBar, View,Text} from 'react-native';
import AppLoading from 'expo-app-loading';
import { getDatabase, ref, set, onValue, get, update } from "firebase/database";
import { useFonts } from 'expo-font';
import React from 'react';

import { connectToDatabase } from './src/services/database/connectToDatabase';
import { getUser } from './src/services/database/getUser'
import Routes from './src/routes';




export default  function App()  {

  const [fontsLoaded] = useFonts({

    'Inter-Black': require('./src/assets/fonts/Inter-Black.ttf'),
    'Inter-Bold': require('./src/assets/fonts/Inter-Bold.ttf'),
    'Inter-Medium': require('./src/assets/fonts/Inter-Medium.ttf'),
    'Inter-Light': require('./src/assets/fonts/Inter-Light.ttf'),

  })

  if (!fontsLoaded){
    return <AppLoading />;

  }

const connectDatabase =  connectToDatabase();

if (connectDatabase.status === 'unsuccessful connection'){
  return <AppLoading />;
}


  return (

<View style={{fontFamily: 'Inter-Medium', height: '100%'}}>
    <StatusBar backgroundColor={"#F6D03C"} barStyle="light-content"></StatusBar>
    <Routes/>
    </View>

  );

}
