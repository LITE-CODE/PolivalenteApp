import { View, ScrollView, Text, Linking} from 'react-native'
import React from 'react'

import InformationContainer from '../../components/informationContainer'
import Header from '../../components/Header/index'
import Category from '../../components/Category'
import { main, information, categorys, footer } from './styles' 



export default function Dashboard({navigation}) {

  const openProjectPage = () => {
    Linking.openURL("https://github.com/Projeto-Bonfire")
  }



  return (

 <View  style={main.container}>
  <Header navigation={navigation}/>
   <ScrollView>
    
    <View style={main.line}></View>
    <View style={information.container}>
      <InformationContainer />
    </View>

    <View style={categorys.container}>
     
        <Category
        title='Avisos Gerais'
        description='Veja os avisos gerais da escola'
        navigation={navigation}
        component={'AvisosGerais'}
        />
        <Category
        title='Calendario'
        description='Veja os proximos eventos da escola'
        navigation={navigation}
        component={'Calendario'}
        />
     
        <Category
        title='Avisos Internos'
        description='Avisos referentes a turma'
        navigation={navigation}
        component={'AvisosInternos'}
        />
        <Category
        title='Horarios'
        description='Horarios escolares referentes a turma'
        navigation={navigation}
        component={'Horarios'}
        />
     
      <Category
      title='Avalie uma materia'
      description='Deixe uma nota de acordo com oque aprendeu'
      navigation={navigation}
      component={'Avaliação'}
      />
      <Category
      title='Sugestões'
      description='Deixe uma sugestão ou reclamação'
      navigation={navigation}
      component={'Sugestões'}
      />
      
    </View>
  
    <View style={[main.line, {marginTop: '5%',}]}></View>
    <View style={footer.container}>
<Text style={footer.text}>
  Desenvolvido pela equipe <Text style={footer.link} onPress={openProjectPage}>Bonfire</Text> © 2022
</Text>
    </View>
  </ScrollView>
 </View>

  )
  
}