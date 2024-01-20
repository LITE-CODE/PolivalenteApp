import Feather from 'react-native-vector-icons/Feather';
import { LightTheme } from '../../styles/themes/light';
import react from "react";

import { Container, Title, TitleContainer, Type, Date, Content, DateContainer, OpenButton, OpenText, FooterContainer} from './styles'
import { Description } from "../../screens/signIn/styles";
import formatDate from '../../utils/formatDate';

const Warn = ({title, description, date, type='todos'}) => {


    return (
        <Container>
            <Content>
                <TitleContainer>
                <Title>{title}</Title>
                </TitleContainer>
                <Description>{description}</Description>
            </Content>
            <FooterContainer>
                <DateContainer>
                    <Feather color={LightTheme.colors.secondaryText} size={20} name='clock'/>
                    <Date>
                        {formatDate(date, true)}
                    </Date>
                </DateContainer>
                <OpenButton>
                    <OpenText>Expandir</OpenText>
                </OpenButton>
            </FooterContainer>
        </Container>
    )
}

export default Warn;
