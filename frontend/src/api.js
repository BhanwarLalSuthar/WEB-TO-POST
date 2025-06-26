import axios from 'axios';

const api = axios.create({ baseURL: import.meta.env.base_api ||'http://localhost:5000/api' });
export default api;