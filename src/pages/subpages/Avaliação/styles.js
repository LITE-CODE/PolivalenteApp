import styled from "styled-components";

export const Container = styled.View`
   background-color: #ffffff;
  align-items: center;
justify-content: space-around;
  flex: 1;
`;

export const Text = styled.Text`
 color: #363636;
`

export const SendButton = styled.Pressable`
  justify-content: center;
  align-items: center;
  background: #f6d03c;
  border-radius: 4px;
  height: 45px;
  width: 150px;
  ${(props) => props.select? ` background-color: #ACACAC;`: ""}
`;

export const SendButtonText = styled.Text`
  font-family: "Inter-Medium";
  color: #eeeeee;
`;

export const Label = styled.Text`
  margin-bottom: 2px;
  color: #acacac;
  font-size: 12;
`;

export const SelectContainer = styled.View`
width: 100%;
justify-content: center;
align-items: center;
flex: 1;
`

export const ButtonContainer = styled.View`
  flex: 0.5;

`

export const FeedbackContainer = styled.View`

  width: 100%;
align-items: center;
justify-content: center;
  flex: 2;

`

export const Feedback = styled.View`
    background-color: #eeeeee;
    align-items: center;
    border-radius: 4px;
    padding: 15px;
    justify-content:space-around;
    width: 80%;
    height: 80%;

`
export const StarsContainer = styled.View`
  height: auto;
  width: 60%;
  justify-content: space-around;
  flex-direction: row;
  padding: 10px;


`

export const Input = styled.TextInput`
  background-color: #acacac;
  width: 75%;
  height: 50%;
  padding: 10px;
  border-radius: 7px;

text-align: center;

`

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
    margin-top: 5px;
    background-color: #FEBBBB;
    border-bottom-color: red;

`

export const GeneralText = styled.Text`
    font-size: 12;
    color: #363636;
`

export const Title = styled.Text`
    font-family: 'Inter-Bold';
    color: #363636;
    font-size: 14;
`