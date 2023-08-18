import axios from "axios";

const API = axios.create({
  baseURL: "/868154-0-default",
  timeout: 1000
})

API.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error);
  }
)

API.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error);
  }
)

export default API