import API from "@/utils/request";
import { LoginResponse } from "@/api/auth/interface";

export default {
  // 用户登录
  login: (req: {
    type: string;
    email: string;
    password: string;
  }): Promise<LoginResponse> => {
    return API.post("/auth/login/pwd", req);
  },
  // 用户注册
  signup: (req: { username: string; email: string; password: string }) =>
    API.post("/auth/signup", req),
  // 查询所有用户
  users: () => API.get("/auth/users"),
};
