import React, { useState, useEffect } from "react";
import { Keyboard } from "react-native";
import NetInfo from "@react-native-community/netinfo";

import Header from "../../../components/Header";
import {
  Container,
  Text,
  ButtonContainer,
  SendButton,
  SendButtonText,
  IntroductionContainer,
  InputContainer,
  TitleInput,
  DescriptionInput,
  Label,
  TitleContainer,
  DescriptionContainer,
} from "./styles";

import { postChat } from "../../../services/resources/statistics";
const wifiState = () => NetInfo.fetch().then((state) => state.isConnected);
const Carregar = ({ navigation }) => (
  <>
    <Header navigation={navigation} />
    <Container>
      <Text>carregando...</Text>
    </Container>
  </>
);

const Sugestoes = ({ navigation }) => {
  const [feedback, setFeedback] = useState({ title: "", description: "" });
  const [keybordStatus, setKeyboardStatus] = useState(true);
  const [text, setText] = useState("ENVIAR");
  const [focus, setFocus] = useState(null);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () =>
      setKeyboardStatus(false)
    );
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setFocus(null);
      setKeyboardStatus(true);
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const sendChat = async () => {
    if (!feedback.title || !feedback.description)
      return setError("Complete todos os campos");

    setText("ENVIANDO...");

    const response = await postChat({
      type: "general",
      title: feedback.title,
      description: feedback.description,
    });
    setText("ENVIADO");
    setFeedback({ title: "", description: "" });
  };

  return (
    <>
      <Header navigation={navigation} />
      <Container>
        {keybordStatus && (
          <IntroductionContainer>
            <Text>
              Envie sugestões, denuncias, críticas para melhoria da escola e do
              aplicativo, Todas mensagens enviadas são totalmente anonimas para
              melhor confiança e proteção dos alunos.
            </Text>
          </IntroductionContainer>
        )}
        <InputContainer>
          {focus != "description" || focus == null ? (
            <TitleContainer>
              <Label>titulo</Label>
              <TitleInput
                placeholder={"telhado da escola"}
                maxLength={150}
                value={feedback.title}
                onChangeText={(text) =>
                  setFeedback({ ...feedback, title: text })
                }
                onFocus={() => setFocus("title")}
                onBlur={() => setFocus(null)}
              />
            </TitleContainer>
          ) : (
            <></>
          )}
          {focus != "title" || focus == null ? (
            <DescriptionContainer>
              <Label>Descrição</Label>
              <DescriptionInput
                placeholder={"trocar as telhas..."}
                maxLength={2000}
                multiline={true}
                numberOfLines={5}
                value={feedback.description}
                onChangeText={(text) =>
                  setFeedback({ ...feedback, description: text })
                }
                onFocus={() => setFocus("description")}
                onBlur={() => setFocus(null)}
              />
            </DescriptionContainer>
          ) : (
            <></>
          )}
        </InputContainer>

        <ButtonContainer>
          <SendButton onPress={sendChat}>
            <SendButtonText>{text}</SendButtonText>
          </SendButton>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default Sugestoes;
