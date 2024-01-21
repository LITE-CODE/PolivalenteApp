import storage from '@react-native-async-storage/async-storage';
import { setUser } from '../redux/actions/user';
import { getClass } from './class';
import api from "../utils/api";


export const getUser = async (dispatch) => {
  try {
    const response = await api.get('user/get-user');
    const data = response.data?.user;
    dispatch(setUser(data));
    if (data?.userClass) getClass(data?.userClass, dispatch);
    return data;
  } catch (error) {
    return { error: error?.response?.data };
  }
};

export const signIn = async (body, dispatch) => {
  try {
    const response = await api.post('user/signin', body);
    const data = response.data?.token;
    if (!data) return  {
      error: { msg: "erro na autenticação" }
    }
    storage.setItem('token', data);
    var user = await getUser(dispatch);
    return user;
  } catch (error) {
    return { error: error?.response?.data };
  }
};

export const signUp = async (body, dispatch) => {
  try {
    const response = await api.post('user/signup', body);
    const data = response.data?.token;
    if (!data) return  {
      error: { msg: "erro na autenticação" }
    }
    storage.setItem('token', data);
    var user = await getUser(dispatch);
    return user;
  } catch (error) {
    return { error: error?.response?.data };
  }
};