import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Popover, ConfigProvider } from "antd";
import {
  AlertOutlined,
  HomeOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import zhCN from "antd/locale/zh_CN";
import classNames from "classnames";
import CommBottom from "./CommBottom";
import CommonTop from "./CommonTop";
import CommPop from "./CommPop"; // 头像提示
import styles from "./index.module.scss";

const Layout = ({ children }) => {
  const [path, setPath] = useState("/notes");

  // 监听导航变化，可用于判断用户信息是否过期，过期跳转登陆页面，没过期自动进入管理页面
  useEffect(() => {
    console.log("路径变化：", path);
  }, [path]);

  return (
    <ConfigProvider locale={zhCN}>
      <div className={styles.container}>
        <div className={styles.mainBox} data-tauri-drag-region>
          <div className={styles.navLink}>
            <div className={styles.imgBox} id="imgBox">
              <Popover
                placement="rightTop"
                content={<CommPop />}
                destroyTooltipOnHide
                getPopupContainer={() => document.getElementById("imgBox")!}
              >
                <img
                  src="https://p.qqan.com/up/2021-7/16272658313934827.png"
                  className={styles.avatar}
                />
              </Popover>
              <p className={styles.title}>Svip</p>
            </div>
            <div className={styles.linkBox}>
              <NavLink to="/notes">
                <HomeOutlined
                  onClick={() => setPath("/notes")}
                  className={classNames([
                    styles.navButton,
                    path === "/notes" && styles.active,
                  ])}
                />
              </NavLink>
              <NavLink to="/publish">
                <ShoppingCartOutlined
                  onClick={() => setPath("/publish")}
                  className={classNames([
                    styles.navButton,
                    path === "/publish" && styles.active,
                  ])}
                />
              </NavLink>
              <NavLink to="/titlePage">
                <AlertOutlined
                  onClick={() => setPath("/titlePage")}
                  className={classNames([
                    styles.navButton,
                    path === "/titlePage" && styles.active,
                  ])}
                />
              </NavLink>
              <NavLink to="/setPage">
                <SettingOutlined
                  onClick={() => setPath("/setPage")}
                  className={classNames([
                    styles.navButton,
                    path === "/setPage" && styles.active,
                  ])}
                />
              </NavLink>
            </div>
          </div>
          <div className={styles.navBox}>
            <CommonTop />
            <div className={styles.content}>{children}</div>
          </div>
        </div>
        <CommBottom />
      </div>
    </ConfigProvider>
  );
};

export default Layout;
