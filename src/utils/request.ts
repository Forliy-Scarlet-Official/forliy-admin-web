import axios from "axios";

const API = axios.create({
  // baseURL: "/868154-0-default",
  baseURL: "http://localhost:11810",
  timeout: 10000,
});

API.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default API;
