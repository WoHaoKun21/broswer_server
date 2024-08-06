import { useEffect, useState } from "react";
import { Spin, Tabs } from "antd";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import {
  LikeLineType,
  LocalType,
  MoneyType,
  MyLikeType,
  StartType,
} from "@/component/Icons";
import imgInfo from "@/component/active";
import { getMusicList } from "@/services/notes";
import styles from "./index.module.scss";

const { TabPane } = Tabs;

const Notes = () => {
  const [select, setSelect] = useState("buy");
  const [musicList, setMusicList] = useState<any[]>([]);

  const queryData = async () => {
    const res = await getMusicList();
    if (res.code === 200) {
      setMusicList(res.rows || []);
    } else {
      setMusicList([]);
    }
  };

  // 加入/移除喜欢
  const handleLike = (id: any, type: boolean) => {};

  useEffect(() => {
    queryData();
  }, []);

  return (
    <div className={styles.container}>
      <Tabs activeKey={select} onChange={(t) => setSelect(t)}>
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
          <div className={styles.content}>
            {musicList.length > 0 ? (
              musicList.map((o) => (
                <div className={styles.rowItem} key={o.musicId}>
                  {/* 这里是内容，例如文本、图标等 */}
                  <div className={styles.imgBox}>
                    <img src={imgInfo.active + o.image} alt="" />
                  </div>
                  <div className={styles.itemText}>
                    <p title={o.username}>{o.username}</p>
                    <StartType style={{ color: "#000", fontSize: 20 }} />
                    {o.like === 0 ? (
                      <HeartFilled
                        style={{ fontSize: 20 }}
                        onClick={() => handleLike(o.musicId, false)}
                      />
                    ) : (
                      <HeartOutlined
                        style={{ fontSize: 20 }}
                        onClick={() => handleLike(o.musicId, true)}
                      />
                    )}
                    <span>{o.likeNum}</span>
                  </div>
                </div>
              ))
            ) : (
              <Spin />
            )}
          </div>
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
