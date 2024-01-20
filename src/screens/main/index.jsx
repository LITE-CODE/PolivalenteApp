
import { useDispatch, useSelector } from 'react-redux';
import Constants from 'expo-constants';
import React, {useEffect, useState} from 'react';

import { Container, TitleContainer, Title, Description } from './styles';
import Services from '../../components/services';
import DashboardSelect from '../../components/dashboardSelect';
import Warn from '../../components/Warn';
import Layout from '../../components/layout';
import { getWarns } from '../../actions/warn';

const Main = () => {
  const user = useSelector((state) => state.user);
  const warns = useSelector((state) => state.warn);
  const dispatch = useDispatch();

  const getData = async () => {
    await getWarns(dispatch)
  }
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
  
      </Layout>
  );
};

export default Main;