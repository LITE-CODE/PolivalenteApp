import { setClass } from '../redux/actions/class';
import api from "../utils/api";


export const getClass = async (id, dispatch) => {
  try {
    const response = await api.post('class/', { id });
    const data = response.data.class;
    dispatch(setClass(data));
    return data;
  } catch (error) {
    return { error: error?.response?.data };
  }
};