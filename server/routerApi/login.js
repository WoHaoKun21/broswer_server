const express = require("express");
const { jwtSign } = require("../JWT");
const { getExcelData, updateExcelData } = require("./index");
const router = express.Router();

let userId = null;

// 用户登录
router.post("/login", (request, response) => {
  const userList = getExcelData("database/dataBase.xls", 0);
  const user = userList.find((item) => item.username === request.body.username);
  if (user) {
    userId = user.userId;
    response.send({
      code: 200,
      msg: "登录成功",
      token: jwtSign({ _mg_name: request.userName }),
      userInfo: user,
    });
  } else {
    userId = null;
    response.send({
      code: 500,
      msg: "用户不存在/密码错误",
    });
  }
});

// 查询用户信息
router.get("/userInfo", (request, response) => {
  const userList = getExcelData("database/dataBase.xls", 0);
  const userInfo = userList.find((item) => item.userId === userId);
  response.send({
    code: 200,
    msg: "操作成功",
    data: userInfo,
  });
});

module.exports = router;
