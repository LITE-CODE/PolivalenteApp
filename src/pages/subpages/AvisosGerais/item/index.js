import { useState } from "react";

import UserCircle from "../../../../components/userCircle";
import useAuth from "../../../../hooks/useAuth";

import { Container, Title, Description, Text, TitleText } from "./styles";

const Item = ({ item, user }) => {

  var negged = false;


  var permissions = item.permissions;
if (permissions){
  var negged = permissions.some(x => {
    if (!user.permissions) return true;
    if (!user.permissions.includes(x)) return true
    return false
})
}


  if (negged) return null;

  
  return (
    <Container>
      <Title>
        <UserCircle name={String(item.authorId)} />
        <TitleText>{item.authorId}</TitleText>
      </Title>

      <Description>
        <Text>{item.text}</Text>
      </Description>
    </Container>
  );
};

export default Item;
