import styled from "styled-components";

/* Containers */
export const Container = styled.View`
  justify-content: center;
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  text-align: center;
  width: 100%;
`;
export const TextView = styled.View`
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding: 10%;
`;

/* Buttons */
export const Button = styled.Pressable`
  justify-content: center;
  align-items: center;
  background: #f6d03c;
  border-radius: 2px;
  height: 45px;
  width: 150px;
`;

/* Texts */
export const Text = styled.Text`
  font-family: "Inter-Medium";
  color: #eeeeee;
`;

export const Title = styled.Text`
  font-family: "Inter-Bold";
  color: #363636;
  font-size: 30;
`;

export const Description = styled.Text`
  text-align: center;
  margin-top: 10px;
  color: #acacac;
  font-size: 15;
`;
