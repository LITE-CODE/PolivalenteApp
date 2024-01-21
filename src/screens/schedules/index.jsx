import Feather from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import Constants from 'expo-constants';

import DaysOptions from '../../components/daysOptions';
import Backnav from '../../components/backnav';
import { Container, Content, IconContainer, Grade, GradeContainer, Table, Days, DaysText, IconButton} from './styles';
import { LightTheme } from '../../styles/themes/light';

const Schedules = () => {

  const classe = useSelector((state) => state.class);
  const [options, setOptions] = useState([
    { name: 'seg',   select: false},
    { name: 'ter',   select: false},
    { name: 'qua',   select: false},
    { name: 'qui',   select: false},
    { name: 'sex',   select: true},
  ]);

  const handleOptions = (type) => {
    const currentIndex = options.findIndex((item) => item.select === true);
    const totalOptions = options.length;
  
    let nextIndex;
    if (type === '-') {
      nextIndex = (currentIndex - 1 + totalOptions) % totalOptions;
    } else {
      nextIndex = (currentIndex + 1) % totalOptions;
    }
  
    const newOptions = options.map((item, index) => ({
      ...item,
      select: index === nextIndex,
    }));
  
    setOptions(newOptions);
  };

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
    ]
  ]

  if (!classe.schedule) return <Loading text='carregando...'/>
  
  return (
    <Container statusBarHeight={Constants.statusBarHeight}>
      <Backnav text='HÓRARIOS'/>
      <Content>
        <DaysOptions options={options} setOptions={setOptions}/>
        <Table>
          <IconContainer>
              <IconButton onPress={() => handleOptions('-')}>
                 <Feather color={LightTheme.colors.secondaryText} size={40} name='chevron-left'/>
              </IconButton>
          </IconContainer>
          <GradeContainer>
            <Grade>
            {
                 classe.schedule[options.findIndex(s => s.select == true)].map((item, index) => {
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
          <IconButton onPress={() => handleOptions('+')}>
                <Feather color={LightTheme.colors.secondaryText} size={40} name='chevron-right'/>
              </IconButton>
          </IconContainer>
        </Table>
      </Content>
    </Container>
  );
  
};

export default Schedules;
