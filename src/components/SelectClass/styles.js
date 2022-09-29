import styled from "styled-components";

export const Container = styled.View`
  margin-top: 50px;

  background-color: #eeeeee;
  border-radius: 4px;
  width: 90%;
  height: auto;
  min-height: 10%;
  padding: 15px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Option = styled.Pressable`
  margin: 3px;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  height: 30px;
  background-color: #acacac;
  width: auto;
  min-width: 70px;
  padding: 3px 10px;
  border-radius: 5.5px;

  ${(props) =>
    props.select
      ? `
background-color: #F6D03C;
opacity: 0.7;
border-radius: 7px;
`
      : ""}
`;

export const OptionText = styled.Text`
  color: #363636;
  ${(props) =>
    props.select
      ? `
margin-right: 10px;
`
      : ""}
`;
