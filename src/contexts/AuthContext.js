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
    
      const response = await signIn(userData);
      if (response?.error) return response;
      const data = response.data;
      if (data?.acessToken) await storage.setItem('token', data.acessToken);
      return await getCurrentUser();
    
    }
    
    
    const userSignUp = async (userData) => {
    


    const response = await signUp(userData);
    if (response?.error) return response;
    const data = response.data
    if (data?.acessToken) await storage.setItem('token', data.acessToken);
    return await getCurrentUser();

 
    
    }
    
    const getCurrentUser = async () => {
    
      const response = await me();
      if (response?.error) {
        const localUser = await storage.getItem('user')
        return localUser ? localUser : { error: { message: "User not logged"}}
      }
      const data = response.data
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