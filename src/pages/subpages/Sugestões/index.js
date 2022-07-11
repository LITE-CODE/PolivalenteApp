import { View, Text, TextInput,  TouchableOpacity} from 'react-native'
import React, {useState} from 'react'

import Header from '../../../components/Header';
import { main, input } from './styles';


export default function Sugestoes() {

const [title, setTitle] = useState({focus:false,error:false,value:null}); 
const [description, setDescription] = useState({focus:false,error:false,value:null}); 




  return (
    <View style={main.container}>
    <Header/>

   <View style={main.textContainer}> 
        <Text style={main.text}>Envie uma sugestão ou crítica para a escola, a direção da escola nem os professores saberão quem enviou tal comentario.</Text>
   </View>

   <View style={main.formularyContainer}>


  <View style={ main.inputContainer}>
  <TextInput 
    
    placeholder='titulo'  
    style={[
      input.text,
      title.error ? input.error:'',
      title.focus==true ? input.focus:'',
     ]}

     onChangeText={text => setTitle({focus:false,error:false,value:text})}
     maxLength={150}
     autoCorrect={true}
     onFocus={() => setTitle({focus:true,error:false,value:title.value})}
     onBlur={() => setTitle({focus:false,error:false,value:title.value})}
    />
    <View style={input.lengthContainer}> 
    <Text style={input.textLenght}>{(150 - (title.value ? title.value.length: 0))}</Text>
    </View>
    
  </View>

  <View style={ main.inputContainer}>
  <TextInput 
    
    placeholder='descrição'  
    style={[
      input.text,
      description.error ? input.error:'',
      description.focus==true ? input.focus:'',
     ]}

     onChangeText={text => setDescription({focus:description.focus,error:false,value:text})}
     maxLength={2000}
     multiline={true}
     numberOfLines={5}
     autoCorrect={true}
     onFocus={() => setDescription({focus:true,error:false,value:description.value})}
     onBlur={() => setDescription({focus:false,error:false,value:description.value})}
    />
   <View style={input.lengthContainer}> 
   <Text style={input.textLenght}>{(2000 - (description.value ? description.value.length: 0))}</Text>
   </View>
  </View>


    <TouchableOpacity style={input.button} onPress={() => {

        if (!title.value) return setTitle({focus:title.focus,error:true,value:title.value})
        if (!title.value) return setDescription({focus:false,error:true,value:description.value})
    }}>
     
     <Text style={input.buttonText}>ENVIAR</Text>
    </TouchableOpacity>
   </View>

    </View>
  )
}