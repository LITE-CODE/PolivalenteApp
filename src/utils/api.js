import axios from 'axios';

import storage from './storage';

const api = axios.create({
    baseURL:'http://localhost:3000/v1'
 })
 
 api.interceptors.request.use(async (config) => {
 
  const token =  await storage.get('token') || '';
 
  
  config.headers = {
    'authorization': token
  }

  return config
 })
 
 export default api;