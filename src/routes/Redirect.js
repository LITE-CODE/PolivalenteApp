
import React, {useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text } from 'react-native';



export default function Redirect({navigation}) {



    useEffect( () => {
      checkUser()
    }, []);
  
    const checkUser = async () => {
      const pushUser =  await AsyncStorage.getItem('user')


      if (pushUser){
        navigation.navigate('Dashboard')
      }
    }

    navigation.navigate('SignIn')

return (<View>

<Text>Carregando...</Text>
</View>
)
}