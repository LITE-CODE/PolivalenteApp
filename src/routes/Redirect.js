
import React, {useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text } from 'react-native';



export default function Redirect({navigation}) {



    useEffect( () => {
      checkUser()
     // navigation.navigate('SignIn')
    }, []);
  
    const checkUser = async () => {
      const pushUser =  await AsyncStorage.getItem('user')


        navigation.navigate( pushUser?'Dashboard' : 'SignIn')
    
      
    }

   

return (<View>

<Text>Carregando...</Text>
</View>
)
}