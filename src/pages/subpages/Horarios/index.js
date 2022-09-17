import React, { useState, useEffect } from "react";

import { Container, Text, LoginButton, LoginText } from "./styles";

import Header from "../../../components/Header";
import useAuth from "../../../hooks/useAuth";
import Schedules from "./Schedules";
import Menu from "./Menu";

const Carregar = ({ navigation }) => (
  <>
    <Header navigation={navigation} />
    <Container>
      <Text>carregando...</Text>
    </Container>
  </>
);

const Horarios = ({ navigation }) => {
  var { user, getCurrentUser } = useAuth();
  const [schedule, setSchedule] = useState({ load: false, render: true });
  const [menu, setMenu] = useState({ load: false, render: false });

  useEffect(() => {
    getCurrentUser();
  }, []);

  if (!user) return <Carregar />;

  return schedule.render ? (
    <>
      <Header navigation={navigation} />
      <Container>
        <Schedules
          user={user}
          onLoad={(load) => setSchedule({ load: true, render: true })}
        />
        <LoginButton
          onPress={() => {
            setSchedule({ ...menu, render: false });
            setMenu({ ...menu, render: true });
          }}
        >
          <LoginText>CARDAPIO</LoginText>
        </LoginButton>
      </Container>
    </>
  ) : (
    <>
      <Header navigation={navigation} />
      <Container>
        <Menu
          user={user}
          onLoad={(load) => setMenu({ load: true, render: true })}
        />
        <LoginButton
          onPress={() => {
            setMenu({ ...menu, render: false });
            setSchedule({ ...menu, render: true });
          }}
        >
          <LoginText>HORARIOS</LoginText>
        </LoginButton>
      </Container>
    </>
  );
};

export default Horarios;
