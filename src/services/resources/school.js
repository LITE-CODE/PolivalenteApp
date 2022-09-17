import api from '../api';

export const getSchoolWarns = async (start) => {
  const params = start ? { params: { start } } : {};
  return api.get('/school/warns', null, params).catch((error) => {
    return  error.response?.data;
  });
};

export const getCalendary = async (start) => {
  const params = start ? { params: { start } } : {};
  return api.get('/school/calendary', null, params).catch((error) => {
    return  error.response?.data;
  });
};

export const getMenu = async (shift) => {
  return api.get('/school/menu/' + shift).catch((error) => {
    return  error.response?.data;
  });
};
