// 登录token令牌
const jwt = require("jsonwebtoken");

// token生成的密匙，根据自己需求定义
const jwtKey = "username";

// token生成函数(jwtSign)，有效时间为一个小时
const jwtSign = (data) => {
  const token = jwt.sign(data, jwtKey, { expiresIn: 60 * 60 });
  return token;
};

// token验证是否失效
const jwtCheck = (req, res, next) => {
  //前端headers传来的token值:
  const token = req.headers.token;
  jwt.verify(token, jwtKey, (err, data) => {
    if (err) {
      res.send({
        status: "401",
        msg: "token无效",
      });
    } else {
      req.jwtInfo = data;
      next();
    }
  });
};

module.exports = { jwtSign, jwtCheck };
