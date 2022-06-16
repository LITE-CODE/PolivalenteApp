import { View, Text, Image } from 'react-native'
import React from 'react'

import InformationContainer from '../../components/informationContainer'
import Header from '../../components/Header/index'
import { main } from './styles' 


export default function Dashboard({navigation}) {

  return (

  <View style={main.container}>
    <Header navigation={navigation}/>

  </View>

  )
  
}