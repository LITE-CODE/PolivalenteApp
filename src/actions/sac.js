import { setSac } from '../redux/actions/sac';
import api from "../utils/api";


export const createSac = async (body, dispatch) => {
  try {
    const response = await api.post('sac/create/', body);
    const data = response.data;
    return data;
  } catch (error) {
    return { error: error?.response?.data };
  }
};