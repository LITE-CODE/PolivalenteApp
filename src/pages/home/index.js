import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';
import Loading from '../loading';
import { View, Text } from 'react-native';
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import DashboardLayout from '../../components/dashboardLayout';
import { Container, FlatList, RedirectText, WarnRedirectText,  WarnTitleContainer, WarnRedirect, ItemsContainer, Item, ExpansiveButton, ItemText, Warn, Redirect, FoodContainer, FoodIcon, FoodInformations, FoodTitle, FoodText, FoodDate, WarnFlatlist, WarnsContainer, WarnFooter} from './styles';
import { LightTheme } from '../../styles/themes/LightTheme';

const formatarData = timestamp => {
  const data = new Date(timestamp);
  const dia = data.getDate().toString().padStart(2, '0');
  const mes = (data.getMonth() + 1).toString().padStart(2, '0');
  const ano = data.getFullYear();
  return `${dia}/${mes}/${ano}`;
};


const Home = () => {

  const { getCurrentUser, getCurrentMenu, getCurrentWarns} = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();
  const [user, setUser] = useState();
  const [menu, setMenu] = useState(null);
  const [warns, setWarns] = useState(null);

  const data = [
    { id: 1, text: 'Horarios', icon: 'clock'},
    { id: 2, text: 'Boletim', icon: 'file-text'},
    { id: 3, text: 'Turma', icon: 'users'},
    { id: 4, text: 'Criar turma', icon: 'plus-square'},
    { id: 5, text: 'Cadastrar aluno', icon: 'user-plus'},
    { id: 6, text: 'Novo aviso', icon: 'inbox'},
  ];
  const Element = ({ item }) => {
    return (
      <Item style={{ flex: 1, margin: 8 }}>
        <Feather onPress={(x) => {}} name={item.icon} size={45} color={LightTheme.colors.primary} />
        <ItemText>{item.text}</ItemText>
      </Item>
    );
  };

  const WarnItem = ({ item }) => {

    return (
      <Warn style={{ flex: 1 }}>
        <View>
            <FoodTitle>{item?.title}</FoodTitle>
            <FoodText>{item?.resume}</FoodText>
        </View>
        <WarnFooter>
          <FoodDate>
            {item?.date}
          </FoodDate>
          <WarnRedirect>
            <WarnRedirectText>
                Ver post
            </WarnRedirectText>
          </WarnRedirect>
        </WarnFooter>
      </Warn>
    );
  };

  useEffect(() => {
    const fetchData = async () => {

      const userData = await getCurrentUser();
      if (userData.error == 'not JWT token') return navigation.reset({
        index: 0,
        routes: [{ name: 'InitialLoginPage' }],
      });
      setUser(userData);
      const menuData = await getCurrentMenu(userData?.accessToken, userData?.shift);
      setMenu(menuData)
      const warnsData = await getCurrentWarns(userData?.accessToken);
      setWarns(warnsData)

    };
    fetchData();
  }, []);

   if (!user) return <Loading text={"carregando dados..."}/>

  return (
    <DashboardLayout navigationActive={'Home'}>
       <ItemsContainer>
            <FlatList
      data={open ? data : data.slice(0,3)}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <Element item={item} />}
      numColumns={3}
    />
      <ExpansiveButton>
       <Feather onPress={(x) => setOpen(!open)} name={open ? 'chevron-up' : 'chevron-down'} size={35} color={LightTheme.colors.text} />
      </ExpansiveButton>
       </ItemsContainer>
       <FoodContainer>
        <FoodIcon>
        <MaterialCommunityIcons name={'food-fork-drink'} size={60} color={LightTheme.colors.primary} />
        </FoodIcon>
       
          <FoodInformations>
            <FoodTitle>
              Cardápio do dia
            </FoodTitle>
            {menu == null && (
              <FoodText>
                 carregando cardápio...
              </FoodText>
            )}
            {menu?.error ? 
            (
              <FoodText>
                cardápio indisponivel.
              </FoodText>
            ):(
              <>
                <FoodText>
            {menu?.food}
            </FoodText>
            <FoodText>
              {menu?.drink}
            </FoodText>
            <FoodText>
              {menu?.fruit}
            </FoodText>
            <FoodDate>
            {menu?.date}
            </FoodDate>
              </>
            )}
          </FoodInformations>
       </FoodContainer>
      <WarnsContainer>
        <WarnTitleContainer> 
        <FoodTitle>Ultimos posts</FoodTitle>
          <Redirect>
            <RedirectText>Ver tudo</RedirectText>
          </Redirect>
        </WarnTitleContainer>
        {
          warns == null ? (
            <FoodText>
              sem postagens.
            </FoodText>
          ):(
            <>
                     <FlatList
      data={warns?.warns?.slice(0,3)}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <WarnItem item={item} />}
    />
            </>
          )
        }
      </WarnsContainer>
    </DashboardLayout>
  )
}
//chevron-up
export default Home