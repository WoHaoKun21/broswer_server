import { request } from "@/utils/requestconfig";

// 登录页面
export function login(data: any) {
  return request("/login", { method: "POST", data }); // POST传参使用data，GET使用params
}

// 账户信息查询
export function getUserInfo() {
  return request("/userInfo", { method: "GET" });
}
