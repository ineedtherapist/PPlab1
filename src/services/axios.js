// src/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api/', // Заміни на актуальний сервер
});

export default axiosInstance;
