import { View, Text } from 'react-native'
import React, {useEffect} from 'react'

import { main } from './styles'

export default function InformationContainer(props) {



  return (
    <View style={main.container}>
      <Text style={main.text}>{props.value.name}</Text >
      <Text style={main.secondText}>{props.value.class}</Text>
    </View>
  )


}