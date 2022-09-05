import { View, Text } from 'react-native'
import React, {useState} from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { Container, Input} from './styles'

//alert-triangle arrow-left eye eye-off x-circle
const EmailButton = (props) => {
  const [focus, setFocus] = useState(false);
  return (
    <Container>
      <Feather name="mail" size={25} color="#363636" />
      <Input
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      focus={focus}
      placeholder={"example@gmail.com"}
      {...props}
      />

        <Feather name="x-circle" size={22} color="#363636" />


      
    </Container>
  )
}

export default EmailButton