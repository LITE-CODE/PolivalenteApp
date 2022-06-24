import { View, Text, Image } from 'react-native'
import React from 'react'

import InformationContainer from '../../components/informationContainer'
import Header from '../../components/Header/index'
import Category from '../../components/Category'
import { main, information, categorys } from './styles' 


export default function Dashboard({navigation}) {

  return (

  <View style={main.container}>
    <Header navigation={navigation}/>
    <InformationContainer style={information.container}/>

    <View style={categorys.container}>
      <View style={categorys.double}>
        <Category
        title='Avisos Gerais'
        description='Veja os avisos gerais da escola'
        navigation={navigation}
        component={null}
        />
        <Category
        title='Calendario'
        description='Veja os proximos eventos da escola'
        navigation={navigation}
        component={null}
        />
      </View>
      <View style={categorys.double}>
        <Category
        title='Avisos Internos'
        description='Avisos referentes a turma'
        navigation={navigation}
        component={null}
        />
        <Category
        title='Horarios'
        description='Horarios escolares referentes a turma'
        navigation={navigation}
        component={null}
        />
      </View>
      <View style={categorys.double}>
      <Category
      title='Avalie uma materia'
      description='Deixe uma nota de acordo com oque aprendeu'
      navigation={navigation}
      component={null}
      />
      <Category
      title='Sugestões'
      description='Deixe uma sugestão ou reclamação'
      navigation={navigation}
      component={null}
      />
      </View>
    </View>
  </View>

  )
  
}