const express = require("express");
const { jwtSign } = require("../JWT");
const { getExcelData, updateExcelData } = require("./index");
const router = express.Router();

let userId = null;

// 获取notes音乐列表
router.get("/notes/list", (request, response) => {
  const musicList = getExcelData("database/dataBase.xls", 1);
  if (musicList) {
    response.send({
      code: 200,
      msg: "操作成功",
      rows: Array.isArray(musicList) ? musicList : [],
    });
  } else {
    response.send({
      code: 500,
      msg: "操作失败",
    });
  }
});

// 添加到我喜欢
router.get("/notes/addLike", (request, response) => {
  const userList = getExcelData("database/dataBase.xls", 0);
  const userInfo = userList.find((item) => item.userId === userId);
  response.send({
    code: 200,
    msg: "操作成功",
    data: userInfo,
  });
});

module.exports = router;
