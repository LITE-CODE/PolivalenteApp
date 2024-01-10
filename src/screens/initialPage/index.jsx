// InitialPage.js
import React, { useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/actions/user.js';
import { getUser } from '../../actions/index.js';

const InitialPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);


  const getUserData = async () => {
      await getUser(dispatch);      
  }
  useEffect(() => {

    //getUserData()
  }, [])
  

  return (
    <View style={styles.container}>
      <Button title="Salvar no Redux" onPress={getUserData} />
      <Text>name: {user.name}</Text>
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
