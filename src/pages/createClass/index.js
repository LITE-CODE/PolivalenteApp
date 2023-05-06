import { StatusBar } from 'expo-status-bar';
import React, {useEffect,useState, useContext} from 'react';
import { Text as Title, View } from 'react-native';
import { Container, Text, ButtonsContainer, RadioContainer, Radio, RadioText, InputsContainer} from './styles';
import Button from '../../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Fontisto from 'react-native-vector-icons/Fontisto'
import { useNavigation } from '@react-navigation/native';
import storage from '../../utils/storage';
import DashboardLayout from '../../components/dashboardLayout';
import Loading from '../loading';
import { AuthContext } from '../../contexts/AuthContext';
import Input from '../../components/Input';
import { LightTheme } from '../../styles/themes/LightTheme';

const CreateClass = () => {
  const { getCurrentUser, getCurrentMenu, getCurrentWarns} = useContext(AuthContext);
  const navigation = useNavigation();
  const [user, setUser] = useState();
  const [data, setData] = useState({id: "", name: "", create: Date.now(), shift: 'manhã', author: null, error: false})


useEffect(() => {
  const fetchData = async () => {

    const userData = await getCurrentUser();
    if (userData.error == 'not JWT token') return navigation.reset({
      index: 0,
      routes: [{ name: 'InitialLoginPage' }],
    });
    setUser(userData);

  };
  fetchData();
}, []);
if (!user) return <Loading text={"carregando dados..."}/>


  return (
    <DashboardLayout>
     
      <Container>
      <InputsContainer>
        <Input 
          icon={"type"}
          placeholder={"Nome da turma"}
          button={data.name.length > 0 ? 'x-circle' : ''}
          onChangeText={(text) => setData({...data, error:false, name: text})}
          onButtonClick={() => setData({...data, name: ""})}
          error={data.error}
          value={data.name}
        />
        <Input 
          icon={"paperclip"}
          placeholder={"Identificador"}
          button={data.id.length > 0 ? 'x-circle' : ''}
          onChangeText={(text) => setData({...data, error:false, id: text})}
          onButtonClick={() => setData({...data, id: ""})}
          error={data.error}
          value={data.id}
        />
      </InputsContainer>
      <RadioContainer>
          <Radio onPress={() => setData({...data, shift: "manhã"})}>
            <Fontisto  name={data.shift == 'manhã' ? "radio-btn-active" : "radio-btn-passive"}color={LightTheme.colors.secondaryText} size={20} />
            <RadioText>manhã</RadioText>
          </Radio>
          <Radio onPress={() => setData({...data, shift: "tarde"})}>
          <Fontisto name={data.shift == 'tarde' ? "radio-btn-active" : "radio-btn-passive"}color={LightTheme.colors.secondaryText} size={20} />
            <RadioText>tarde</RadioText>
          </Radio>
          <Radio onPress={() => setData({...data, shift: "noite"})}>
          <Fontisto name={data.shift == 'noite' ? "radio-btn-active" : "radio-btn-passive"}color={LightTheme.colors.secondaryText} size={20} />
            <RadioText>noite</RadioText>
          </Radio>
        </RadioContainer>
      <ButtonsContainer>
        <Button text={"Criar turma"}/>
        <Button onPress={() => setData({id: "", name: "", create: Date.now(), shift: 'manhã', author: null, error: false})}type={2} text={"Limpar campos"} />
      </ButtonsContainer>
      </Container>
    </DashboardLayout>
  )
}

export default CreateClass