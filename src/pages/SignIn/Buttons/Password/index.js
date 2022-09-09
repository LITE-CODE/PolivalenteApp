import { View, Text } from 'react-native'
import React, {useState} from 'react'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Container, Input,TransparentView} from './styles'

//alert-triangle arrow-left eye eye-off x-circle
const PasswordButton = (props) => {

  const [focus, setFocus] = useState(false);

  const onClickEye = () => { props.onClickEye()}


  return (
    <Container>
      <FontAwesome name="lock" size={25} color="#363636" />
      <Input
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      inputFocus={focus}
      placeholder={"password"}
      secureTextEntry={!props.passwordView}
      {...props}
      />
{props.error ? <Feather name="alert-triangle" size={22} color="red" /> :  props.passwordView ? <Feather onPress={onClickEye} name="eye" size={20} color="#AEAEAE" /> : <Feather onPress={onClickEye} name="eye-off" size={20} color="#ADADAD" />}

      
    </Container>
  )
}

export default PasswordButton