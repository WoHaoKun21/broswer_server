import { useEffect, useContext } from "react";
import { appWindow } from "@tauri-apps/api/window";
import {
  CloseOutlined,
  ExpandOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import classNames from "classnames";
import {
  AllPeopleType,
  BasicType,
  ChildrenType,
  HotType,
  LocalType,
  MenType,
  MoneyType,
  MyLikeType,
  NameType,
  ReduceType,
  WomanType,
} from "@/component/Icons";
import { Context, ContextProps } from "..";
import styles from "./index.module.scss";

const CommonTop: React.FC = () => {
  const { initState, setInitState } = useContext<ContextProps>(Context); // 获取全局变量
  const { notes, publish, setPage, path } = initState;

  useEffect(() => {
    document
      .getElementById("titlebar-minimize")!
      .addEventListener("click", () => appWindow.minimize());
    document
      .getElementById("titlebar-maximize")!
      .addEventListener("click", () => appWindow.toggleMaximize());
    document
      .getElementById("titlebar-close")!
      .addEventListener("click", () => appWindow.close());
  }, [path]);

  return (
    <div className={styles.header} data-tauri-drag-region>
      <div className={styles.tags}>
        {path === "/notes" ? (
          <>
            <div
              className={classNames([
                styles.tag,
                notes === "buy" && styles.tagActive,
              ])}
              onClick={() => setInitState((i) => ({ ...i, notes: "buy" }))}
            >
              <MoneyType
                style={{
                  color: notes === "buy" ? "#000" : "#b8b8b8",
                  marginRight: 8,
                  fontSize: 18,
                }}
              />
              已购买
            </div>
            <div
              className={classNames([
                styles.tag,
                notes === "like" && styles.tagActive,
              ])}
              onClick={() => setInitState((i) => ({ ...i, notes: "like" }))}
            >
              <MyLikeType
                style={{
                  color: notes === "like" ? "#000" : "#b8b8b8",
                  marginRight: 8,
                  fontSize: 18,
                }}
              />
              我喜欢的
            </div>
            <div
              className={classNames([
                styles.tag,
                notes === "local" && styles.tagActive,
              ])}
              onClick={() => setInitState((i) => ({ ...i, notes: "local" }))}
            >
              <LocalType
                style={{
                  color: notes === "local" ? "#000" : "#b8b8b8",
                  marginRight: 8,
                  fontSize: 18,
                }}
              />
              本地的
            </div>
          </>
        ) : path === "/publish" ? (
          <>
            <div
              className={classNames([
                styles.tag,
                publish === "all" && styles.tagActive,
              ])}
              onClick={() => setInitState((i) => ({ ...i, publish: "all" }))}
            >
              <AllPeopleType
                style={{
                  color: publish === "all" ? "#000" : "#b8b8b8",
                  marginRight: 8,
                  fontSize: 18,
                }}
              />
              全部
            </div>
            <div
              className={classNames([
                styles.tag,
                publish === "man" && styles.tagActive,
              ])}
              onClick={() => setInitState((i) => ({ ...i, publish: "man" }))}
            >
              <MenType
                style={{
                  color: publish === "man" ? "#000" : "#b8b8b8",
                  marginRight: 8,
                  fontSize: 18,
                }}
              />
              男声
            </div>
            <div
              className={classNames([
                styles.tag,
                publish === "gril" && styles.tagActive,
              ])}
              onClick={() => setInitState((i) => ({ ...i, publish: "gril" }))}
            >
              <WomanType
                style={{
                  color: publish === "gril" ? "#000" : "#b8b8b8",
                  marginRight: 8,
                  fontSize: 18,
                }}
              />
              女声
            </div>
            <div
              className={classNames([
                styles.tag,
                publish === "child" && styles.tagActive,
              ])}
              onClick={() => setInitState((i) => ({ ...i, publish: "child" }))}
            >
              <ChildrenType
                style={{
                  color: publish === "child" ? "#000" : "#b8b8b8",
                  marginRight: 8,
                  fontSize: 18,
                }}
              />
              童声
            </div>
          </>
        ) : path === "/setPage" ? (
          <>
            <div
              className={classNames([
                styles.tag,
                setPage === "musicSet" && styles.tagActive,
              ])}
              onClick={() =>
                setInitState((i) => ({ ...i, setPage: "musicSet" }))
              }
            >
              音频设置
            </div>
            <div
              className={classNames([
                styles.tag,
                setPage === "quick" && styles.tagActive,
              ])}
              onClick={() => setInitState((i) => ({ ...i, setPage: "quick" }))}
            >
              快捷按键
            </div>
            <div
              className={classNames([
                styles.tag,
                setPage === "basic" && styles.tagActive,
              ])}
              onClick={() => setInitState((i) => ({ ...i, setPage: "basic" }))}
            >
              常规设置
            </div>
          </>
        ) : (
          path === "/titlePage" && null
        )}
      </div>
      <div className={styles.funcStyle}>
        {path === "/notes" && (
          <>
            <BasicType
              onClick={() => setInitState((i) => ({ ...i, sort: "basic" }))}
              style={{ fontSize: 18, cursor: "pointer" }}
            />
            <HotType
              onClick={() => setInitState((i) => ({ ...i, sort: "hot" }))}
              style={{ fontSize: 18, cursor: "pointer", margin: "0px 10px" }}
            />
            <NameType
              onClick={() => setInitState((i) => ({ ...i, sort: "name" }))}
              style={{ fontSize: 18, cursor: "pointer", marginRight: 30 }}
            />
          </>
        )}
        <div className={styles.titlebarButton} id="titlebar-reducemize">
          <ReduceType style={{ fontSize: 18 }} />
        </div>
        <div className={styles.titlebarButton} id="titlebar-minimize">
          <MinusOutlined />
        </div>
        <div className={styles.titlebarButton} id="titlebar-maximize">
          <ExpandOutlined />
        </div>
        <div className={styles.titlebarButton} id="titlebar-close">
          <CloseOutlined />
        </div>
      </div>
    </div>
  );
};

export default CommonTop;
