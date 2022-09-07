import styled from "styled-components";

export const Container = styled.View`
  background-color: #ffffff;
  align-items: center;
  flex: 1;
`;

export const Label = styled.Text`
  margin-bottom: 2px;
  color: #acacac;
  font-size: 12;
`;
export const ErrorLabel = styled.Text`
  margin-bottom: 2px;
  font-size: 12;
  color: red;
`;
export const LabelPassword = styled.Text`
  margin-bottom: 2px;
  color: #a6d3fd;
  font-size: 12;
`;
export const InputsView = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 2;
`;

export const UpdatePassord = styled.Pressable`
  align-items: flex-end;
  margin: 1.5%;
`;

export const ArrowView = styled.View`
  align-items: flex-start;
  margin-bottom: 6.5%;
`;
export const TitleView = styled.View`
  justify-content: center;
  flex: 1.2;
`;

export const LoginButtonView = styled.View`
  align-items: center;
  height: 100px;
  width: 100%;
  flex: 1;
`;

export const LoginButton = styled.Pressable`
  justify-content: center;
  align-items: center;
  background: #f6d03c;
  border-radius: 4px;
  height: 45px;
  width: 150px;
`;

export const LoginText = styled.Text`
  font-family: "Inter-Medium";
  color: #eeeeee;
`;
export const Title = styled.Text`
  font-family: "Inter-Bold";
  color: #363636;
  font-size: 30;
`;

export const Description = styled.Text`
  color: #acacac;
  font-size: 15;
`;
