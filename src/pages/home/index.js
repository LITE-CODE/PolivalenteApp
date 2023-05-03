import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';
import Loading from '../loading';
import { View, Text } from 'react-native';
import Feather from "react-native-vector-icons/Feather";
import DashboardLayout from '../../components/dashboardLayout';
import { Container, FlatList, ItemsContainer, Item} from './styles';

const Home = () => {

  const { getCurrentUser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();
  const [user, setUser] = useState();

  const data = [
    { id: 1, text: 'Horarios' },
    { id: 2, text: 'Boletim' },
    { id: 3, text: 'Turma' },
    { id: 4, text: 'Item 4' },
    { id: 5, text: 'Item 5' },
    { id: 6, text: 'Item 6' },
  ];
  const Element = ({ item }) => {
    return (
      <Item style={{ flex: 1, margin: 8 }}>
        <Text>{item.text}</Text>
      </Item>
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getCurrentUser();
      if (userData.error == 'not JWT token') return navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
      setUser(userData);
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
      contentContainerStyle={{ padding: 8 }}
    />
      <Feather onPress={(x) => setOpen(!open)} name="chevron-down" size={35} color={'black'} />
       </ItemsContainer>
    </DashboardLayout>
  )
}
//chevron-up
export default Home