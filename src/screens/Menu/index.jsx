import { useSelector, useDispatch} from 'react-redux';
import Constants from 'expo-constants';
import React, { useEffect } from 'react';

import { Container, Content, Row, MenuContainer, MenuContainerImage, MenuContainerText, MenuImage, MenuText} from './styles';
import clock from '../../../assets/imgs/menu/relogio.png';
import fruit from '../../../assets/imgs/menu/fruta.png';
import food from '../../../assets/imgs/menu/prato.png';
import drink from '../../../assets/imgs/menu/suco.png';
import formatDate from '../../utils/formatDate';
import Backnav from '../../components/backnav';
import { getMenu } from '../../actions/menu';

const Menu = () => {

  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu);

  const getData = async () => {
    const response = await getMenu(dispatch);
  }

  useEffect(() => {getData()}, []);

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

  console.log(menu)
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
                <MenuText>{menu.food}</MenuText>
            </MenuContainerText>
          </MenuContainer>

          <MenuContainer>
            <MenuContainerImage>
              <MenuImage source={drink}/>
            </MenuContainerImage>
            <MenuContainerText>
                <MenuText>{menu.drink}</MenuText>
            </MenuContainerText>
          </MenuContainer>
        </Row>

        <Row>
          <MenuContainer>
            <MenuContainerImage>
              <MenuImage source={fruit}/>
            </MenuContainerImage>
            <MenuContainerText>
                <MenuText>{menu.fruit}</MenuText>
            </MenuContainerText>
          </MenuContainer>

          <MenuContainer>
            <MenuContainerImage>
              <MenuImage source={clock}/>
            </MenuContainerImage>
            <MenuContainerText>
                <MenuText>{menu.lastUpdate ? formatDate(menu.lastUpdate) : menu.lastUpdate}</MenuText>
            </MenuContainerText>
          </MenuContainer>
        </Row>
      </Content>
    </Container>
  );
  
};

export default Menu;
