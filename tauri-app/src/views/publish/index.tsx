import { useEffect, useState } from "react";
import { message, Spin, Tabs } from "antd";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import {
  AllPeopleType,
  ChildrenType,
  MenType,
  StartType,
  WomanType,
} from "@/component/Icons";
import imgInfo from "@/component/active";
import { getPublicMusicList } from "@/services/public";
import { addLike, removeLike } from "@/services/notes";
import styles from "./index.module.scss";

const { TabPane } = Tabs;
const Publish = () => {
  const [select, setSelect] = useState("");
  const [musicList, setMusicList] = useState<any[]>([]);

  // 获取购物车列表
  const queryData = async (obj = {}) => {
    const res = await getPublicMusicList(obj);
    if (res.code === 200) {
      setMusicList(res.rows || []);
    } else {
      setMusicList([]);
    }
  };

  // 加入/移除喜欢
  const handleLike = async (id: any, type: boolean) => {
    const res = type ? await addLike(id) : await removeLike(id);
    if (res.code === 200) {
      message.success(res.msg);
      queryData({ sexType: select });
    } else {
      message.error(res.msg);
    }
  };

  useEffect(() => {
    queryData();
  }, []);

  return (
    <div className={styles.container}>
      <Tabs
        activeKey={select}
        onChange={(t) => {
          queryData({ sexType: t });
          setSelect(t);
        }}
      >
        <TabPane
          tab={
            <div className={styles.tabIcon}>
              <AllPeopleType
                style={{
                  color: select === "" ? "#000" : "#b8b8b8",
                  fontSize: 18,
                }}
              />
              <span style={{ marginLeft: "4px" }}>全部</span>
            </div>
          }
          key=""
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
              <MenType
                style={{
                  color: select === "man" ? "#000" : "#b8b8b8",
                  fontSize: 18,
                }}
              />
              <span style={{ marginLeft: "4px" }}>男声</span>
            </div>
          }
          key="0"
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
              <WomanType
                style={{
                  color: select === "girl" ? "#000" : "#b8b8b8",
                  fontSize: 18,
                }}
              />
              <span style={{ marginLeft: "4px" }}>女声</span>
            </div>
          }
          key="1"
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
              <ChildrenType
                style={{
                  color: select === "child" ? "#000" : "#b8b8b8",
                  fontSize: 18,
                }}
              />
              <span style={{ marginLeft: "4px" }}>童声</span>
            </div>
          }
          key="2"
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
      </Tabs>
    </div>
  );
};

export default Publish;
