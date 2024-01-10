// InitialPage.js
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/actions/user.js';
import { useEffect } from 'react';
import api from '../../utils/api.js';

const InitialPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [inputValue, setInputValue] = useState(user.name || '');

  const handleSaveToRedux = (data) => {
    // Despacha a ação setUser com os novos dados
    dispatch(setUser({user,  ...data.user}));
  };
  const getUserData = async () => {
      try {
          var response = await api.get('user/get-user');
         handleSaveToRedux(response.data)
          
      } catch (error) {
        //console.log(error)
       console.log('API error:', error.response.data);
      }
  }
  useEffect(() => {

    //getUserData()
  }, [])
  

  return (
    <View style={styles.container}>
      <Text>Initial page</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite algo..."
        onChangeText={(text) => setInputValue(text)}
        value={inputValue}
      />
      <Button title="Salvar no Redux" onPress={getUserData} />
      <Text>Valor no Redux: {user.name}</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default InitialPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
});
