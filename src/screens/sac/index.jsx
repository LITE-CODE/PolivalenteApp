import { useSelector, useDispatch} from 'react-redux';
import Constants from 'expo-constants';
import React, { useState } from 'react';

import { Container, Content, Text } from './styles';
import Dropdown from '../../components/dropdown';
import Backnav from '../../components/backnav';
import { createSac } from '../../actions/sac';
import Button from '../../components/button';
import Input from '../../components/input';

const Sac = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [options, setOptions] = useState([
    { name: 'Sugestão',   select: true},
    { name: 'Denúncia',   select: false},
    { name: 'Reclamação',   select: false},
  ]);
  const [textError, setTextError] = useState(false);
  const [send, setSend] = useState(false);
  const [text, setText] = useState("");

  const sendData = async () => {
    if (!text.length) return setTextError(true);
    const response = await createSac({
      type: options.find(i => i.select == true).name,
      description: text,
      author:{
        name: user.name,
        id: user._id,
      }
    });
    if (!response.error){
      setSend(true);
      setText("");
    }
  }

  return (
    <Container statusBarHeight={Constants.statusBarHeight}>
      <Backnav text='SAC'/>
      <Content>
        <Text>Relate de forma anônima e segura atividades suspeitas ou violações. Sua contribuição é vital para manter nossa comunidade segura. Priorizamos seu anonimato e garantimos confidencialidade total. Junte-se a nós na promoção de um ambiente justo e saudável para todos.</Text>
        <Dropdown options={options} setOptions={setOptions}/>
        <Input 
            onChangeText={(x) => setText(x) & setTextError(false) & setSend(false)}
            buttonIcon={ text.length ? 'x-circle' : ''}
            onButtonClick={() => setText("")}
            placeholder="Descrição..." 
            initialIcon={'italic'}
            error={textError} 
            value={text}
        />
        <Button text={send ? 'ENVIADO!' : 'ENVIAR'} onPress={sendData} width='100%'/>
      </Content>
    </Container>
  );
  
};

export default Sac;
