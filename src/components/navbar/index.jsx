import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";
import React from "react";

import { Container, IconButton } from "./styles";

const Navbar = ({padding}) => {

    return (
        <Container padding={padding}>       
            <IconButton>
                <Feather name="menu" color={'#eeeeee'} size={25} />
            </IconButton>
            <IconButton>
                <Feather name="user" color={'#eeeeee'} size={25} />
            </IconButton>
        </Container>
    )
}

export default Navbar