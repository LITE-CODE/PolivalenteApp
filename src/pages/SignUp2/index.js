import storage from "@react-native-async-storage/async-storage";
import Feather from "react-native-vector-icons/Feather";
import React, { useState, useEffect } from "react";
import { View, Keyboard } from "react-native";
import {
  LoginButtonView,
  TextContainer,
  GeneralError,
  LoginButton,
  Description,
  GeneralText,
  InputsView,
  ErrorLabel,
  Container,
  LoginText,
  ArrowView,
  TitleView,
  Title,
  Label,
} from "./styles";

import PasswordButton from "./Buttons/Password";
import EmailButton from "./Buttons/Email";
import NameButton from "./Buttons/Name";
import useAuth from "../../hooks/useAuth";

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-ZÀ-ú$*&@#]{4,10}$/;
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

const SignUp = ({ navigation }) => {
  const [error, setError] = useState({ value: null, message: null });
  const [keybordStatus, setKeyboardStatus] = useState(true);
  const [passwordView, setPasswordView] = useState(false);
  const [text, setText] = useState("CADASTRAR");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  
  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => setKeyboardStatus(false));
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => setKeyboardStatus(true));
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  
  const handleToPreLogin = () => navigation.navigate("PreLogin");
  const { userSignUp } = useAuth();

  const handleToSingIn = async () => {
    Keyboard.dismiss();
    if (name == "") return setError({ value: "name", message: "Campo não preenchido" });
    if (email == "") return setError({ value: "email", message: "Campo não preenchido" });
    if (!emailRegex.test(email)) return setError({ value: "email", message: "Email invalido" });
    if (password == "")  return setError({ value: "password", message: "Campo não preenchido" });
    setText("CARREGANDO...");
    const response = await userSignUp({ name, email, password });
    if (response.user?.id) return navigation.navigate("Dashboard");
    setText("CADASTRAR");
    if (response?.error){
       setError({ value: "general", message: response.error?.message })
       setText("CADASTRAR")
      }
  };

  return (
    <Container>
      {keybordStatus && (
        <TitleView>
          <ArrowView>
            <Feather
              onPress={handleToPreLogin}
              name="arrow-left"
              size={35}
              color="#ACACAC"
            />
          </ArrowView>
          <TextContainer>
            <Title>Ola, bem-vindo!</Title>
            <Description>Crie uma nova conta para continuar</Description>
          </TextContainer>
        </TitleView>
      )}

      <InputsView>
        <View>
          <Label>Nome</Label>
          <NameButton
            onChangeText={(text) => {
              setName(text);
              if (error.value == "name")
                setError({ value: null, message: null });
            }}
            value={name}
            error={error.value == "name"}
            onClearButton={() => setName("")}
            clearButton={name.length > 0}
          />
          {error.value == "name" && <ErrorLabel>{error.message}</ErrorLabel>}
        </View>
        <View>
          <Label>Email</Label>
          <EmailButton
            onChangeText={(text) => {
              setEmail(text);
              if (error.value == "email")
                setError({ value: null, message: null });
            }}
            value={email}
            error={error.value == "email"}
            onClearButton={() => setEmail("")}
            clearButton={email.length > 0}
          />
          {error.value == "email" && <ErrorLabel>{error.message}</ErrorLabel>}
        </View>

        <View>
          <Label>Password</Label>
          <PasswordButton
            onChangeText={(text) => {
              setPassword(text);
              if (error.value == "password")
                setError({ value: null, message: null });
            }}
            value={password}
            error={error.value == "password"}
            onClickEye={() => setPasswordView(!passwordView)}
            passwordView={passwordView}
          />
          {error.value == "password" && (
            <ErrorLabel>{error.message}</ErrorLabel>
          )}
        </View>
        {error.value == "general" && (
          <GeneralError>
            <GeneralText>{error.message}</GeneralText>
            <Feather name="alert-triangle" size={15} color="red" />
          </GeneralError>
        )}
      </InputsView>
      <LoginButtonView>
        <LoginButton onPress={handleToSingIn}>
          <LoginText>{text}</LoginText>
        </LoginButton>
      </LoginButtonView>
    </Container>
  );
};

export default SignUp;
