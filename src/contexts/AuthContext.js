import storage from '@react-native-async-storage/async-storage';
import { createContext, useState } from "react";

import { signIn, signUp, me } from '../services/resources/user';



export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  
    const [user, setUser] = useState(async () => {
        const user = await storage.getItem('user');
        return user ? JSON.parse(user) : {};
    });
    
    
    const userSignIn = async (userData) => {
    
      const {data} = await signIn(userData);
      if (data?.error) return data;
      if (data?.accessToken) await storage.setItem('token', data.accessToken);
      return await getCurrentUser();
    
    }
    
    
    const userSignUp = async (userData) => {
    
      const {data} = await signUp(userData);
      if (data?.error) return data;
      if (data?.accessToken) await storage.setItem('token', data.accessToken);
      return await getCurrentUser();
    
    }
    
    const getCurrentUser = async () => {
    
      const { data } = await me();
      if (data?.error) return data;
      setUser(data);
      await storage.setItem('user', JSON.stringify(data))
      return data
    
    }

    return(
        <AuthContext.Provider value={{user, userSignIn, userSignUp, getCurrentUser}}>
            {children}
        </AuthContext.Provider>
        )
    

}