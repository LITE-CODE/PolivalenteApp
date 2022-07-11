import { View, Text, FlatList } from 'react-native'
import React from 'react'

import Header from '../../../components/Header';

import { main, list } from './styles';




export default function Horarios({navigation}) {

  const horarios = {
    "segunda":{
      "07:00-07:50":"matemática",
      "07:50-08:40":"química",
      "08:40-09:30":"português",
      "09:30-09:50":"recreio",
      "09:50-10:40":"ed. física",
      "10:40-11:30":"ed. física"
    },
    "terça":{
      "07:00-07:50":"geografia",
      "07:50-08:40":"historia",
      "08:40-09:30":"filosofia",
      "09:30-09:50":"recreio",
      "09:50-10:40":"física",
      "10:40-11:30":"historia"
    },
    "quarta":{
      "07:00-07:50":"matemática",
      "07:50-08:40":"matemática",
      "08:40-09:30":"inglês",
      "09:30-09:50":"recreio",
      "09:50-10:40":"biologia",
      "10:40-11:30":"biologia"
    },
    "quinta":{
      "07:00-07:50":"geografia",
      "07:50-08:40":"matemática",
      "08:40-09:30":"inglês",
      "09:30-09:50":"recreio",
      "09:50-10:40":"português",
      "10:40-11:30":"física"
    },
    "sexta":{
      "07:00-07:50":"português",
      "07:50-08:40":"química",
      "08:40-09:30":"português",
      "09:30-09:50":"recreio",
      "09:50-10:40":"filosofia",
      "10:40-11:30":"artes"
    },
  }
  var date= ['domingo', 'segunda','terça','quarta','quinta','sexta', 'sabado']
  date = date[new Date(Date.now()).getDay()]
  if (date == 'domingo' || date == 'sabado') date = 'segunda'

  const renderItem = ({item}) => (
    <View style={ item.title ? list.title : list.item}>
      <Text style={ item.title ? list.negriteText : list.text}>{item.valor}</Text>
    </View>
  )

  const render = (day) => {


 var data = Object.entries(horarios[day]).map(([key,value]) => {
return {id:key,
valor:value}
    })
data.unshift({id:'day', valor:day.toUpperCase(), title: true})

    return (
      <FlatList
      data={data}
      contentContainerStyle={[list.coluna, day === date ? list.ativa : '']}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
    )
   

     
  }

  return (
  <View style={main.container} >
    <Header navigation={navigation}/>
   

    <View style={list.container}>



  
                <View style={main.list}>
                  {render('segunda')}
                  {render('terça')}
                  {render('quarta')}
                  {render('quinta')}
                  {render('sexta')}
                </View>
      
    </View>
  </View>
  )
  
}