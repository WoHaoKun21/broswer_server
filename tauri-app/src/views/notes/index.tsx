import { useEffect, useState } from "react";
import { message, Spin, Tabs } from "antd";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { LocalType, MoneyType, MyLikeType, StartType } from "@/component/Icons";
import imgInfo from "@/component/active";
import { addLike, getMusicList, removeLike } from "@/services/notes";
import styles from "./index.module.scss";

const { TabPane } = Tabs;

const Notes = () => {
  const [select, setSelect] = useState("buy");
  const [musicList, setMusicList] = useState<any[]>([]);

  // 歌曲列表查询
  const queryData = async (obj = {}) => {
    const res = await getMusicList(obj);
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
      queryData({ type: select });
    } else {
      message.error(res.msg);
    }
  };

  useEffect(() => {
    queryData({ type: "buy" });
  }, []);

  return (
    <div className={styles.container}>
      <Tabs
        activeKey={select}
        onChange={(t) => {
          queryData({ type: t });
          setSelect(t);
        }}
      >
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
                    <HeartFilled
                      style={{ fontSize: 20 }}
                      onClick={() => handleLike(o.musicId, false)}
                    />
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

export default Notes;
