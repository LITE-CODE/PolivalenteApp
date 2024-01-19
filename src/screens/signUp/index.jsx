import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Constants from 'expo-constants';
import React, {useState} from 'react';

import { Container, TitleContainer, Title, Description, InputContainer, ErrorMessage } from './styles';
import Backnav from '../../components/backnav';
import Button from '../../components/button';
import Input from '../../components/input';
import { signIn } from '../../actions';

const SignUp = () => {
  const { reset } = useNavigation();
  const dispatch = useDispatch();
  const [data, setData] = useState({email:"carlosjosep@gmail.com", password:"12345678", name: "", error: false});
  const [password, setPassword] = useState(true);
 
  const sendData = async () => {
    if (!data.name) return setData({...data, error: 'name'});
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
              <Title>Seja bem-vindo!</Title>
              <Description>Crie uma conta para iniciar essa jornada</Description>
          </TitleContainer>
          <InputContainer>
              <Input 
                onChangeText={(x) => setData({...data, name: x, error: false})}
                onButtonClick={() => setData({...data, name:"", error: false})}
                buttonIcon={ data.name.length ? 'x-circle' : ''}
                placeholder={'Nome completo'}
                error={data.error == 'name'}
                value={data.name}
                initialIcon='user'
              />
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
                data.error && !['name','password','email'].find(i => i == data.error) ? <ErrorMessage>{data.error}</ErrorMessage> : <></>
              }
          </InputContainer>
          <Button text='CADASTRAR' onPress={sendData}/>

      </Container>
  );
};

export default SignUp;