import Feather from 'react-native-vector-icons/Feather';
import { LightTheme } from '../../styles/themes/light';
import react from "react";

import { Container, Service, ServiceIcon, ServiceText} from './styles';


const Services = () => {

    const services = [
        {
            name:'Home',
            route: '/Main',
            icon: 'home'
        },
        {
            name:'Home',
            route: '/Main',
            icon: 'home'
        },
        {
            name:'Home',
            route: 'Main',
            icon: 'home'
        },
        {
            name:'Home',
            route: 'Main',
            icon: 'home'
        },
        {
            name:'Home',
            route: 'Main',
            icon: 'home'
        },
        {
            name:'Home',
            route: 'Main',
            icon: 'home'
        },
        {
            name:'Home',
            route: 'Main',
            icon: 'home'
        },
        {
            name:'Home',
            route: 'Main',
            icon: 'home'
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