import axios from 'axios';

import storage from './storage';

const api = axios.create({
    baseURL:'https://830656a8-78af-4cdf-935c-49d2c12051db-00-38ec9n63j8jfl.worf.replit.dev/v3/'
 })
 
 api.interceptors.request.use(async (config) => {
 
  const token =  await storage.get('token')
  
  config.headers = {
    'authorization': token.response || token
  }

  return config
 })
 
 export default api;