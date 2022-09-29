import styled from 'styled-components';

export const Container = styled.View`
   justify-content: space-around;
   background-color: #ffffff;
   align-items: center;
   flex: 1;
`

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
  font-family: "Inter-Light";
  color: #eeeeee;
  
  `;

export const ButtonContainer = styled.View`
  flex: 0.5;
  
  `

export const IntroductionContainer = styled.View`
justify-content: center;
align-items: center;
  margin-top: 50px;
  background-color: #eeeeee;
  border-radius: 4px;
  width: 90%;
  padding: 15px;
  flex: 0.3;

`;
export const InputContainer = styled.View`
justify-content: space-evenly;
align-items: center;
  margin: 25px 0 ;
  background-color: #eeeeee;
  border-radius: 4px;
  width: 90%;
  padding: 15px;
  flex: 0.9;

`;

export const TitleInput = styled.TextInput`
  background-color: #acacac;
  width: 75%;
  height: 50px;
  padding: 10px;
  border-radius: 7px;

text-align: center;

`
export const DescriptionInput = styled.TextInput`
  background-color: #acacac;
  width: 65%;
  height: 100px;
  padding: 10px;
  border-radius: 7px;

text-align: center;

`
export const Label = styled.Text`
  margin-bottom: 2px;
  color: #acacac;
  font-size: 12;
`;

export const  TitleContainer = styled.View`
width: 100%;
align-items: center;
`
export const  DescriptionContainer = styled.View`
width: 100%;
align-items: center;
`