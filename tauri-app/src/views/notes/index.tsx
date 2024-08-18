import { useContext, useEffect, useState } from "react";
import { message, Spin } from "antd";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Context, ContextProps } from "@/layout";
import { StartType } from "@/component/Icons";
import imgInfo from "@/component/active";
import { addLike, getMusicList, removeLike } from "@/services/notes";
import styles from "./index.module.scss";

const Notes: React.FC = () => {
  const { initState } = useContext<ContextProps>(Context); // 获取全局变量
  const [musicList, setMusicList] = useState<any[]>([]);

  const { notes, sort } = initState;
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
      queryData({ type: notes });
    } else {
      message.error(res.msg);
    }
  };

  useEffect(() => {
    queryData({ type: notes });
  }, [notes]);

  // musicList.sort((a, b) => Number(b.hot) - Number(a.hot));
  // console.log("排序后数据：", sort, musicList);

  return (
    <div className={styles.container}>
      {/* <div className={styles.content}> */}
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
  );
};

export default Notes;
