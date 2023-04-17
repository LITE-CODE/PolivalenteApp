import Constants from 'expo-constants';
import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Feather from "react-native-vector-icons/Feather";
import { StatusBar } from 'expo-status-bar';
import { LightTheme } from '../../styles/themes/LightTheme';


import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { Container,ButtonsContainer, BackContainer, TextContainer, Title, Description, InputContainer, Label, LabelContainer} from './styles';
import Input from '../../components/Input';
import useKeyboardStatus from '../../hooks/useKeyboardStatus';
import api from '../../utils/api';
const Signin = () => {
  const [email, setEmail] = useState({value:"", error:false})
  const [password, setPassword] = useState({value:"", error:false, view:false})
  const keyboardStatus = useKeyboardStatus()

  const navigation = useNavigation()
  const login = async () => {
    var response = await api
    
  }
  const backPage = () => navigation.goBack();

  return (
    <Container statusBarHeight={Constants.statusBarHeight}>
       <StatusBar backgroundColor={"#F6D03C"} barStyle="light-content"></StatusBar>
       {
        !keyboardStatus && (
            <>
              <BackContainer>
                <Feather name="arrow-left" size={35} color={LightTheme.colors.secondaryText} />
              </BackContainer>
              <TextContainer>
                  <Title>Bem-vindo de volta!</Title>
                  <Description>Faça login para continuar</Description>
              </TextContainer>
            </>
        )
       }
       <InputContainer>
    <LabelContainer>
    <Label>Email</Label>
        <Input
          onChangeText={(text) => setEmail({...email, error:false, value: text})}
          onButtonClick={() => setEmail({...email, value: ""})}
          button={email.value.length > 0 ? 'x-circle' : ''}
          placeholder="example@example.com"
          error={email.error}
          value={email.value}
          icon={"mail"}
          />
    </LabelContainer>
       <LabelContainer>
       <Label>Senha</Label>
        <Input
          onChangeText={(text) => setPassword({...password, error:false, value: text})}
          onButtonClick={() => setPassword({...password, view: !password.view})}
          button={password.view ? 'eye-off' : 'eye'}
          value={password.value}
          error={password.error}
          view={password.view}
          placeholder="******"
          icon={"lock"}
        />
       </LabelContainer>
       </InputContainer>
        
       {
        !keyboardStatus && (
          <ButtonsContainer>
           <Button type={1} text={"ENTRAR"} onPress={() => login}/>
          </ButtonsContainer>
        )
       }
    </Container>
    )
}

export default Signin