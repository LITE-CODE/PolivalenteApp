import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import Constants from 'expo-constants';

import Backnav from '../../components/backnav';
import { Container, Content, Row, MenuContainer, MenuContainerImage, MenuContainerText, MenuImage, MenuText} from './styles';

const Menu = () => {

  const warns = useSelector((state) => state.warn);

  const clockList = [
    'https://imgur.com/bZGK9tM'
  ]

  const fruitList = [
    'https://imgur.com/uUgCPBQ'
  ]

  const foodList = [
    'https://imgur.com/8vmLuYt'
  ]

  const drinkList = [
    'https://imgur.com/JmpGqmt'
  ]

  const getRandomLink = (links) => links[Math.floor(Math.random() * links.length)];

  return (
    <Container statusBarHeight={Constants.statusBarHeight}>
      <Backnav text='Cardápio'/>
      <Content>
        <Row>
          <MenuContainer>
            <MenuContainerImage>
              <MenuImage source={{uri: getRandomLink(foodList)}}/>
            </MenuContainerImage>
            <MenuContainerText>
                <MenuText>Macarrão</MenuText>
            </MenuContainerText>
          </MenuContainer>

          <MenuContainer>
            <MenuContainerImage>
              <MenuImage source={{ uri: getRandomLink(drinkList)}}/>
            </MenuContainerImage>
            <MenuContainerText>
                <MenuText>Macarrão</MenuText>
            </MenuContainerText>
          </MenuContainer>
        </Row>

        <Row>
          <MenuContainer>
            <MenuContainerImage>
              <MenuImage source={{ uri: getRandomLink(fruitList)}}/>
            </MenuContainerImage>
            <MenuContainerText>
                <MenuText>Macarrão</MenuText>
            </MenuContainerText>
          </MenuContainer>

          <MenuContainer>
            <MenuContainerImage>
              <MenuImage source={{uri: getRandomLink(clockList)}}/>
            </MenuContainerImage>
            <MenuContainerText>
                <MenuText>Macarrão</MenuText>
            </MenuContainerText>
          </MenuContainer>
        </Row>
      </Content>
    </Container>
  );
  
};

export default Menu;
