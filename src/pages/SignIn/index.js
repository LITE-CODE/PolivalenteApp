import Feather from "react-native-vector-icons/Feather";
import React, { useState, useEffect } from "react";
import { View, Keyboard } from "react-native";

import {
  LoginButtonView,
  LabelPassword,
  TextContainer,
  UpdatePassord,
  GeneralError,
  Description,
  LoginButton,
  GeneralText,
  ErrorLabel,
  InputsView,
  Container,
  LoginText,
  ArrowView,
  TitleView,
  Label,
  Title,
} from "./styles";

import PasswordButton from "./Buttons/Password";
import EmailButton from "./Buttons/Email";
import useAuth from "../../hooks/useAuth";

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-ZÀ-ú$*&@#]{4,10}$/;
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

const SignIn = ({ navigation }) => {
  const [error, setError] = useState({ value: null, message: null });
  const [keybordStatus, setKeyboardStatus] = useState(true);
  const [passwordView, setPasswordView] = useState(false);
  const [password, setPassword] = useState("");
  const [text, setText] = useState("ENTRAR");
  const [email, setEmail] = useState("");

  const handleToUpdatePassword = () => navigation.navigate("EmBreve");
  const handleToPreLogin = () => navigation.navigate("PreLogin");
  const { userSignIn } = useAuth();

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => setKeyboardStatus(false));
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => setKeyboardStatus(true));
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const handleToSingIn = async () => {
    Keyboard.dismiss();
    if (email == "") return setError({ value: "email", message: "Campo não preenchido" });
    if (!emailRegex.test(email)) return setError({ value: "email", message: "Email invalido" });
    if (password == "") return setError({ value: "password", message: "Campo não preenchido" });
    setText("CARREGANDO...");
    const response = await userSignIn({ email, password });
    if (response.user?.id) return navigation.navigate("Dashboard");
    setText("ENTRAR");
    if (response?.error) {
      setError({ value: "general", message: response.error?.message });
      setText("ENTRAR")
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
            <Title>Bem-vindo de volta!</Title>
            <Description>Faça login para continuar</Description>
          </TextContainer>
        </TitleView>
      )}
      <InputsView>
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
          <UpdatePassord onPress={handleToUpdatePassword}>
            <LabelPassword>Esqueceu a senha?</LabelPassword>
          </UpdatePassord>
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

export default SignIn;
