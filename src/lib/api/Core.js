import axios from 'axios';

const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true
  // timeout: 2000
});

request.interceptors.request.use(
  config => {
    const cfg = config;
    cfg.headers['Content-Type'] = 'application/json';
    return cfg;
  },
  error => {
    console.error(error);
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  response => response,
  error => {
    console.error(error);
    return Promise.reject(error);
  }
);

export default request;
