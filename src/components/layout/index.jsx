import Feather from 'react-native-vector-icons/Feather';
import Constants from "expo-constants";
import react from "react";


import { Container, Children, SearchContainer, SearchInput, SearchInputContainer} from './styles';
import Navbar from "../navbar";

const Layout = ({children, padding='5%'}) => {

    return (
        <Container statusBarHeight={Constants.statusBarHeight}>
            <Navbar padding={padding}/>
            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput placeholder='pesquisar...'/>
                    <Feather color={'#363636'} name='search' size={15}/>
                </SearchInputContainer>
            </SearchContainer>
            <Children padding={padding}>
                {children}
            </Children>
        </Container>
    )

}

export default Layout;