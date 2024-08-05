import { useEffect, useState } from "react";
import { Tabs } from "antd";
import {
  LikeLineType,
  LocalType,
  MoneyType,
  MyLikeType,
  StartType,
} from "@/component/Icons";
import styles from "./index.module.scss";
import { getUserInfo } from "@/services/login";

const { TabPane } = Tabs;

const Notes = () => {
  const [select, setSelect] = useState("buy");

  const ContentItem = () => (
    <div className={styles.rowItem}>
      {/* 这里是内容，例如文本、图标等 */}
      <div className={styles.imgBox}>
        <img src="https://p.qqan.com/up/2021-7/16272658313934827.png" alt="" />
      </div>
      <div className={styles.itemText}>
        <p>test</p>
        <p>
          <StartType style={{ color: "#000", fontSize: 20 }} />
        </p>
        <p>
          <LikeLineType style={{ color: "#000", fontSize: 24 }} />
        </p>
        <p>20</p>
      </div>
    </div>
  );

  const ContentRow = () => (
    <div className={styles.row}>
      <ContentItem />
      <ContentItem />
      <ContentItem />
    </div>
  );

  const rows = Array.from({ length: 15 }, (_, index) => (
    <ContentRow key={index} />
  ));

  useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      <Tabs defaultActiveKey="buy" onChange={(t) => setSelect(t)}>
        <TabPane
          tab={
            <div className={styles.tabIcon}>
              <MoneyType
                style={{
                  color: select === "buy" ? "#000" : "#b8b8b8",
                  fontSize: 18,
                }}
              />
              <span>已购买</span>
            </div>
          }
          key="buy"
        >
          <div className={styles.content}>{rows}</div>
        </TabPane>
        <TabPane
          tab={
            <div className={styles.tabIcon}>
              <MyLikeType
                style={{
                  color: select === "like" ? "#000" : "#b8b8b8",
                  fontSize: 18,
                }}
              />
              <span>我喜欢的</span>
            </div>
          }
          key="like"
        >
          <div>我喜欢的...</div>
        </TabPane>
        <TabPane
          tab={
            <div className={styles.tabIcon}>
              <LocalType
                style={{
                  color: select === "local" ? "#000" : "#b8b8b8",
                  fontSize: 18,
                }}
              />
              <span>本地</span>
            </div>
          }
          key="local"
        >
          <div>本地内容...</div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Notes;
