import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import InitialPage from '../screens/initialPage';
import Main from '../screens/main';
import SignUp from '../screens/signUp';
import SignIn from '../screens/signIn';

const routes = [ InitialPage, SignIn, SignUp, Main]
const Stack = createNativeStackNavigator();

const Router = ({}) => {
  
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='SignIn'>
      {
        routes && routes.map((screen, i) => (
          <Stack.Screen key={i} name={screen.name} component={screen} options={{ headerShown: false }}/>
        ))
      }
    </Stack.Navigator>
  </NavigationContainer>
)

}

export default Router