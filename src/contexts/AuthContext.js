import storage from "@react-native-async-storage/async-storage";
import NetInfo from "@react-native-community/netinfo";
import { createContext, useState } from "react";

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
    }

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
  };

  return (
    <AuthContext.Provider
      value={{ user, userSignIn, userSignUp, getCurrentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
