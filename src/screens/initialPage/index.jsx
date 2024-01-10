import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/actions/user.js'; // Certifique-se de importar sua ação correta

const InitialPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [inputValue, setInputValue] = useState('');

  const handleSaveToRedux = () => {
    // Despacha a ação setUser com o valor do input
    dispatch(setUser(inputValue));
  };

  return (
    <View style={styles.container}>
      <Text>Initial page</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite algo..."
        onChangeText={(text) => setInputValue(text)}
        value={inputValue}
      />
      <Button title="Salvar no Redux" onPress={handleSaveToRedux} />
      <Text>Valor no Redux: {user && typeof user === 'object' ? JSON.stringify(user) : user}</Text>

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
