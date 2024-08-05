const express = require("express");
const IP = require("ip");
const path = require("path");
const bodyParser = require("body-parser");
const login = require("./routerApi/login"); // 登录页面接口

const app = express(); //使用express函数

app.use(bodyParser.json()); // 支持post请求参数格式
app.use(bodyParser.urlencoded({ extended: true }));

// —————————————————————————————————————————在线访问注册—————————————————————————————————————————
// 告诉 Express 静态文件存放的目录
app.use(express.static('public'));

// —————————————————————————————————————————接口注册—————————————————————————————————————————————
// 注册登陆页面接口
app.use("/api", login);

// ———————————————————————————————————————————启动服务器—————————————————————————————————————————
// 启动服务器并进行监听
app.listen("8080", IP.address()); // 端口号——随意，不冲突就好

console.log("接口运行地址：", IP.address() + ":8080");

// 文件路径
const filePath = "/dataBase/login.xls";

// 获取文件的绝对路径
const absolutePath = path.resolve(filePath);

// 获取文件的目录路径
const directoryPath = path.dirname(absolutePath);

console.log("文件的绝对路径:", absolutePath);
console.log("文件的目录路径:", directoryPath);

// 获取文件的相对路径
const currentDirectory = process.cwd();
const relativePath = path.relative(currentDirectory, absolutePath);

console.log("文件的相对路径:", relativePath);
