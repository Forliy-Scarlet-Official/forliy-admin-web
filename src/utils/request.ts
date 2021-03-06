import axios from "axios";
import { Method } from "axios";
import bus from "@/utils/bus";

axios.defaults.baseURL = import.meta.env.VITE_APP_BASEAPI;

// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    const response = error.response;
    switch (response.status) {
      case 401:
        bus.emit("onError", "登陆已过期");
        break;
      case 403:
        bus.emit("onError", "权限不足");
        break;
      case 404:
        bus.emit("onError", "找不到资源");
        break;
      case 500:
        bus.emit("onError", "服务端异常");
        break;
      case 503:
        bus.emit("onError", "服务端异常");
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);

export const get = (
  url: string,
  params?: any,
  options?: {
    type?: Method;
    path?: string;
  }
): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios({
      method: options?.type || "get",
      url: `${url}${options?.path || ""}`,
      params: params || {},
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const post = (
  url: string,
  data?: any,
  options?: {
    type?: Method;
    path?: string;
  }
): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios({
      method: options?.type || "post",
      url: `${url}${options?.path || ""}`,
      data: data || {},
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
