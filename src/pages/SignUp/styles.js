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
  margin-top:  5%;
  margin-bottom: 6.5%;

  width: 100%;


`;
export const TitleView = styled.View`

  align-items: center;
  width: 90%;
  flex: 1.2;
`;
export const TextContainer = styled.View`
align-items: flex-start;
  width: 80%;
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


export const GeneralError = styled.View`

    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-color: transparent;
    border-bottom-width: 1.5px;
    width: 50%;
    height: auto;
    padding: 4px;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
margin-top: 10px;
    background-color: #FEBBBB;
    border-bottom-color: red;

`

export const GeneralText = styled.Text`
    font-size: 12;
    color: #363636;
`