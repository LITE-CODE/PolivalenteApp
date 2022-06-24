import { View, Text, Image } from 'react-native'
import React from 'react'

import { main } from './styles'

export default function Header(props) {

const {navigation, component, title, description} = props;

  const handlerToComponent = () => {
    if (!navigation && !component) return;
    navigation.navigate(component);

  }


  return (
<View style={main.container}>
    <Text style={main.title}>{title}</Text> 
    <Text style={main.description}>{description}</Text> 
    <Text style={main.link} onPress={handlerToComponent}>EXPANDIR</Text> 
</View>
  )
}