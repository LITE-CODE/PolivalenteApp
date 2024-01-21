import Constants from 'expo-constants';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Backnav from '../../components/backnav';
import Warn from '../../components/Warn';
import Options from '../../components/options';
import { Container, Content } from './styles';
import filterDates from '../../utils/filterDates';

const Warns = () => {

  const warns = useSelector((state) => state.warn);
  const dispatch = useDispatch();
  const [options, setOptions] = useState([
    { name: 'Hoje',   size: 1, select: false},
    { name: 'Semana', size: 7, select: false},
    { name: 'Mês',    size: 30, select: false},
    { name: 'Todos',  size: 365, select: true},
  ])

  return (
    <Container statusBarHeight={Constants.statusBarHeight}>
      <Backnav text='AVISOS'/>
      <Content>
        <Options options={options} setOptions={setOptions}/>
        {
            filterDates(warns, options.find(x => x.select == true).size, 'date').slice(0, 3).map(({title, description, date}, index) => {

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
