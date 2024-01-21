import Feather from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import Constants from 'expo-constants';

import DaysOptions from '../../components/daysOptions';
import Backnav from '../../components/backnav';
import { Container, Content, IconContainer, Grade, GradeContainer, Table, Days, DaysText} from './styles';
import { LightTheme } from '../../styles/themes/light';

const Schedules = () => {

  const warns = useSelector((state) => state.warn);
  const [options, setOptions] = useState([
    { name: 'seg',   select: false},
    { name: 'ter',   select: false},
    { name: 'qua',   select: false},
    { name: 'qui',   select: false},
    { name: 'sex',   select: true},
  ]);

  const schedules = [
    [
      'mátematica',
      'portugues',
      'ingles',
      'recreio',
      'mátematica',
      'mátematica',
    ],
    [
      'mátematica',
      'ed. fisica',
      'portugues',
      'recreio',
      'ingles',
      'ingles',
    ],
    [
      'mátematica',
      'ed. fisica',
      'portugues',
      'recreio',
      'ingles',
      'ed. fisica',
    ],
    [
      'ingles',
      'portugues',
      'mátematica',
      'recreio',
      'ed. fisica',
      'ed. fisica'
    ],
    [
      'ingles',
      'mátematica',
      'ed. fisica',
      'recreio',
      'portugues',
      'ed. fisica',
    ],
  ]

  return (
    <Container statusBarHeight={Constants.statusBarHeight}>
      <Backnav text='HÓRARIOS'/>
      <Content>
        <DaysOptions options={options} setOptions={setOptions}/>
        <Table>
          <IconContainer>
              <Feather color={LightTheme.colors.secondaryText} size={40} name='chevron-left'/>
          </IconContainer>
          <GradeContainer>
            <Grade>
            {
                  schedules[0].map((item, index) => {
                    return (
                      <Days key={index}>
                        <DaysText>
                            {item}
                        </DaysText>
                      </Days>
                    )
                  })
            }
            </Grade>
          </GradeContainer>
          <IconContainer>
              <Feather color={LightTheme.colors.secondaryText} size={40} name='chevron-right'/>
          </IconContainer>
        </Table>
      </Content>
    </Container>
  );
  
};

export default Schedules;
