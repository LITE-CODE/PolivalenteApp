import storage from "react-native-sync-localstorage";
import React, { useState, useEffect } from "react";

import {
  Text,
  SelectMenu,
  MenuOption,
  MenuOptionText,
  Carrossel,
  Schedules,
  MateryText,
  Matery,
} from "./styles";
import { getSchedules } from "../../../../services/resources/class";

const Carregar = () => (
  <>
    <Text>carregando...</Text>
  </>
);

const Scheduless = (props) => {
  const [select, setSelect] = useState();
  const [load, setLoad] = useState({ storage: false, api: false });
  const [schedules, setSchedules] = useState();
  const days = ["segunda", "terça", "quarta", "quinta", "sexta"];
  var currentDay = new Date(Date.now()).getDay();
  if (!select)
    setSelect(
      currentDay == 0 || currentDay == 6 ? "segunda" : days[currentDay - 1]
    );

  const storageSchedules = storage.getItem("schedules");
  if (storageSchedules && !load.storage) {
    setSchedules(storageSchedules);
    setLoad({ ...load, storage: true });
  }

  const loadSchedules = async () => {
    const response = await getSchedules(props.user.class);
    if (response?.error) {
      console.log("error");
    }
    setSchedules(response.data.schedule);
    storage.setItem("schedules", response.data.schedule);
    setLoad({ ...load, api: true });
    props.onLoad(!schedules);
  };

  useEffect(() => {
    if (props.user && load.api == false) {
      loadSchedules();
    }
  });

  if (!load.api && !load.storage) return <Carregar />;

  return (
    <>
      <SelectMenu>
        {days.map((x, index) => (
          <MenuOption
            key={index}
            select={x == select}
            onPress={() => setSelect(x)}
          >
            <MenuOptionText
              select={x == select}
              border={
                x == "sexta" ||
                x == select ||
                x == days[days.indexOf(select) - 1]
              }
            >
              {x}
            </MenuOptionText>
          </MenuOption>
        ))}
      </SelectMenu>
      <Carrossel>
        <Schedules>
          {Object.entries(schedules[select]).map((key, index, array) => (
            <Matery key={index} border={array.length == index + 1}>
              <MateryText>{key[0].split("-")[0]}</MateryText>
              <MateryText>{key[1]}</MateryText>
            </Matery>
          ))}
        </Schedules>
      </Carrossel>
    </>
  );
};

export default Scheduless;
