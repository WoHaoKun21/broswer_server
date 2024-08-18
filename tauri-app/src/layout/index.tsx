import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ConfigProvider } from "antd";
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
// import CommPop from "./CommPop"; // 头像提示
import styles from "./index.module.scss";

// 定义Context类型
export interface ContextProps {
  initState: {
    notes: "buy" | "like" | "local";
    publish: "all" | "man" | "gril" | "child";
    setPage: "musicSet" | "quick" | "basic";
    path: "/notes" | "/publish" | "/titlePage" | "/setPage";
    sort: "basic" | "hot" | "name";
  };
  setInitState: (obj: any) => void;
}

export const Context = React.createContext<any>({});

const Layout = ({ children }) => {
  const [initState, setInitState] = useState<{
    notes: "buy" | "like" | "local";
    publish: "all" | "man" | "gril" | "child";
    setPage: "musicSet" | "quick" | "basic";
    path: "/notes" | "/publish" | "/titlePage" | "/setPage";
    sort: "basic" | "hot" | "name";
  }>({
    notes: "buy", // 首页选中的菜单
    publish: "all", // 购物车选中的菜单
    setPage: "musicSet", // 设置页选中的菜单
    path: "/notes", // 选中的路由
    sort: "basic", // 排序方式
  });

  const { path } = initState;

  return (
    <Context.Provider value={{ initState, setInitState }}>
      <ConfigProvider locale={zhCN}>
        <div className={styles.container}>
          <div className={styles.mainBox} data-tauri-drag-region>
            <div className={styles.navLink}>
              <div className={styles.imgBox} id="imgBox">
                {/* <Popover
                  placement="rightTop"
                  content={<CommPop />}
                  destroyTooltipOnHide
                  getPopupContainer={() => document.getElementById("imgBox")!}
                > */}
                <img
                  src="https://p.qqan.com/up/2021-7/16272658313934827.png"
                  className={styles.avatar}
                />
                {/* </Popover> */}
                <p className={styles.title}>Svip</p>
              </div>
              <div className={styles.linkBox}>
                <NavLink to="/notes">
                  <HomeOutlined
                    onClick={() =>
                      setInitState({ ...initState, path: "/notes" })
                    }
                    className={classNames([
                      styles.navButton,
                      path === "/notes" && styles.active,
                    ])}
                  />
                </NavLink>
                <NavLink to="/publish">
                  <ShoppingCartOutlined
                    onClick={() =>
                      setInitState({ ...initState, path: "/publish" })
                    }
                    className={classNames([
                      styles.navButton,
                      path === "/publish" && styles.active,
                    ])}
                  />
                </NavLink>
                <NavLink to="/titlePage">
                  <AlertOutlined
                    onClick={() =>
                      setInitState({ ...initState, path: "/titlePage" })
                    }
                    className={classNames([
                      styles.navButton,
                      path === "/titlePage" && styles.active,
                    ])}
                  />
                </NavLink>
                <NavLink to="/setPage">
                  <SettingOutlined
                    onClick={() =>
                      setInitState({ ...initState, path: "/setPage" })
                    }
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
    </Context.Provider>
  );
};

export default Layout;
