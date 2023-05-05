import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text as Title } from 'react-native';
import { Container, Text} from './styles';
import Button from '../../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import storage from '../../utils/storage';
const Settings = () => {
const navigation = useNavigation()
  const logout = async () => {
    await AsyncStorage.clear()
    navigation.reset({
      index: 0,
      routes: [{ name: 'InitialLoginPage' }],
    });
  }

  const clean = async () => {
    const { response } = await storage.get('token');
    await AsyncStorage.clear()
    storage.set('token', response)

  }
  return (
    <Container>
      <StatusBar backgroundColor={"#F6D03C"} barStyle="light-content"></StatusBar>
      <Button type={1} text={"Deslogar"} onPress={logout}/>
      <Button type={2} text={"Limpar cache"} onPress={clean}/>
    </Container>
  )
}

export default Settings