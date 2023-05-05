import Constants from 'expo-constants';
import { View, Text, ActivityIndicator} from 'react-native'
import React, { useState, useContext } from 'react'
import Feather from "react-native-vector-icons/Feather";
import { StatusBar } from 'expo-status-bar';
import { LightTheme } from '../../styles/themes/LightTheme';

import { AuthContext } from '../../contexts/AuthContext';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { Container,ButtonsContainer, BackContainer, TextContainer, Title, Description, InputContainer, Label, ErrorMessage, LabelContainer} from './styles';
import Input from '../../components/Input';
import useKeyboardStatus from '../../hooks/useKeyboardStatus';

const Signin = () => {

  const { user,signIn } = useContext(AuthContext);
  const keyboardStatus = useKeyboardStatus();
  const navigation = useNavigation();

  const [password, setPassword] = useState({value:"1234", error:false, view:false});
  const [email, setEmail] = useState({value:"joao@gmail.com", error:false});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  

  const login = async () => {
    setIsLoading(true);
    if (!email.value) return setEmail({...email, error: true}) & setIsLoading(false); 
    if (!password.value) return setPassword({...password, error: true}) & setIsLoading(false); 
    var response = await signIn({
      email: email.value,
      password: password.value
    })

    if (response?.error) return setError(response?.error.message) & setIsLoading(false);
    setError("");
    setIsLoading(false);
    if (response?.id) return navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });

    setError("Erro ao entrar.")
  }
  const backPage = () => navigation.goBack();

  return (
    <Container statusBarHeight={Constants.statusBarHeight}>
       <StatusBar backgroundColor={"#F6D03C"} barStyle="light-content"></StatusBar>
       {
        !keyboardStatus && (
            <>
              <BackContainer>
                <Feather onPress={backPage} name="arrow-left" size={35} color={LightTheme.colors.secondaryText} />
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
        <ErrorMessage>{error}</ErrorMessage>
       </LabelContainer>
       </InputContainer>
        
       {
        !keyboardStatus && (
          <ButtonsContainer>
           <Button type={1} text={isLoading ? <ActivityIndicator color={LightTheme.colors.background} size={25}/> : 'ENTRAR'} onPress={() => login()}/>
          </ButtonsContainer>
        )
       }
    </Container>
    )
}

export default Signin