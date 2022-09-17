import storage from 'react-native-sync-localstorage';
import axios from 'axios';

const api = axios.create({
    baseURL:'https://api.eepolivalente.com/v1'
 })
 
 api.interceptors.request.use((config) => {
 
  const token =  storage.getItem('token') || '';
 
  
  config.headers = {
    'authorization': token
  }

  return config
 })
 
 export default api;