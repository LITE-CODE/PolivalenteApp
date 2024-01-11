import React from "react";

import { Container, Text } from "./styles";

const Button = ({text, onPress, type, margin='10px 0', width='', height=''}) => {
    return (
        <Container onPress={onPress} type={type} margin={margin} width={width} height={height}>
            <Text type={type} >{text}</Text>
        </Container>
    )
}

export default Button