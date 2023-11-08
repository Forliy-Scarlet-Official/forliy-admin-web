import API from "@/utils/request";

interface LoginRes {
  user: {
    id: number;
    username: string;
    email: string;
    status: number;
    createdDate: string;
  };
  token: string;
  tokenVersion: number;
  tokenExpireAt: string | null;
}

export default {
  // 用户登录
  login: (req: {
    type: string;
    email: string;
    password: string;
  }): Promise<LoginRes> => API.post("/auth/login", req),
  // 用户注册
  signup: (req: { username: string; email: string; password: string }) =>
    API.post("/auth/signup", req),
  // 查询所有用户
  users: () => API.get("/auth/users"),
};
