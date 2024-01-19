import { Constants } from "expo-constants";
import react from "react";

import { Container } from './styles';

const Layout = ({children}) => {

    return (
        <Container statusBarHeight={Constants.statusBarHeight}>
            {children}
        </Container>
    )

}

export default Layout;