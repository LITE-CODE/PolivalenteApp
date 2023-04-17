import Feather from 'react-native-vector-icons/Feather';
import React, { useState } from 'react';

import { LightTheme } from '../../styles/themes/LightTheme';
import { Container, InputContainer} from './styles';

const Input = (props) => {
  const [focus, setFocus] = useState(false);
  return (
    <Container error={props.error} focus={focus}>
      {
        props?.icon && <Feather color={LightTheme.colors.secondaryText} size={25} name={props.icon}/>
      }
      <InputContainer
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          secureTextEntry={props.view}
          {...props}
      />
      {
        !props?.error && (
          <Feather color={LightTheme.colors.secondaryText} size={25} name={props.button} onPress={() => props?.onButtonClick()}/>
        )
      }
      {
        props?.error && <Feather color={'red'} size={22} name={'alert-triangle'}/>
      }
    </Container>
  )
}

export default Input
