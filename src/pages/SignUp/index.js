import { View, Image, TextInput, Text, TouchableOpacity} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import {useNavigate} from 'react-router-dom'
import React, {useState} from 'react'

import { main, formulario, footer } from './styles.js';
import Dashboard from '../Dashboard';




export default function SignIn() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordTwo, setPasswordTwo] = useState();
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);
  const [focusName, setFocusName] = useState(false);
  const [focusPasswordTwo, setFocusPasswordTwo] = useState(false);
  const [name, setName ] = useState();



  const handleToDashboard = () => {
  
    return (
      <Dashboard/>
    )
  
  }


  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const items = [
    {label:'1° reg 1', value:'1° reg 1'},
    {label:'1° reg 2', value:'1° reg 2'},
    {label:'1° reg 3', value:'1° reg 3'},
    {label:'2° reg 1', value:'2° reg 1'},
    {label:'2° reg 2', value:'2° reg 2'},
    {label:'2° reg 3', value:'2° reg 3'},
   
    
  ]


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
       focusName ? formulario.inputFocus:'',
      ]}
      onChangeText={text => setName(text)}
      onFocus={() => setFocusName(true)}
      onBlur={() => setFocusName(false)}
      placeholder='NOME '
     />

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

<TextInput
     style={[
       formulario.input,
       focusPasswordTwo ? formulario.inputFocus:'',
      ]}
      onChangeText={text => setPasswordTwo(text)}
      onFocus={() => setFocusPasswordTwo(true)}
      onBlur={() => setFocusPasswordTwo(false)}
      placeholder=' REPETIR SENHA'
     />

<DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      placeholder="SELECIONAR SALA"
      placeholderStyle={formulario.dropdownText}
  
      style={{
        width: '50%',
        borderRadius: 5,
borderColor: '#4A504E',
borderWidth: 1,
borderStyle: 'solid',

        padding: 2, 
        alignItems: 'center',  
        
      }}
  
      containerStyle={{
   
        width: '100%',
        alignItems: 'center',  
      
      }}
      dropDownContainerStyle={{
   
        marginTop: 5,
        width: '50%',
        alignItems: 'center',
        padding: 2,
        fontFamily: "Inter-Medium",
        color: "#4A504E"
      }}
      listItemLabelStyle={{
   padding: 1,
   fontFamily: 'Inter-Medium'
      }}

      selectedItemLabelStyle={{
        fontWeight: "bold"
      }}
      dropDownDirection="BOTTOM"
      listMode="SCROLLVIEW"
    />

<TouchableOpacity
        style={formulario.button}
        onPress={handleToDashboard}

      >
        <Text style={formulario.buttonText}>ENTRAR</Text>
      </TouchableOpacity>

 </View>

<View style={footer.container}>
<Text>Ja tem uma conta? Entrar</Text>

</View>
</View>


  )
}


