const express = require("express");
const IP = require("ip");
const bodyParser = require("body-parser");
const login = require("./routerApi/login"); // 登录页面接口
const music = require("./routerApi/music"); // 音乐接口

const app = express(); //使用express函数

app.use(bodyParser.json()); // 支持post请求参数格式
app.use(bodyParser.urlencoded({ extended: true }));

// —————————————————————————————————————————在线访问注册—————————————————————————————————————————
// 告诉 Express 静态文件存放的目录
app.use(express.static("public"));

// —————————————————————————————————————————接口注册—————————————————————————————————————————————
// 注册登陆页面接口
app.use("/api", login);
app.use("/api", music);

// ———————————————————————————————————————————启动服务器—————————————————————————————————————————
// 启动服务器并进行监听
app.listen("8080", IP.address()); // 端口号——随意，不冲突就好

console.log("接口运行地址：", "http://" + IP.address() + ":8080");
