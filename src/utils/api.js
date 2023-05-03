import axios from 'axios';

import storage from './storage';

const api = axios.create({
    baseURL:'https://poli.darknx.repl.co/v1'
 })
 
 api.interceptors.request.use(async (config) => {
 
  const token =  await storage.get('token').response || '';
 
  
  config.headers = {
    'authorization': token
  }

  return config
 })
 
 export default api;