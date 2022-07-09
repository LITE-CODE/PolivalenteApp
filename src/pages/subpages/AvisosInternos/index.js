import { View, Text, FlatList, ActivityIndicator, TextInput, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'

import Header from '../../../components/Header';
import UserCicle from '../../../components/userCircle'

import { main, list, input } from './styles';
import sendImage from '../../../assets/imgs/send.png'

export default function AvisosGerais({navigation}) {


const user = {
  permissions: []
} 
const [focus, setFocus] = useState(false);
const [error, setError] = useState(false)
const [text,setText] = useState();
const [data, setData] = useState([
  { id: 0, name: 'João Vitor', date: 1657059884299, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget nisl mollis urna fringilla consequat.'},
  { id: 1, name: 'Isabel Luise', date: 1379386800000 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget nisl mollis urna fringilla consequat.'},
  { id: 2, name: 'Jose Vitoriano', date: 1517277600000, description: 'aorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget nisl mollis urna fringilla consequat.'}

])

const [loading, setLoading ] = useState(false);


//formatação de datas
const formatDate = (milliseconds) => {
  var months = ['jan.','fev.',' mar.','abr.','maio','jun.','jul.','ago.','set.','out.','nov.','dez.'];
  var getDate = new Date(milliseconds);
  return `${getDate.getDate()} de ${ months[getDate.getMonth()]}`;
}

//função para fazer request das informações na database
const loadItems = () => {
  setLoading(true)
    setData([...data, ...data])
  setLoading(false)
}

const renderItem = ({ item }) => (
  <View style={main.listItem}>
    <View  style={list.container}>
     <UserCicle name={item.name}/>
     <View>
      <Text style={list.title}>{item.name}</Text>
      <Text  style={list.date} >{formatDate(item.date)}</Text>
     </View>

    </View>
    <View  style={list.textContainer}>
      <Text  style={list.description}>{item.description}</Text>
    </View>
  </View>
);




  return (
    <View style={main.container}>
      <Header navigation={navigation}/>
      <View style={main.line}/>

      <FlatList
        style={{ marginTop: 30, width:'100%'}}
        contentContainerStyle={main.list}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={loadItems}
        onEndReachedThreshold={0.1}
       
      />
 { user?.permissions.find(i=>i=='sendWarn') &&   (
  <View style={input.container}>
    <TextInput 
    
    placeholder='Envie um novo aviso'

    style={[
      input.text,
 
      error ? input.error:'',
      focus ? input.focus:'',
     ]}
    
     onChangeText={text => setText(text)}
  
     autoCorrect={true}
     multiline={true}
     onFocus={() => setFocus(true)}
     onBlur={() => setFocus(false)}
    />
    <TouchableOpacity onPress={() => {

      if (!text) setError(true)
      
    }}>
      <Image  source={sendImage} style={input.image}/>
    </TouchableOpacity>
  </View>
 )
    
    }


    </View>
  )
}