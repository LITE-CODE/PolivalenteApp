import storage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import AppLoading from "expo-app-loading";
import "react-native-gesture-handler";

/*  Initial Pages  */
import Dashboard from "../pages/Dashboard";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

/*  Subpages of dashboard  */
import AvisosInternos from "../pages/subpages/AvisosInternos";
import AvisosGerais from "../pages/subpages/AvisosGerais";
import Calendario from "../pages/subpages/Calendario";
import Sugestoes from "../pages/subpages/Sugestões";
import Avaliação from "../pages/subpages/Avaliação";
import Horarios from "../pages/subpages/Horarios";

const Stack = createStackNavigator();

const Routes = () => {
  const [initialRouteName, setInitialRouteName] = useState();

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const user = await storage.getItem("user");

    setInitialRouteName(user ? "Dashboard" : "SignIn");
  };

  if (!initialRouteName) return <AppLoading />;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRouteName}>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Avaliação"
          component={Avaliação}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AvisosGerais"
          component={AvisosGerais}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AvisosInternos"
          component={AvisosInternos}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Calendario"
          component={Calendario}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Horarios"
          component={Horarios}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sugestões"
          component={Sugestoes}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
