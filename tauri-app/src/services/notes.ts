import { request } from "@/utils/requestconfig";

// 获取所有音乐列表
export function getMusicList() {
  return request("/notes/list", { method: "get" }); // POST传参使用data，GET使用params
}

// 添加音乐到我喜欢
export function getUserInfo() {
  return request("/userInfo", { method: "GET" });
}
