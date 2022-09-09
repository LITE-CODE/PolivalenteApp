import { View, Text } from 'react-native'
import React, {useState} from 'react'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Container, Input,TransparentView} from './styles'


const NameButton = (props) => {

  const [focus, setFocus] = useState(false);

  const onClearButton = () => { props.onClearButton()}


  return (

    <Container>
      <Feather name="user" size={25} color="#363636" />
      <Input
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      inputFocus={focus}
      placeholder={"seu nome"}

      {...props}
      />
{props.error ? <Feather name="alert-triangle" size={22} color="red" /> :  props.clearButton ? <AntDesign onPress={onClearButton} name="closecircle" size={22} color="#ADADAD" /> : <TransparentView/>}

      
    </Container>

  )
}

export default NameButton