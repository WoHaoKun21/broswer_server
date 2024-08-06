import { request } from "@/utils/requestconfig";

// 获取所有音乐列表
export function getMusicList(params) {
  return request("/notes/list", { method: "get", params }); // POST传参使用data，GET使用params
}

// 添加到我喜欢
export function addLike(id) {
  return request(`/notes/addLike?musicId=${id}`, { method: "GET" });
}

// 将音乐移除喜欢
export function removeLike(id) {
  return request(`/notes/removeLike?musicId=${id}`, { method: "GET" });
}
