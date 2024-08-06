import { request } from "@/utils/requestconfig";

// 购物车列表
export function getPublicMusicList(params) {
  return request("/public/list", { method: "get", params }); // POST传参使用data，GET使用params
}
