import { View, Text, FlatList, ActivityIndicator, TextInput, TouchableOpacity, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import { StyleSheet } from 'react-native';
import Header from '../../../components/Header';
import UserCicle from '../../../components/userCircle'

import { main, list, input } from './styles';
import sendImage from '../../../assets/imgs/send.png'
import { getSchoolWarns } from '../../../services/resources/school';

export default function AvisosGerais({navigation}) {

  
  const [data, setData] = useState([])
  const [warnsAmount, setWarnsAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(false)
  
  const loadRepositories = async () => {
    if (loading) return;
    setLoading(true);
    const response = await getSchoolWarns(warnsAmount);
    if (response?.error) setData([]);
    response = response.data.warns;
      setData([...data, response.warns])
      setWarnsAmount(response.end)
      setLoading(false)
      setInitialLoading(true)
    }
  useEffect(() => {
  
      if (data.length == 0){
        console.log('load')
        loadRepositories()}
  },[])

const renderItem = ({ item }) => {
console.log(item)
  return (
    <View style={styles.listItem}>
      <Text>{item.text}</Text>
    </View>
  );}

if (!initialLoading){
return (
  <View>
  <Text>Carregando...</Text>
</View>
)
}

return (
<>
<Header/>
<FlatList
      style={{ marginTop: 30 }}
      contentContainerStyle={styles.list}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id ? item.id : 0}
      onEndReached={loadRepositories}
      onEndReachedThreshold={0.1}
    />
</>
)


}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
  },

  listItem: {
    backgroundColor: '#EEE',
    marginTop: 20,
    padding: 30,
  },
});


/*
const formatDate = (milliseconds) => {
  var months = ['jan.','fev.',' mar.','abr.','maio','jun.','jul.','ago.','set.','out.','nov.','dez.'];
  var getDate = new Date(milliseconds);
  return `${getDate.getDate()} de ${ months[getDate.getMonth()]}`;
}

  <View style={main.listItem}>
    <View  style={list.container}>
     <UserCicle name={item.id}/>
     <View>
      <Text style={list.title}>{item.id}</Text>
      <Text  style={list.date} >{formatDate(item.date)}</Text>
     </View>

    </View>
    <View  style={list.textContainer}>
      <Text  style={list.description}>{item.text}</Text>
    </View>
  </View>
*/