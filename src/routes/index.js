import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import InitialLoginPage from '../pages/InitialLoginPage';
import CreateClass from '../pages/createClass';
import Calendar from '../pages/calendar';
import Settings from '../pages/settings';
import Warnings from '../pages/warnings';
import Loading from '../pages/loading';
import Signin from '../pages/Signin';
import Home from '../pages/home';
import News from '../pages/news';

const routes = [Calendar, Settings, Warnings, Loading, Home, News, InitialLoginPage, Signin, CreateClass]
const Stack = createNativeStackNavigator();

const Router = ({hasUser}) => {
  
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={hasUser ? "Home" : "InitialLoginPage"}>
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