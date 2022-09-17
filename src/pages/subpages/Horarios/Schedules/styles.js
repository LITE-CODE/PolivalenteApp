import styled from "styled-components";

export const Container = styled.View`
  justify-content: space-evenly;
  background-color: #ffffff;
  align-items: center;
  flex: 1;
`;

export const SelectMenu = styled.View`
  background-color: #eeeeee;
  flex-direction: row;
  border-radius: 5px;
  height: 35px;
  width: 90%;
`;
export const MenuOption = styled.Pressable`
  justify-content: center;
  height: 100%;
  width: 20%;

  ${(props) =>
    props.select
      ? `
background-color: #ACACAC;
border-radius: 7px;
`
      : ""}
`;

export const Carrossel = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  height: 50%;
  width: 90%;
`;

export const Schedules = styled.View`
  background-color: #eeeeee;
  align-items: center;
  border-radius: 5px;
  height: auto;
  padding: 5px;
  width: 70%;
`;

export const Matery = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 3px 15px;
  height: 10%;
  width: 90%;
  ${(props) =>
    !props.border
      ? `

border-bottom-color:#acacac;
  border-bottom-width: 0.4px;
`
      : ""}
`;

export const MenuOptionText = styled.Text`
  text-align: center;
  color: #acacac;
  ${(props) =>
    !props.border
      ? `

border-right-color: #ACACAC;
  border-right-width: 0.4px;
`
      : ""}
  ${(props) =>
    props.select
      ? `
color: #555555;
`
      : ""}
`;

export const MateryText = styled.Text`
  color: #505050;
`;
export const Text = styled.Text`
  color: #363636;
`;
