import { View, Image, TextInput, Text, TouchableOpacity, Keyboard} from 'react-native'

import {useNavigate} from 'react-router-dom'
import React, {useState, useEffect} from 'react'

import { createUser } from '../../services/database/createUser.js';
import { getUser } from '../../services/database/getUser.js';
import { main, formulario, footer } from './styles.js';
import Dashboard from '../Dashboard';


const PersonalizedInput = (props) => {
    const [focus, setFocus] = useState(false);
  
    return (
      <TextInput
     style={[
       formulario.input,
       focus ? formulario.inputFocus:'',
       props.error ? formulario.inputError:''
      ]}
      //onChangeText={text => setName(text)}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      {...props}
     />
    )
}



export default function SignIn({navigation}) {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName ] = useState();
  const [passwordTwo, setPasswordTwo] = useState();
  const [error, setError] = useState([]);

  const [verification, setVerification] = useState()



  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-ZÀ-ú$*&@#]{4,10}$/;
  const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  const nameRegex = /[a-zA-Z\u00C0-\u00FF ]+/i

  const verifyUser = async () => {
 
   
   var errorList = [];

    if (!name)  errorList.push('NOME')
    if (!email)  errorList.push('EMAIL');
    if (!password)  errorList.push('SENHA')
    if (!passwordTwo) errorList.push('REPETIR SENHA')


    setError(errorList)
    if (errorList.length !== 0) return;

    if (nameRegex.test(name) === false) return setVerification('invalid name');
    if (emailRegex.test(email) === false) return setVerification('invalid email');

    
    if (password !== passwordTwo) return setVerification('matchPassword');
    if (passwordRegex.test(password) === false) return setVerification('invalid password');
   
  

 
    var existingUser  = await getUser({email: email, password: password});
    if (existingUser.status != 'User not found') return setVerification('existing user');

    var user = await createUser({email: email, password: password, name: name})
    navigation.navigate('Dashboard')
/*
    const user = await createUser({email: email, password: password, name: name, class: value});
    setData(user)
   console.log(data)
*/
  }


  const [keyboardStatus, setKeyboardStatus] = useState(undefined);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus("Keyboard Shown");
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus("Keyboard Hidden");
    });
  
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  







  return (


<View style={main.container}>

<View>
{keyboardStatus != 'Keyboard Shown' && (<Image
      source={require("../../assets/imgs/vetor.png")}
      style={main.logo}
      />)}
</View>


<View style={formulario.container}>
<PersonalizedInput
placeholder={`NOME${error?.includes('NOME')?'*':''}`}
error={error?.includes('NOME') ? true : false}  
onChangeText={text => {setName(text);setError(error.filter(x=>x!='NOME'))}}
/>
<PersonalizedInput
placeholder={`EMAIL${error?.includes('EMAIL')?'*':''}`}
error={error?.includes('EMAIL') ? true : false}
onChangeText={text => {setEmail(text);setError(error.filter(x=>x!='EMAIL'))}}
/>
<PersonalizedInput
placeholder={`SENHA${error?.includes('SENHA')?'*':''}`}
error={error?.includes('SENHA') ? true : false}
onChangeText={text => {setPassword(text);setError(error.filter(x=>x!='SENHA'))}}
/>
<PersonalizedInput
placeholder={`REPETIR SENHA${error?.includes('REPETIR SENHA')?'*':''}`}
error={error?.includes('REPETIR SENHA') ? true : false}
onChangeText={text => {setPasswordTwo(text);setError(error.filter(x=>x!='REPETIR SENHA'))}}
/>

{error[0] && (<Text style={formulario.errorText}>Preencha todos os campos*</Text>)}
{verification == 'invalid name' && (  <Text style={formulario.errorText}>Nome de usuário inválido*</Text>)}
{verification == 'invalid email' && (  <Text style={formulario.errorText}>Email inválido*</Text>)}
{verification == 'matchPassword' && (  <Text style={formulario.errorText}>As senhas não coincidem*</Text>)}
{verification == 'invalid password' && (  <Text style={formulario.errorText}>A senha deve conter: </Text>)}
{verification == 'invalid password' && (  <Text style={formulario.errorText}>1 Letra Maiúscula e um número no mínimo </Text>)}
{verification == 'invalid password' && (  <Text style={formulario.errorText}> de 4 a 10 caracteres</Text>)}
{verification == 'existing user' && (  <Text style={formulario.errorText}>Usuário ja existente* </Text>)}





<TouchableOpacity
        style={formulario.button}
        onPress={  verifyUser}

      >
        <Text style={formulario.buttonText}>ENTRAR</Text>
      </TouchableOpacity>

 </View>

 {keyboardStatus != 'Keyboard Shown' && (

<View style={footer.container}>

<Text
onPress={() => navigation.navigate('SignIn') }
>Ja tem uma conta? Entrar</Text>

</View>

 )}

</View>


  )
}


