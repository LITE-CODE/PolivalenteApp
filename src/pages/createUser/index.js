import { StatusBar } from 'expo-status-bar';
import React, {useEffect,useState, useContext} from 'react';
import { Text as Title, View, ActivityIndicator } from 'react-native';
import { Container, Text, ButtonsContainer, LabelContainer, RadioContainer, Radio, ErrorMessage, RadioText, InputsContainer,Label} from './styles';
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
import axios from 'axios';
import useKeyboardStatus from '../../hooks/useKeyboardStatus';
const CreateUser = () => {
  const { getCurrentUser, getCurrentMenu, getCurrentWarns} = useContext(AuthContext);
  const navigation = useNavigation();
  const [user, setUser] = useState();
  const [error, setError] = useState("");
  const keyboardStatus = useKeyboardStatus();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({id: "", name: "", created: Date.now(), type: "normal", shift: 'manhã', author: null, errorName: false, errorId: false})

const sendData = async () => {
  if (data.name == "") return setData({...data, errorName: true})
  if (data.id == "") return setData({...data, errorId: true})
  setIsLoading(true)
  try {
    var response = await axios.post('https://poli.darknx.repl.co/v1/class/create', {
      id: data.id,
      name: data.name,
      created: data.created,
      shift: data.shift,
      author:user?.id
    })
    setIsLoading(false)
  } catch (error) {
    setIsLoading(false)
    setError(error?.response?.data)
  }
}

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
      <Label>Nome completo do aluno</Label>
        <Input 
          icon={"type"}
          placeholder={"Carlos Eduardo Silva"}
          button={data.name.length > 0 ? 'x-circle' : ''}
          onChangeText={(text) => setData({...data, errorName:false, name: text})}
          onButtonClick={() => setData({...data, name: ""})}
          error={data.errorName}
          value={data.name}
        />
        <Label>Identificador da sala</Label>
        <Input 
          icon={"users"}
          placeholder={"1reg1"}
          button={data.id.length > 0 ? 'x-circle' : ''}
          onChangeText={(text) => setData({...data, errorId:false, id: text})}
          onButtonClick={() => setData({...data, id: ""})}
          error={data.errorId}
          value={data.id}
        />

        <ErrorMessage>{error}</ErrorMessage>
      </InputsContainer>
<LabelContainer>
<Label>Turno do aluno</Label>
</LabelContainer>
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


        <LabelContainer>
<Label>Tipo de conta</Label>
</LabelContainer>
      <RadioContainer>
          <Radio onPress={() => setData({...data, type: "normal"})}>
            <Fontisto  name={data.type == 'normal' ? "radio-btn-active" : "radio-btn-passive"}color={LightTheme.colors.secondaryText} size={20} />
            <RadioText>normal</RadioText>
          </Radio>
          <Radio onPress={() => setData({...data, type: "esportista"})}>
          <Fontisto name={data.type == 'esportista' ? "radio-btn-active" : "radio-btn-passive"}color={LightTheme.colors.secondaryText} size={20} />
            <RadioText>esportista</RadioText>
          </Radio>
          <Radio onPress={() => setData({...data, type: "cap.turma"})}>
          <Fontisto name={data.type == 'cap.turma' ? "radio-btn-active" : "radio-btn-passive"}color={LightTheme.colors.secondaryText} size={20} />
            <RadioText>cap.turma</RadioText>
          </Radio>
        </RadioContainer>
      <ButtonsContainer>
        <Button onPress={sendData} text={isLoading ? <ActivityIndicator color={LightTheme.colors.background} size={25}/> : 'Cadastrar Aluno'}/>
        <Button onPress={() => setData({id: "", name: "", create: Date.now(), shift: 'manhã', author: null, error: false})}type={2} text={"Limpar campos"} />
      </ButtonsContainer>
    
      </Container>
    </DashboardLayout>
  )
}

export default CreateUser