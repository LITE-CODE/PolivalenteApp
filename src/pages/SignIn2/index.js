import storage from "@react-native-async-storage/async-storage";
import Feather from "react-native-vector-icons/Feather";
import React, { useState, useEffect } from "react";
import { View } from "react-native";

import EmailButton from "./Buttons/Email";
import PasswordButton from "./Buttons/Password";
import {
  Container,
  Title,
  InputsView,
  LoginButton,
  LoginText,
  Label,
  LabelPassword,
  Description,
  ArrowView,
  LoginButtonView,
  TitleView,
  UpdatePassord,
} from "./styles";

const SignIn = ({ navigation }) => {
  const [passwordView, setPasswordView] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleToPreLogin = () => navigation.navigate("PreLogin");
  const handleToUpdatePassword = () => navigation.navigate("EmBreve");

  return (
    <Container>
      <TitleView>
        <ArrowView>
          <Feather
            onPress={handleToPreLogin}
            name="arrow-left"
            size={35}
            color="#ACACAC"
          />
        </ArrowView>
        <Title>Bem-vindo de volta!</Title>
        <Description>Faça login para continuar</Description>
      </TitleView>
      <InputsView>
        <View>
          <Label>Email</Label>
          <EmailButton
            onChangeText={(text) => setEmail(text)}
            value={email}
            error={false}
            onClearButton={() => setEmail("")}
            clearButton={email.length > 0}
          />
        </View>

        <View>
          <Label>Password</Label>
          <PasswordButton
            onChangeText={(text) => setPassword(text)}
            value={password}
            error={false}
            onClickEye={() => setPasswordView(!passwordView)}
            passwordView={passwordView}
          />
          <UpdatePassord onPress={handleToUpdatePassword}>
            <LabelPassword>Esqueceu a senha?</LabelPassword>
          </UpdatePassord>
        </View>
      </InputsView>
      <LoginButtonView>
        <LoginButton>
          <LoginText>LOGIN</LoginText>
        </LoginButton>
      </LoginButtonView>
    </Container>
  );
};

export default SignIn;
