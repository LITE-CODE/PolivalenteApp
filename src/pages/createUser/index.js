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
  const [data, setData] = useState({id: "", name: "", created: Date.now(), type: "aluno", shift: 'manhã', author: null, errorName: false, errorId: false, leader: false, sport: false})

const sendData = async () => {
  if (data.name == "") return setData({...data, errorName: true})
  if (data.id == "") return setData({...data, errorId: true})
  setIsLoading(true)
  try {
    var response = await axios.post('https://poli.darknx.repl.co/v1/user/create', {
      author: user?.id,
      ...data
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
      <Label>Nome completo do usuario</Label>
        <Input 
          icon={"type"}
          placeholder={"Carlos Eduardo Silva"}
          button={data.name.length > 0 ? 'x-circle' : ''}
          onChangeText={(text) => setData({...data, errorName:false, name: text})}
          onButtonClick={() => setData({...data, name: ""})}
          error={data.errorName}
          value={data.name}
        />
        <Label>Identificador(es) da(s) sala(s)</Label>
        <Input 
          icon={"users"}
          placeholder={"1reg1 ou 1reg1,1reg2"}
          button={data.id.length > 0 ? 'x-circle' : ''}
          onChangeText={(text) => setData({...data, errorId:false, id: text})}
          onButtonClick={() => setData({...data, id: ""})}
          error={data.errorId}
          value={data.id}
        />

        <ErrorMessage>{error}</ErrorMessage>
      </InputsContainer>
<LabelContainer>
<Label>Turno do usuario</Label>
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
<Label>Aluno ou Professor ?</Label>
</LabelContainer>
      <RadioContainer>
          <Radio onPress={() => setData({...data, type: "aluno"})}>
            <Fontisto  name={data.type == 'aluno' ? "radio-btn-active" : "radio-btn-passive"}color={LightTheme.colors.secondaryText} size={20} />
            <RadioText>aluno</RadioText>
          </Radio>
          <Radio onPress={() => setData({...data, type: "professor"})}>
          <Fontisto name={data.type == 'professor' ? "radio-btn-active" : "radio-btn-passive"}color={LightTheme.colors.secondaryText} size={20} />
            <RadioText>professor</RadioText>
          </Radio>
         
        </RadioContainer>

      {
        data.type == "aluno" && (
          <>

        <LabelContainer>
<Label>O usuario é um esportista?</Label>
</LabelContainer>
      <RadioContainer>
          <Radio onPress={() => setData({...data, sport: false})}>
            <Fontisto  name={data.sport == false ? "radio-btn-active" : "radio-btn-passive"}color={LightTheme.colors.secondaryText} size={20} />
            <RadioText>não</RadioText>
          </Radio>
          <Radio onPress={() => setData({...data, sport: true})}>
          <Fontisto name={data.sport == true ? "radio-btn-active" : "radio-btn-passive"}color={LightTheme.colors.secondaryText} size={20} />
            <RadioText>sim</RadioText>
          </Radio>
        </RadioContainer>
        <LabelContainer>
<Label>O usuario é um chefe de turma?</Label>
</LabelContainer>
      <RadioContainer>
          <Radio onPress={() => setData({...data, leader: false})}>
            <Fontisto  name={data.leader == false ? "radio-btn-active" : "radio-btn-passive"}color={LightTheme.colors.secondaryText} size={20} />
            <RadioText>não</RadioText>
          </Radio>
          <Radio onPress={() => setData({...data, leader: false})}>
          <Fontisto name={data.leader == true ? "radio-btn-active" : "radio-btn-passive"}color={LightTheme.colors.secondaryText} size={20} />
            <RadioText>sim</RadioText>
          </Radio>
        </RadioContainer>
          </>
        )
      }

      <ButtonsContainer>
        <Button onPress={sendData} text={isLoading ? <ActivityIndicator color={LightTheme.colors.background} size={25}/> : 'Cadastrar Aluno'}/>
        <Button onPress={() => setData({id: "", name: "", create: Date.now(), shift: 'manhã', author: null, error: false})}type={2} text={"Limpar campos"} />
      </ButtonsContainer>
    
      </Container>
    </DashboardLayout>
  )
}

export default CreateUser