import mockjs from "mockjs";

export default [
  {
    url: "/userInfo", //请求地址
    method: "get", //请求方式
    statusCode: 200, //响应状态码
    response: () => {
      return {
        code: 200,
        msg: "操作成功",
        data: {
          nickName: "开发者账户",
          sex: "0",
          phonenumber: "15744689527",
          loginDate: "2024-08-05T13:28:26",
          avatar:
            "/profile/avatar/2023/03/13/9c84bc34-b089-49db-8ab4-9af21860fe9f.jpg",
          userName: "admin",
          userId: "565656565624",
          password:
            "$2a$10$ZeY45EtWRISBw2fQqF0zXOTPaqa6ittfLfyEHYAE9KS59F4ONUzbO",
          createBy: "admin",
          createTime: "2023-01-30T17:33:54",
          updateBy: "",
          loginIp: "124.90.135.35",
          roleName: "(系统)超级管理员",
          userType: "admin",
          email: "zj@admin.com",
          status: "0",
        },
      };
    },
  },
];
