import api from '../api';

export const signIn = async (data) => {
  return api.post('/user/signin', data).catch((error) => {
    return { error };
  });
};

export const signUp = async (data) => {
  return api.post('/user/signup', data).catch((error) => {
    return { error };
  });
};

export const me = async () => {
  return api.get('/user/me').catch((error) => {
    return { error };
  });
};

export const repportCard = async () => {
  return api.get('/user/reportCard').catch((error) => {
    return { error };
  });
};
