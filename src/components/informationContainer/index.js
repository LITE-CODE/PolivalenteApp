import { View, Text } from 'react-native'
import React from 'react'


import { main } from './styles'

export default function InformationContainer() {
  return (
    <View style={main.container}>
      <Text style={main.text}>João Vitor Dutra de Souza</Text >
      <Text style={main.secondText}>2° reg 2</Text>
    </View>
  )
}