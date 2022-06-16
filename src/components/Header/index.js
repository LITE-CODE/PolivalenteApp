import { View, Text, Image } from 'react-native'
import React from 'react'

import { main } from './styles'

export default function Header(props) {

  const handlerToDashboard = () => {
    console.log('handle')
    const navigation = props.navigation;
    if (!navigation) return;
    navigation.navigate('Dashboard');

  }


  return (
<View 
style={main.container}
onPres
>
    
      <Image
      onPress={handlerToDashboard}
      source={require("../../assets/imgs/logo100px.png")}
      style={main.logo}
      />

      <Text style={main.text} >POLIVALENTE</Text>
</View>
  )
}