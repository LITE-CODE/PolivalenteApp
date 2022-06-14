import { View, Image, TextInput, Text, TouchableOpacity} from 'react-native'

import React, {useState, useEffect} from 'react'


import { getUser } from '../../services/database/getUser.js';
import { main, formulario, footer } from './styles.js';
import Dashboard from '../Dashboard';
import { set } from 'firebase/database';


export default function SignIn() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false); 
  const [onDashboard, setOnDashboard] = useState(false)
  const [userNotFound, setUserNotFound] = useState(false)
  const [dado, setDado] = useState({});

 
  
  
  const pegarDado = async () =>  {
    //const dado = await getUser({email:'joao@gmail.com', password: '1234567'});
    setDado(dado)

  }

  const verifyUser = async () => {


    if (!email) return setErrorEmail('not field');
    if (!password) return setErrorPassword('not field')
    setErrorEmail(false)
    setErrorPassword(false)
    const dado = await getUser({email: email, password: password});
    setDado(dado)
    console.log(dado)
if (dado.status === 'incorrect password'){ 

  setErrorPassword('incorrect password')

} else if (dado.status === 'User not found'){
  setErrorPassword(false)
   setUserNotFound(true)
} else {
setUserNotFound(false)
    setOnDashboard(true);
}
  }

/*
  
  useEffect(() => {
    pegarDado();
  }, []);

*/

if (onDashboard){
  return (<Dashboard></Dashboard>)
} 
  return (

    
 



<View style={main.container}>

<View>
      <Image
      source={require("../../assets/imgs/vetor.png")}
      style={main.logo}
      />
</View>


<View style={formulario.container}>

<TextInput
     style={[
       formulario.input,
       focusEmail ? formulario.inputFocus:'',
       errorEmail ? formulario.inputError:''
      ]}
      onChangeText={text => {
        setEmail(text)
        setErrorEmail(false)
      }}
      onFocus={() => setFocusEmail(true)}
      onBlur={() => setFocusEmail(false)}
      placeholder={`EMAIL ${errorEmail == 'not field' ? '*' : '' }`}
     />

<TextInput
     style={[
       formulario.input,
       focusPassword ? formulario.inputFocus:'',
       errorPassword ? formulario.inputError:''
      ]}
      onChangeText={text => {
        setPassword(text)
        setErrorPassword(false)

      }
      }
      onFocus={() => setFocusPassword(true)}
      onBlur={() => setFocusPassword(false)}
      placeholder={`SENHA ${errorPassword == 'not field' ? '*' : '' }`}
     />

     {

     }
   { errorPassword == 'incorrect password' && (  <Text style={formulario.errorText}>Usuario ou senha invalidos*</Text>)}
   { errorEmail == 'not field' && (  <Text style={formulario.errorText}>Preencha o campo de email*</Text>)}
   { errorPassword == 'not field' && (  <Text style={formulario.errorText}>Preencha o campo de senha*</Text>)}
   {userNotFound && (  <Text style={formulario.errorText}>Usuario não cadastrado*</Text>)}

<TouchableOpacity
        style={formulario.button}
        onPress={verifyUser}
   
      >
        <Text style={formulario.buttonText}>ENTRAR</Text>
      </TouchableOpacity>

 </View>

<View style={footer.container}>
<Text>Esqueceu a senha?</Text>
<Text >Criar conta</Text>
</View>
</View>



  )
}


