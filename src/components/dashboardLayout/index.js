import Entypo from 'react-native-vector-icons/Entypo';
import { View } from 'react-native';
import React from 'react';

import { Container, Navbar, Footer, Children} from './styles';
//<Icon name="rocket" size={30} color="#900" />;
//import Icon from 'react-native-vector-icons/FontAwesome';
const DashboardLayout = ({navigation, children}) => {
  return (
    <Container>
      <Navbar>
      <View>
       
      </View>
      <View>

      </View>
      </Navbar>
      <Children>
        {children}
      </Children>
      <Footer>
      {children}
      </Footer>
    </Container>
  )
}

export default DashboardLayout