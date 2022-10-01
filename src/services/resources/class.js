import api from '../api';

export const getClassWarns = async (id, start) => {
  return api.get('/class/warns/' + id + '?start=' + start).catch((error) => {
    return  error.response?.data;
  });
};

export const getSchedules = async (id) => {
  return api.get('/class/schedules/' + id).catch((error) => {
    return  error.response?.data;
  });
};

export const getStudents = async (id) => {
  return api.get('/class/students/' + id).catch((error) => {
    return  error.response?.data;
  });
};

export const getTeachers = async (id) => {
  return api.get('/class/teachers/' + id).catch((error) => {
    return  error.response?.data;
  });
};

export const getClassInformations = async (id) => {
  return api.get('/class/' + id).catch((error) => {
    return  error.response?.data;
  });
};