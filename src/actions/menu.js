import { setMenu } from '../redux/actions/menu';
import api from "../utils/api";


export const getMenu = async (dispatch) => {
  try {
    const response = await api.get('menu');
    const data = response.data;
    dispatch(setMenu(data));
    return data;
  } catch (error) {
    return { error: error?.response?.data };
  }
};