
import Feather from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';
import React, {useEffect, useState} from 'react';
import { Linking } from 'react-native';

import { OpenButton, OpenText, SupportColumn, IconColumn, SupportContainer, SupportTitle, SupoertDescription} from './styles';
import Services from '../../components/services';
import DashboardSelect from '../../components/dashboardSelect';
import Warn from '../../components/Warn';
import Layout from '../../components/layout';
import { getWarns } from '../../actions/warn';
import { LightTheme } from '../../styles/themes/light';

const Main = () => {
  const user = useSelector((state) => state.user);
  const warns = useSelector((state) => state.warn);
  const dispatch = useDispatch();

  const getData = async () => {
    await getWarns(dispatch)
  }
  const handleOpenSupport = () => {
    const supportLink = 'https://docs.google.com/forms/d/e/1FAIpQLSet53UYiRV8xHXJF-b3F8haTL3X15NRL_KSTPoLH8W39ZBDZQ/viewform?usp=sharing';

    Linking.canOpenURL(supportLink).then((supported) => {
      if (supported) {
        Linking.openURL(supportLink);
      }
    });
  };

  useEffect(() => { getData() }, [])


  return (
      <Layout>
            <Services/>
            <DashboardSelect title='Ultimos avisos' route=''/>
            {
            warns.slice(0, 3).map(({title, description, date}, index) => {

              return (
                 <Warn title={title} description={description} date={date} key={index}/>
              )

            })
            }
            <SupportContainer>
              <IconColumn>
                <Feather color={LightTheme.colors.primary} size={55} name='headphones'/>
              </IconColumn>
              <SupportColumn>
                  <SupportTitle>Suporte</SupportTitle>
                  <SupoertDescription>Tem algum problema? Nos mande uma mensagem e responderemos assim que possível.</SupoertDescription>
                  <OpenButton onPress={handleOpenSupport}>
                      <OpenText>
                        Abrir suporte
                      </OpenText>
                  </OpenButton>
              </SupportColumn>
            </SupportContainer>
  
      </Layout>
  );
};

export default Main;