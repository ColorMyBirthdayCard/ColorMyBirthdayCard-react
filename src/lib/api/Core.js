import axios from 'axios';

const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 2000
});

request.interceptors.request.use(
  config => {
    const temp = config;
    temp.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    return temp;
  },
  error => {
    console.error(error);
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  response => {
    const res = response.data;
    return res;
  },
  error => {
    console.error(error);
    return Promise.reject(error);
  }
);

export default request;
