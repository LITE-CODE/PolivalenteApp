import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from "react-native-vector-icons/Feather";
import NetInfo from "@react-native-community/netinfo";
import storage from '@react-native-async-storage/async-storage';
import React,{ useState, useEffect} from 'react'
import {Keyboard} from 'react-native';

import SelectClass from '../../../components/SelectClass';
import Header from '../../../components/Header';

import {postAvaliation} from '../../../services/resources/statistics'
import { getTeachers } from '../../../services/resources/class';
import useAuth from "../../../hooks/useAuth";

import { Container, Label, Title, SendButton, SendButtonText, Text, SelectContainer, Feedback, FeedbackContainer, ButtonContainer, StarsContainer, Input, GeneralError, GeneralText} from './styles';
import Carregar from '../../../components/Carregar';

const wifiState = () => NetInfo.fetch().then(state => state.isConnected);


export default function Avaliação({navigation}) {

  var { user } = useAuth();

  const [feedback, setFeedback] = useState({stars: 0, avaliation: "", select: ""});
  const [load, setLoad] = useState({ storage: false, api: false });
  const [keybordStatus, setKeyboardStatus] = useState(true);
  const [focus, setFocus] = useState(false)
  const [text, setText ] = useState("ENVIAR")
  const [error, setError] = useState(false)
  const [matters, setMatters] = useState();



  const loadMatters = async () => {

    if (wifiState()){
    const response = await getTeachers(user.class);
    if (response?.error) {
      console.log("error");
    }
    setMatters(response.data.teachers);
    setLoad({ ...load, api: true });
    await storage.setItem("matters", JSON.stringify(response.data.teachers));
  } else {
    const storageMatters = await storage.getItem("matters");
      setMatters(JSON.parse(storageMatters));
      setLoad({ ...load, storage: true });
  }
  };

  const sendAvaliation = async () => {
    if (!feedback.select) return setError("Nenhuma materia selecionada")
    if (!feedback.stars) return setError("Materia não avaliada")
    setText("ENVIANDO...")
    const response = await postAvaliation({
      stars: feedback.stars,
      observation: feedback.avaliation,
      matery: feedback.select,
      teacher: matters.find(matery => matery.matter == feedback.select)?.teacherID

    })
    setText("ENVIADO")
    setFeedback({stars: 0, avaliation: "", select: ""})
  }

  useEffect(() => {
    if (user && !load.api && !load.storage ) {
      loadMatters();
    } 
      });


  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => setKeyboardStatus(false));
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => setKeyboardStatus(true));
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);


  if (!user || !matters) return <Carregar navigation={navigation} />;

  const starProps = (id) => feedback.stars<id ? {name: 'md-star-outline', color: "#555555"} : {name: 'md-star-sharp', color: '#F8DC6D'}
  const setStars = (id) => {
    setFeedback({...feedback, stars: id})
    if (error == "Materia não avaliada") setError()
  }
  return (
    <>
    <Header/>
    <Container>
    {keybordStatus && (
       <SelectContainer>
       <SelectClass max={1} value={[...matters.map(x => x.matter)]} onUpdate={(selects) => {
        setFeedback({...feedback, select: selects[0]})
        if (error == "Nenhuma materia selecionada") setError()
        }}/>
         <Label>selecione para avaliar</Label>
       </SelectContainer>
    )}
       <FeedbackContainer>
        <Feedback>
 <>
 <Title>Você está satisfeito com essa materia?</Title>
          <StarsContainer>
            <Ionicons  onPress={() => setStars(1)} name={starProps(1).name} size={28} color={starProps(1).color} /> 
            <Ionicons  onPress={() => setStars(2)} name={starProps(2).name} size={28} color={starProps(2).color} /> 
            <Ionicons  onPress={() => setStars(3)} name={starProps(3).name} size={28} color={starProps(3).color} /> 
            <Ionicons  onPress={() => setStars(4)} name={starProps(4).name} size={28} color={starProps(4).color} /> 
            <Ionicons  onPress={() => setStars(5)} name={starProps(5).name} size={28} color={starProps(5).color} /> 
          </StarsContainer>
 </>
   
        <Input 
           placeholder={"onde posso melhorar?"}
           maxLength={2000}
           multiline={true}
           numberOfLines={5}
           value={feedback.avaliation }
     onChangeText={text => setFeedback({...feedback, avaliation: text})}
     onFocus={() => setFocus(true)}
     onBlur={() => setFocus(false)}
        />
   
        </Feedback>
{error && (
          <GeneralError>
            <GeneralText>{error}</GeneralText>
            <Feather name="alert-triangle" size={15} color="red" />
          </GeneralError>
        )}
       </FeedbackContainer>
<ButtonContainer>
<SendButton select={!feedback.select} onPress={sendAvaliation}>
        <SendButtonText>{text}</SendButtonText>
        </SendButton>
</ButtonContainer>
    </Container>
    </>
  )
}
