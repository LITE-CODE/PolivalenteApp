import Feather from 'react-native-vector-icons/Feather';
import { LightTheme } from '../../styles/themes/light';
import react from "react";

import { Container, Service, ServiceIcon, ServiceText} from './styles';


const Services = () => {

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
            route: 'Report',
            icon: 'file-text'
        },
        {
            name:'Turma',
            route: 'Classes',
            icon: 'users'
        },
        {
            name:'SAC',
            route: 'Sac',
            icon: 'frown'
        },
        {
            name:'Biblioteca',
            route: 'Library',
            icon: 'package'
        },
        {
            name:'Ajuda',
            route: 'Help',
            icon: 'help-circle'
        },
    ];

    return (
        <Container>
            {
                services.map(({name, route, icon}, index) => {
                    return (
                        <Service>
                            <ServiceIcon>
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