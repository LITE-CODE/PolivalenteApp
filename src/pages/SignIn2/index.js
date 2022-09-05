import storage from "@react-native-async-storage/async-storage";
import React, {useState, useEffect} from 'react'

import EmailButton from "./Buttons/Email";
import PasswordButton from "./Buttons/Password";
import {Container} from './styles'


const SignIn = ({navigation}) => {

  const [text,setText]= useState('')

  return (
    <Container>
      <EmailButton
      text={text.lenght}
      onChangeText={text => setText(text)}
      />
    </Container>
  )

}

export default SignIn;

