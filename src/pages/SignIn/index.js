import { View, Image, TextInput, Text, TouchableOpacity} from 'react-native'
import {useNavigate} from 'react-router-dom'
import React, {useState} from 'react'


import { main, formulario, footer } from './styles.js';


export default function SignIn() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);

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
      ]}
      onChangeText={text => setEmail(text)}
      onFocus={() => setFocusEmail(true)}
      onBlur={() => setFocusEmail(false)}
      placeholder='EMAIL'
     />

<TextInput
     style={[
       formulario.input,
       focusPassword ? formulario.inputFocus:'',
      ]}
      onChangeText={text => setPassword(text)}
      onFocus={() => setFocusPassword(true)}
      onBlur={() => setFocusPassword(false)}
      placeholder='SENHA'
     />

<TouchableOpacity
        style={formulario.button}
   
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


