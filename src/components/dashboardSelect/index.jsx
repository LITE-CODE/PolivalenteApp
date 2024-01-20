import { useNavigation } from '@react-navigation/native';
import react from "react";

import { Container, Title, OpenButton, OpenText} from './styles'

const DashboardSelect = ({title, route}) => {

    const { navigate } = useNavigation();

    return (
        <Container>
            <Title>{title}</Title>
            <OpenButton onPress={() => navigate(route)}>
                <OpenText>
                    Ver mais
                </OpenText>
            </OpenButton>
        </Container>
    )
}

export default DashboardSelect;