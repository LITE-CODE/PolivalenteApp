import storage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const api = axios.create({
    baseURL:'https://api.eepolivalente.com/v1'
 })
 
 api.interceptors.request.use(async (config) => {
 
  const token = await storage.getItem('token') || '';
 
  
  config.headers = {
    'authorization': token
  }

  return config
 })
 
 export default api;