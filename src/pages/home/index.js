import React from 'react';

import DashboardLayout from '../../components/dashboardLayout';
import { Container, Text} from './styles';

const Home = () => {
  return (
    <DashboardLayout navigationActive={'Home'}>
        <Text>
          home
        </Text>
    </DashboardLayout>
  )
}

export default Home