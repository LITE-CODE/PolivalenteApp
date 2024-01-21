import { useSelector } from 'react-redux';
import Constants from 'expo-constants';
import React from 'react';

import { Container, Content, Row, MenuContainer, MenuContainerImage, MenuContainerText, MenuImage, MenuText} from './styles';
import clock from '../../../assets/imgs/menu/relogio.png'
import food from '../../../assets/imgs/menu/prato.png'
import fruit from '../../../assets/imgs/menu/fruta.png'
import drink from '../../../assets/imgs/menu/suco.png'
import Backnav from '../../components/backnav';

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
             <MenuImage source={food}/>
            </MenuContainerImage>
            <MenuContainerText>
                <MenuText>Macarrão</MenuText>
            </MenuContainerText>
          </MenuContainer>

          <MenuContainer>
            <MenuContainerImage>
              <MenuImage source={drink}/>
            </MenuContainerImage>
            <MenuContainerText>
                <MenuText>Macarrão</MenuText>
            </MenuContainerText>
          </MenuContainer>
        </Row>

        <Row>
          <MenuContainer>
            <MenuContainerImage>
              <MenuImage source={fruit}/>
            </MenuContainerImage>
            <MenuContainerText>
                <MenuText>Macarrão</MenuText>
            </MenuContainerText>
          </MenuContainer>

          <MenuContainer>
            <MenuContainerImage>
              <MenuImage source={clock}/>
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
