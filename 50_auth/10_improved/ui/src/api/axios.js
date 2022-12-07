import axios from 'axios';
import { user } from '../main';

const instance = axios.create({
  baseURL: '/api',
  timeout: 1000,
});

instance.interceptors.request.use((config) => {
  // トークンがあればAuthorizationヘッダーに付与させる
  config.headers['Authorization'] = user.value?.token || '';
  return config;
});

export default instance;
