import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import CommonTop from "@/layout/CommonTop";
import styles from "./index.module.scss";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.error_box}>
      <CommonTop />
      <div className={styles.error}>
        <span>404</span>
        <Button type="primary" onClick={() => navigate("/notes")}>
          返回首页
        </Button>
      </div>
    </div>
  );
};
export default Error;
