import Constants from "expo-constants";
import react from "react";

import { Container, Children } from './styles';
import Navbar from "../navbar";

const Layout = ({children, padding='5%'}) => {

    return (
        <Container statusBarHeight={Constants.statusBarHeight}>
            <Navbar padding={padding}/>
            <Children padding={padding}>
              {children}
            </Children>
        </Container>
    )

}

export default Layout;