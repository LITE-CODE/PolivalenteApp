import { useSelector, useDispatch} from 'react-redux';
import Constants from 'expo-constants';
import React, { useState } from 'react';

import Dropdown from '../../components/dropdown';
import Backnav from '../../components/backnav';
import { Container, Content } from './styles';
import Input from '../../components/input';

const Sac = () => {
  const [options, setOptions] = useState([
    { name: 'Denúncia',   select: false},
    { name: 'Reclamação',   select: false}
  ]);
  const [text, setText] = useState("");

  return (
    <Container statusBarHeight={Constants.statusBarHeight}>
      <Backnav text='SAC'/>
      <Content>
        <Dropdown options={options} setOptions={setOptions}/>
        <Input 
        error={false} 
        placeholder="descrição..." 
        initialIcon={'italic'}
        onButtonClick={() => setText("")}
        value={text}
        onChangeText={(x) => setText(x)}
        buttonIcon={ text.length ? 'x-circle' : ''}
        />

      </Content>
    </Container>
  );
  
};

export default Sac;
