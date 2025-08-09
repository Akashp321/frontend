import axios from 'axios';
const API_URL = 'http://localhost:3000/userval';
export const login = (credentials) => {
  return axios.post(`${API_URL}/login`, credentials);
};
export const register = (userData) => {
  return axios.post(`${API_URL}/register`, userData);
};
export const fetchAllUsers = async () => {
  const response = await axios.get(`${API_URL}/`);
  localStorage.setItem('userData', JSON.stringify(response.data));
  return response.data;
};