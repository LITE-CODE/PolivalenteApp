import Constants from 'expo-constants';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Backnav from '../../components/backnav';
import Warn from '../../components/Warn';
import Options from '../../components/options';
import { Container, Content } from './styles';

const Warns = () => {
  
  const warns = useSelector((state) => state.warn);
  const dispatch = useDispatch();
  const [options, setOptions] = useState([
    { name: 'Hoje',   select: false},
    { name: 'Semana', select: false},
    { name: 'Mês',    select: false},
    { name: 'Todos',  select: true},
  ])

  return (
    <Container statusBarHeight={Constants.statusBarHeight}>
      <Backnav text='AVISOS'/>
      <Content>
        <Options options={options} setOptions={setOptions}/>
        {
            warns.slice(0, 3).map(({title, description, date}, index) => {

              return (
                 <Warn title={title} description={description} date={date} key={index}/>
              )

            })
            }
      </Content>
    </Container>
  );
  
};

export default Warns;
