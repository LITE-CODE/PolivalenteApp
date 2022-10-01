import { ActivityIndicator } from "react-native";

import Header from "../Header";
import { Container, Text } from "./styles";

const Carregar = ({ navigation }) => {
  return (
    <>
      <Header navigation={navigation} />
      <Container>
        <Text>
          <ActivityIndicator size={30} color={"#363636"} />
        </Text>
      </Container>
    </>
  );
};

export default Carregar;
