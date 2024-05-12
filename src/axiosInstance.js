// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/', // Sua base URL aqui
  // Outras configurações globais, se necessário
});

export default axiosInstance;
