import Feather from 'react-native-vector-icons/Feather';
import { LightTheme } from '../../styles/themes/light';
import react from "react";

import { Container, Title, TitleContainer, Type, OpenButton, OpenText, FooterContainer} from './styles'
import { Description } from "../../screens/signIn/styles";

const Warn = ({title, description, type='todos'}) => {


    return (
        <Container>
            <TitleContainer>
               <Title>{title}</Title>
            </TitleContainer>
            <Description>{description}</Description>
            <FooterContainer>
                <Feather color={LightTheme.colors.secondaryText} size={20} name='clock'/>
                <Description>
                    11/01/2022
                </Description>
            </FooterContainer>
        </Container>
    )
}

export default Warn;
