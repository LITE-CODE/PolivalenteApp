import Constants from 'expo-constants';
import React, { useState } from 'react';

import Backnav from '../../components/backnav';
import Options from '../../components/options';
import { Container } from './styles';

const Warns = () => {
  const [options, setOptions] = useState([
    { name: 'Hoje', select: false},
    { name: 'Semana', select: false},
    { name: 'Mês', select: false},
    { name: 'Todos', select: true},
  ])

  return (
    <Container statusBarHeight={Constants.statusBarHeight}>
      <Backnav text='AVISOS'/>
      <Options options={options} setOptions={setOptions}/>
    </Container>
  );
  
};

export default Warns;
