const express = require("express");
const { getExcelData, updateExcelData } = require("./index");

const router = express.Router();

// 获取notes音乐列表
router.get("/notes/list", (request, response) => {
  const musicList = getExcelData("database/dataBase.xlsx", 1).filter((o) =>
    request.query.type ? o[request.query.type] === 0 : true
  );
  if (musicList) {
    response.send({
      code: 200,
      msg: "操作成功",
      rows: Array.isArray(musicList) ? musicList : [],
      total: musicList.length,
    });
  } else {
    response.send({ code: 500, msg: "操作失败" });
  }
});

// 添加到我喜欢
router.get("/notes/addLike", (request, response) => {
  const musicList = getExcelData("database/dataBase.xlsx", 1).map((o) => {
    if (o.musicId === Number(request.query.musicId)) {
      o.like = 0;
    }
    return o;
  });
  updateExcelData("database/dataBase.xlsx", 1, musicList);
  response.send({ code: 200, msg: "操作成功" });
});

// 取消我喜欢
router.get("/notes/removeLike", (request, response) => {
  const musicList = getExcelData("database/dataBase.xlsx", 1).map((o) => {
    if (o.musicId === Number(request.query.musicId)) {
      o.like = 1;
    }
    return o;
  });
  updateExcelData("database/dataBase.xlsx", 1, musicList);
  response.send({ code: 200, msg: "操作成功" });
});

// 获取notes音乐列表
router.get("/public/list", (request, response) => {
  const musicList = getExcelData("database/dataBase.xlsx", 1).filter((o) =>
    request.query.sexType ? o.sexType === Number(request.query.sexType) : true
  );
  if (musicList) {
    response.send({
      code: 200,
      msg: "操作成功",
      rows: Array.isArray(musicList) ? musicList : [],
      total: musicList.length,
    });
  } else {
    response.send({ code: 500, msg: "操作失败" });
  }
});

module.exports = router;
