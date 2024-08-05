import { message, notification } from "antd";
import axios from "axios";

// 1.创建axios实例
export const request: any = axios.create({
  baseURL: "/api",
  timeout: 5000,
  timeoutErrorMessage: "请求超时，请稍后再试",
  withCredentials: true, // 允许跨域请求带cookies
});

// 添加请求拦截器(在发送请求之前做些什么)
request.interceptors.request.use((options) => {
  const accessToken = window.localStorage.getItem("ACCESS_TOKEN");
  if (!accessToken) {
    options.headers.Authorization = accessToken;
  }
  return { ...options };
});

// 添加响应拦截器(对响应数据做点什么)
request.interceptors.response.use(
  (response) => {
    // 解构出返回结果的数据
    const res = response.data;
    // 对自定义code码进行判断,将成功的数据返回出去
    const validateStatus = /^(2|3)\d{2}$/; // code为2或3开头的视作请求成功
    if (validateStatus.test(res.code)) {
      return Promise.resolve(res); // 直接return出去我们需要的data
    }
    // 判断失败的code码并作出提示等操作
    if (res.code === 401) {
      message.error("token失效，请重新登录！");
    } else {
      message.error(res.msg);
    }
    return Promise.resolve(res);
  },
  (error) => {
    const { response } = error;
    if (!response) {
      notification.error({ description: "服务异常", message: "" });
    }
    return Promise.reject(error); // 将错误继续返回给到具体页面
  }
);
