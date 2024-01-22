import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";
import React from "react";

import { Container, IconButton } from "./styles";

const Navbar = ({padding, onMenu}) => {

    return (
        <Container padding={padding}>       
            <IconButton onPress={onMenu}>
                <Feather name="menu" color={'#FFFFFF'} size={25} />
            </IconButton>
            <IconButton>
                <Feather name="settings" color={'#FFFFFF'} size={25} />
            </IconButton>
        </Container>
    )
}

export default Navbar