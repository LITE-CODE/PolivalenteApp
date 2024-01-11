import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import React from "react";

import { Container, Text, IconButton } from "./styles";

const Backnav = ({text='', type=1, margin='0', width='', height='', padding='5%'}) => {
    const { goBack } = useNavigation();

    return (
        <Container type={type} margin={margin} width={width} height={height} padding={padding}>       
            <IconButton onPress={goBack}>
                <AntDesign name="arrowleft" color={type == 1 ? '#eeeeee'  : '#363636'} size={25} />
            </IconButton>
            <Text type={type} >{text}</Text>
        </Container>
    )
}

export default Backnav