import React from 'react'
import { Container, Text} from './styles'

const Button = ({type=1, text, margin=5, onPress}) => {
  return (
    <Container onPress={onPress} type={type} margin={margin}>
      <Text type={type}>{text}</Text>
    </Container>
  )
}

export default Button