import Feather from 'react-native-vector-icons/Feather';
import React, { useState } from 'react';

import { LightTheme } from '../../styles/themes/light';
import { Container, InputContainer} from './styles';

const Input = (props) => {
  const [focus, setFocus] = useState(false);
  var { initialIcon, password=false, buttonIcon, error=false, onButtonClick } = props
  return (
    <Container error={error} focus={focus}>
      {
        initialIcon && <Feather color={LightTheme.colors.text} size={25} name={initialIcon}/>
      }
      <InputContainer
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          secureTextEntry={password}
          {...props}
      />
      {
        !error && (
          <Feather color={LightTheme.colors.secondaryText} size={25} name={buttonIcon} onPress={onButtonClick}/>
        )
      }
      {
       error && <Feather color={'red'} size={22} name={'alert-triangle'}/>
      }
    </Container>
  )
}

export default Input