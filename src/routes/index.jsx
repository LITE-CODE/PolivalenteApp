import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import React from 'react';

import InitialPage from '../screens/initialPage/index.jsx';
import SignUp from '../screens/signUp/index.jsx';
import SignIn from '../screens/signIn/index.jsx';
import Main from '../screens/main/index.jsx';

const routes = [ InitialPage, SignIn, SignUp, Main]
const Stack = createNativeStackNavigator();

const Router = ({}) => {

  const user = useSelector((state) => state.user);
  
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={user ? 'Main' : 'InitialPage'}>
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