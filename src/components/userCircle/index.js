import { View, Text, Image } from 'react-native'
import React from 'react'

import { main } from './styles'

export default function Header(props) {

var name = props.name.split(" ");
var letters = name.length == 1 ? name[0].slice(0,1) : name[0].slice(0,1) + name[name.length - 1].slice(0,1);
function generateColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  
  return color;
  
}
  return (
<View style={[main.container, {backgroundColor: generateColor()}]}>
    <Text style={main.text}>{letters}</Text>  
</View>
  )
}