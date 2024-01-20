import { setWarn } from '../redux/actions/warn';
import api from "../utils/api";


export const getWarns = async (dispatch) => {
  try {
    const response = await api.get('warn/all');
    const data = response.data;
    dispatch(setWarn(data));
    return data;
  } catch (error) {
    return { error: error?.response?.data };
  }
};