import api from '../api';

export const getSchoolWarns = async (start) => {
  const params = start ? { params: { start } } : {};
  return api.get('/school/warns', null, params).catch((error) => {
    return { error };
  });
};

export const getCalendary = async (start) => {
  const params = start ? { params: { start } } : {};
  return api.get('/school/calendary', null, params).catch((error) => {
    return { error };
  });
};

export const getMenu = async (shift) => {
  const params = start ? { params: { start } } : {};
  return api.get('/school/menu/' + shift).catch((error) => {
    return { error };
  });
};
