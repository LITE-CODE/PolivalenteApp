import React from "react";
import { View } from "react-native";

import {
  Container,
  Button,
  Text,
  Title,
  Description,
  TextView,
} from "./styles";

const EmBreve = ({ navigation }) => {
  const handleToSignIn = () => navigation.navigate("SignIn2");

  return (
    <Container>
      <TextView>
        <Title>Em Breve</Title>
        <Description>
          Essa tela esta em fase de desenvolvimento, em breve estará disponivel
          para você.
        </Description>
      </TextView>

      <Button onPress={handleToSignIn}>
        <Text>VOLTAR</Text>
      </Button>
    </Container>
  );
};

export default EmBreve;
