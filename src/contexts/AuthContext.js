import React, { createContext, useState } from "react";

import axios from "axios";
import storage from "../utils/storage";
import api from "../utils/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);

    const getCurrentUser= async (token) => {
      var response = await api.get('/user/me',{ 
        headers: { 'authorization': token }
      });
      const data = response.data.user;
      setUser(data);
      await storage.set("user", data);
      return data;
    }
    const signIn = async (email, password) => {
      try {
        var response = await axios.get('http://localhost:3000/v1/ping', {email,password})        
      } catch (error) {
        console.log(error)
      }
      return 
      if (response?.error) return response;
      const data = response.data;
      if (data?.acessToken) await storage.set('token');
      console.log('teste')
      return await getCurrentUser(data?.acessToken);
    
    }
    const signUp = async () => {}

    return (
        <AuthContext.Provider value={{ user, signIn, signUp, getCurrentUser }}>
          {children}
        </AuthContext.Provider>
      );

} 

/*

import storage from "@react-native-async-storage/async-storage";
import NetInfo from "@react-native-community/netinfo";

import { signIn, signUp, me } from "../services/resources/user";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const wifiState = () => NetInfo.fetch().then((state) => state.isConnected);

  const [user, setUser] = useState(async () => {
    const user = await storage.getItem("user");

    return user ? JSON.parse(user) : {};
  });

  const userSignIn = async (userData) => {
    const response = await signIn(userData);
    if (response?.error) return response;
    const data = response.data;
    if (data?.acessToken) await storage.setItem("token", data.acessToken);
    return await getCurrentUser();
  };

  const userSignUp = async (userData) => {
    const response = await signUp(userData);
    if (response?.error) return response;
    const data = response.data;
    if (data?.acessToken) await storage.setItem("token", data.acessToken);
    return await getCurrentUser();
  };

  const getCurrentUser = async () => {
    if (!wifiState()) {
      const localUser = await storage.getItem("user");
      return localUser
        ? JSON.parse(localUser)
        : { error: { message: "User not logged" } };
    }else {


    const response = await me();

    if (response?.error) {
      console.log("error");
      const localUser = await storage.getItem("user");
      return localUser
        ? JSON.parse(localUser)
        : { error: { message: "User not logged" } };
    }
    const data = response.data.user;
    setUser(data);
    await storage.setItem("user", JSON.stringify(data));
    return data;
  }
  };

  return (
    <AuthContext.Provider
      value={{ user, userSignIn, userSignUp, getCurrentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
*/
