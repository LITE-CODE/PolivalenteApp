import { Menu, Text } from "./styles";
import NetInfo from "@react-native-community/netinfo";
import storage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from "react";
import { getMenu } from "../../../../services/resources/school";

const wifiState = () => NetInfo.fetch().then(state => state.isConnected);
const Carregar = () => (
  <>
    <Text>carregando...</Text>
  </>
);

const Menus = (props) => {
  const [load, setLoad] = useState({ storage: false, api: false });
  const [menu, setMenu] = useState();

  const loadMenu = async () => {
    const shift = props.user.shift
      .replace("manhã", "afternoon")
      .replace("tarde", "morning")
      .replace("noite", "night");

      if (wifiState()){
        const response = await getMenu(shift)
          if (response?.error) {
            console.log("error");
          }
          setMenu(response.data.menu);
          await storage.setItem("menu", JSON.stringify(response.data.menu));
          setLoad({ ...load, api: true });
          props.onLoad(!menu);
        } else {
          const storageMenu = await storage.getItem("menu");
            setMenu(JSON.parse(storageMenu));
            setLoad({ ...load, storage: true });
            props.onLoad(!menu);
        }
  };

  useEffect(() => {
    if (props.user && load.api == false) {
      loadMenu();
    } 
  }, []);

  if (!load.api && !load.storage) return <Carregar />;

  return (
    <>
      <Menu>
        <Text>comida: {menu?.food ? menu.food : "sem comida"}</Text>
        <Text>bebida: {menu?.drink ? menu.drink : "sem bebida"}</Text>
        <Text>fruta: {menu?.fruit ? menu.fruit : "sem fruta"}</Text>
        <Text></Text>
        <Text></Text>
        <Text>Cardapio do dia {menu?.date}</Text>
      </Menu>
    </>
  );
};

export default Menus;
