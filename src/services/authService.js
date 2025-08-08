import axios from 'axios';
const API = 'http://localhost:3000/userval';
 
export const register = (data) => axios.post(`${API}/register`, data);
localStorage.setItem("register",register);
export const login = async (data) => {
  const res = await axios.post(`${API}/login`, data);
  if (res) {
    localStorage.setItem('token', res.data.access_token);
  }
  return res.data;
};

export const logout = () => {
  localStorage.removeItem('token');
};