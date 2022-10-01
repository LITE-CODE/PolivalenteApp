import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";

import Header from "../../../components/Header";
import Item from "./item";

import { getSchoolWarns } from "../../../services/resources/school";
import useAuth from "../../../hooks/useAuth";

import { Container, Text, FlatList, FooterContainer, Content } from "./styles";
import Carregar from "../../../components/Carregar";

const AvisosGerais = ({ navigation }) => {

  const {user} = useAuth()
  const [state, setState] = useState({
    loading: false,
    perPage: 0,
    end: false,
    initial: true,
  });
  const [data, setData] = useState([]);

  const loadRepositories = async () => {
    if (state.loading || state.end) return;
    setState({ ...state, loading: true });
    const response = await getSchoolWarns(
      state.initial ? state.perPage : state.perPage + 8
    );
    if (response.data?.error) setData([]);
    var warns = response.data.warns.warns;
/*

      warns.forEach(item => {
        var permissions = item.permissions;
        if (permissions){
          permissions.some(x => {
            if (!user.permissions) return true;
            if (!user.permissions.includes(x)) return warns.filter(y => y.id != x.id)
            return false
        })
      }
      })
*/
    setData(data.length == 0 ? warns : [...new Set([...data, ...warns])]);
    setState({
      initial: false,
      perPage: Number(state.perPage) + 8,
      loading: false,
      end: response.data.warns.amount < state.perPage || warns.length == 0,
    });
  };

  useEffect(() => {
    if (data.length == 0) {
        loadRepositories();
    }
  }, []);

  const FooterList = () => {
    if (state.loading) {
      return (
        <View>
          <ActivityIndicator size={25} color={"#363636"} />
        </View>
      );
    } else if (state.end) {
      return (
        <FooterContainer>
          <Text>não há mais...</Text>
        </FooterContainer>
      );
    }
    return null;
  };

  if (data.length == 0) return <Carregar navigation={navigation} />;

  return (
    <>
      <Header navigation={navigation}></Header>
      <Container>
        <FlatList
          data={data}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => <Item user={user} item={item}/>}
          onEndReached={loadRepositories}
          onEndReachedThreshold={0.1}
          style={Content}
          ListFooterComponent={<FooterList />}
        />
      </Container>
    </>
  );
};

export default AvisosGerais;
