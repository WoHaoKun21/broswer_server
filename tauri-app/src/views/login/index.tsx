import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import CommonTop from "@/layout/CommonTop";
import logo from "@/assets/images/logo.jpg";
import { login } from "@/services/login";
import styles from "./index.module.scss";

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    setLoading(true);
    const res = await login(values);
    console.log("登录失败：", res);
    if (res.code === 200) {
      message.success(res.msg);
      localStorage.setItem("token", res.token);
      localStorage.setItem("userInfo", JSON.stringify(res.userInfo));
      navigate("/notes", { replace: true });
    } else {
      console.log("执行：", 123456);
      message.error(res.msg);
    }
    setLoading(false);
  };

  return (
    <div className={styles.loginContainer}>
      <CommonTop />
      <div className={styles.loginBox}>
        <div className={styles.loginMain}>
          <div className={styles.avatar_box}>
            <img src={logo} alt="" className={styles.loginLogo} />
          </div>
          <Form name="normal_login" onFinish={onFinish}>
            <Form.Item
              name="username"
              rules={[{ required: true, message: "请输入账号" }]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="账号"
                size="large"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "请输入密码" }]}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="密码"
                size="large"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.loginFormButton}
                size="large"
                loading={loading}
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default Login;
