import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Constants from 'expo-constants';
import React, {useState} from 'react';

import { Container, TitleContainer, Title, Description, InputContainer, ErrorMessage } from './styles';
import Backnav from '../../components/backnav';
import Button from '../../components/button';
import Input from '../../components/input';
import { signIn } from '../../actions';

const SignIn = () => {
  const { reset } = useNavigation();
  const dispatch = useDispatch();
  const [data, setData] = useState({email:"", password:"", error: false});
  const [password, setPassword] = useState(true);
 
  const sendData = async () => {
    if (!data.email) return setData({...data, error: 'email'});
    if (!data.password) return setData({...data, error: 'password'});
    var response = await signIn(data, dispatch);
    if (response?.error) return setData({...data, error: response.error.msg});
    reset({
      index: 0,
      routes: [{ name: 'Main' }],
    })
  }

  return (
      <Container  statusBarHeight={Constants.statusBarHeight}>
          <Backnav type={2}  text='' padding={'0'}/>
          <TitleContainer>
              <Title>Bem-vindo de volta!</Title>
              <Description>Faça login para continuar</Description>
          </TitleContainer>
          <InputContainer>
              <Input 
                onChangeText={(x) => setData({...data, email: x, error: false})}
                onButtonClick={() => setData({...data, email:"", error: false})}
                buttonIcon={ data.email.length ? 'x-circle' : ''}
                placeholder={'exemplo@exemplo.com'}
                error={data.error == 'email'}
                value={data.email}
                initialIcon='mail'
              />
              <Input
                placeholder={'******'}
                onChangeText={(x) => setData({...data, password: x, error: false})}
                onButtonClick={() => setPassword(!password)}
                buttonIcon={!password ? 'eye-off' : 'eye'}
                error={data.error == 'password'}
                value={data.password}
                password={password}
                initialIcon='lock'
              />
              {
                data.error && !['password','email'].find(i => i == data.error) ? <ErrorMessage>{data.error}</ErrorMessage> : <></>
              }
          </InputContainer>
          <Button text='ENTRAR ' onPress={sendData}/>

      </Container>
  );
};

export default SignIn;