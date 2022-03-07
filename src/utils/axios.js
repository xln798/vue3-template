import axios from 'axios';

axios.defaults.baseURL = '/';
axios.interceptors.response.use((res) => {
  console.log(res, 111);
  return res.data;
}, (error) => Promise.reject(error));

export default axios;
