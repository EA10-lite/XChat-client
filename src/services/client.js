import axios from "axios";
import dotenv from 'dotenv';
dotenv.config()

axios.defaults.baseURL = process.env.BASE_API

axios.interceptors.request.use((config) => {
  config.headers["Accept"] = "application/json";
  config.headers["Content-Type"] = "application/json";

  config.referrerPolicy = "strict-origin-when-cross-origin";

  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;