import { View, Text, FlatList, ScrollView, TextInput,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'

import Header from '../../../components/Header';
import { main,flat,observation,information } from './styles';

import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';




export default function Avaliação() {

  const [revel, setRevel] = useState({item:null,focus:false,error:false,value:null, starts:0});
  const [infoStatus,setInfoStatus] = useState(false)
  const  teachers = {
    "português": "Fabiana",
    "matematica":"Larrissa",
    "fisica":"Luis",
    "geografia":"antonio",
    "inglês":"isabella"
}

const renderStarts = (n, item) => {

  var transformStar = (number) => {
      setRevel({item:item,focus:false,error:false,value:null, starts:number})
  }

var component=[];
  for (let i=1; i<=5; i++){

    component.push(
      <View style={{marginHorizontal:1}}>
        <Text  >
       { n<i ? <Ionicons onPress={() => transformStar(i)}  name={'md-star-outline'} size={25} color="#555555" /> : <Ionicons name={'md-star-sharp'} onPress={() => transformStar(i)} size={25} color="#F8DC6D" />}
    </Text>
      </View>
     )
  }

 return  component.map(x=>x)
 
}


const renderItem = ({item}) => {

  const text = item?.key.toLowerCase().replace(/(\s|^)\w/g, m => m.toUpperCase())
  
  return (
  
  <View style={flat.container}>
         <Text style={flat.title}>{text}</Text>
    <View style={flat.one}>
 
      <Text style={main.text}>Nota:</Text>
      <View style={flat.starts}>{renderStarts(revel.item == item.key ? revel.starts : 0, item.key)}</View>
    </View>

    <View style={flat.one}>
      

        <Text style={main.text}>Observação:</Text>
<TextInput
    style={[
      observation.container,
      revel.error ? observation.error:'',
      revel.focus && revel.item == item.key ? observation.focus:'',
     ]}
    
     onChangeText={text => setRevel({item:revel.item,focus:revel.focus,error:false,value:text,starts:revel.starts})} 
     autoCorrect={true}
     onFocus={() => setRevel({item:item.key,focus:true,error:false,value:revel.value,starts:revel.item == item.key ? revel.starts : 0})}
     onBlur={() => setRevel({item:revel.item,focus:false,error:false,value:revel.value,starts:revel.item == item.key ? revel.starts : 0})}
/>

<TouchableOpacity
        style={observation.button}

   
      >
        <Text style={observation.buttonText}>ENVIAR</Text>
      </TouchableOpacity>
   
    </View>

  </View>
)}

const render = () => {

  

var data = Object.entries(teachers).map(([key,value]) => ({key,value}))


  return (
    <FlatList
    data={data}
    contentContainerStyle={main.flatlist}
    renderItem={renderItem}
    keyExtractor={item=> item.id}
  />
  )
 

   
}
  return (
    <View>
      <Header/>
      
<ScrollView>
<TouchableOpacity onPress={()=> setInfoStatus(!infoStatus)}  style={information.container}>
<Text style={[information.title, infoStatus ? {color: '#F8DC6D'}:'']}>{infoStatus ? <Icon name={'up'} size={12} color="#555555" /> : <Icon name={'down'} size={12} color="#555555" /> } Como as avaliações das materias funcionam</Text>
{infoStatus && (
  <View style={information.textContainer}>
    <Text style={information.text}>As avaliações de alunos, incluindo as avaliações da matéria por estrelas, ajudam os professores a saberem os pontos a melhorar e fazerem as modificações necessárias para que as aulas se tornem mais dinâmicas e ao mesmo tempo proveitosas para ambos. 
Para a classificação geral por estrelas, não usamos um sistema simples. Em vez disso, nosso sistema garante a confidencialidade do aluno, ou seja, os professores não saberão que aluno mandou a avaliação. Esse sistema foi adotado, pois através dele garantiremos que as opiniões sejam sinceras. Além disso, as avaliações são analisadas para que palavras de cunho sexual ou de baixo calão não sejam utilizadas, prezando assim o bem estar do professor da matéria avaliada.</Text>
  </View>
)}
</TouchableOpacity>


<View>
  {render()}
</View>
</ScrollView>
        

    </View>
  )
}



/*
   <Text>
     <Icon name="rocket" size={30} color="#900" />
   </Text>
*/

