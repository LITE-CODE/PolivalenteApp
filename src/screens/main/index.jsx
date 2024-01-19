
import { useDispatch, useSelector } from 'react-redux';
import Constants from 'expo-constants';
import React, {useState} from 'react';

import { Container, TitleContainer, Title, Description } from './styles';
import Services from '../../components/services';
import Layout from '../../components/layout';

const Main = () => {
  const user = useSelector((state) => state.user);

  return (
      <Layout Layout>
            <Services/>
      </Layout>
  );
};

export default Main;