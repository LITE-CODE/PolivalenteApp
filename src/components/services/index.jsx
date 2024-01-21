import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import { LightTheme } from '../../styles/themes/light';
import react from "react";

import { Container, Service, ServiceIcon, ServiceText} from './styles';


const Services = () => {

    const { navigate } = useNavigation();
    const services = [
        {
            name:'Avisos',
            route: 'Warns',
            icon: 'info'
        },
        {
            name:'Cardápio',
            route: 'Menu',
            icon: 'coffee'
        },
        {
            name:'Horários',
            route: 'Schedules',
            icon: 'clock'
        },
        {
            name:'Boletim',
            route: 'Main',
            icon: 'file-text'
        },
        {
            name:'Turma',
            route: 'Classe',
            icon: 'users'
        },
        {
            name:'SAC',
            route: 'Sac',
            icon: 'frown'
        },
        {
            name:'Biblioteca',
            route: 'Main',
            icon: 'package'
        },
        {
            name:'Ajuda',
            route: 'Main',
            icon: 'help-circle'
        }
    ];

    return (
        <Container>
            {
                services.map(({name, route, icon}, index) => {
                    return (
                        <Service key={index}>
                            <ServiceIcon onPress={() => navigate(route)}>
                                <Feather color={LightTheme.colors.secondaryText} size={30} name={icon}/>
                            </ServiceIcon>
                            <ServiceText>
                                {name}
                            </ServiceText>
                        </Service>
                    )
                })
            }
        </Container>
    );
}

export default Services;