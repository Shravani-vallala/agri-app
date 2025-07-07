import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true,
});

export const initCSRF = () => api.get('/sanctum/csrf-cookie');

export const loginUser = (data) => api.post('/api/login', data);

export const registerUser = (data) => api.post('/api/register', data);

export const getEquipment = () => axios.get('/api/equipment');
