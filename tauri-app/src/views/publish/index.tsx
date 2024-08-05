import { useState } from "react";
import { Tabs } from "antd";
import {
  AllPeopleType,
  ChildrenType,
  LikeLineType,
  MenType,
  StartType,
  WomanType,
} from "@/component/Icons";
import styles from "./index.module.scss";

const { TabPane } = Tabs;
const Publish = () => {
  const [select, setSelect] = useState("all");
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

  return (
    <div className={styles.container}>
      <Tabs defaultActiveKey="all" onChange={(t) => setSelect(t)}>
        <TabPane
          tab={
            <div className={styles.tabIcon}>
              <AllPeopleType
                style={{
                  color: select === "all" ? "#000" : "#b8b8b8",
                  fontSize: 18,
                }}
              />
              <span style={{ marginLeft: "4px" }}>全部</span>
            </div>
          }
          key="all"
        >
          <div className={styles.content}>{rows}</div>
        </TabPane>
        <TabPane
          tab={
            <div className={styles.tabIcon}>
              <MenType
                style={{
                  color: select === "man" ? "#000" : "#b8b8b8",
                  fontSize: 18,
                }}
              />
              <span style={{ marginLeft: "4px" }}>男声</span>
            </div>
          }
          key="man"
        >
          <div>男声内容...</div>
        </TabPane>
        <TabPane
          tab={
            <div className={styles.tabIcon}>
              <WomanType
                style={{
                  color: select === "girl" ? "#000" : "#b8b8b8",
                  fontSize: 18,
                }}
              />
              <span style={{ marginLeft: "4px" }}>女声</span>
            </div>
          }
          key="girl"
        >
          <div>女声内容...</div>
        </TabPane>
        <TabPane
          tab={
            <div className={styles.tabIcon}>
              <ChildrenType
                style={{
                  color: select === "child" ? "#000" : "#b8b8b8",
                  fontSize: 18,
                }}
              />
              <span style={{ marginLeft: "4px" }}>童声</span>
            </div>
          }
          key="child"
        >
          <div>童声内容...</div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Publish;
