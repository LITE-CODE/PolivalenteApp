import { useSelector, useDispatch} from 'react-redux';
import Constants from 'expo-constants';
import React, { useState } from 'react';

import Dropdown from '../../components/dropdown';
import Backnav from '../../components/backnav';
import { Container, Content } from './styles';
import Input from '../../components/input';
import Button from '../../components/button';
import { createSac } from '../../actions/sac';

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
