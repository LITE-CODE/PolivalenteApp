import { Menu, Text } from "./styles";
import storage from "react-native-sync-localstorage";
import React, { useState, useEffect } from "react";
import { getMenu } from "../../../../services/resources/school";

const Carregar = () => (
  <>
    <Text>carregando...</Text>
  </>
);

const Menus = (props) => {
  const [load, setLoad] = useState({ storage: false, api: false });
  const [menu, setMenu] = useState();
const storageMenu = storage.getItem("menu");
  if (storageMenu && !load.storage) {
    setMenu(storageMenu);
    setLoad({ ...load, storage: true });
  }

  const loadMenu = async () => {
    const shift = props.user.shift
      .replace("manhã", "afternoon")
      .replace("tarde", "morning")
      .replace("noite", "night");
    const response = await getMenu(shift);
    if (response?.error) {
      console.log("error");
    }
    setMenu(response.data.menu);
    storage.setItem("menu", menu);
    props.onLoad(!menu);
  };

  useEffect(() => {
    loadMenu();
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
