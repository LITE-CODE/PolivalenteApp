import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import Calendar from '../pages/calendar';
import Settings from '../pages/settings';
import Warnings from '../pages/warnings';
import Loading from '../pages/loading';
import Home from '../pages/home';
import News from '../pages/news';

const routes = [Calendar, Settings, Warnings, Loading, Home, News]
const Stack = createNativeStackNavigator();

const Router = () => {
  
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      {
        routes.map((screen, i) => (
          <Stack.Screen key={i} name={screen.name} component={screen} options={{ headerShown: false }}/>
        ))
      }
    </Stack.Navigator>
  </NavigationContainer>
)

}

export default Router