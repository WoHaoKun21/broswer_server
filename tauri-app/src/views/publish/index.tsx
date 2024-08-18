import { useContext, useEffect, useState } from "react";
import { message, Popover, Spin } from "antd";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { MoneyType, StartType } from "@/component/Icons";
import imgInfo from "@/component/active";
import CommPop from "@/layout/CommPop";
import { Context, ContextProps } from "@/layout";
import { getPublicMusicList } from "@/services/public";
import { addLike, removeLike } from "@/services/notes";
import styles from "./index.module.scss";

const Publish = () => {
  const { initState } = useContext<ContextProps>(Context); // 获取全局变量
  const [musicList, setMusicList] = useState<any[]>([]);

  const { publish } = initState;
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
      queryData({ sexType: publish });
    } else {
      message.error(res.msg);
    }
  };

  useEffect(() => {
    queryData({ sexType: publish });
  }, [publish]);

  return (
    <div className={styles.container}>
      {musicList.length > 0 ? (
        musicList.map((o) => (
          <div className={styles.rowItem} key={o.musicId}>
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
              <Popover
                placement="rightTop"
                content={<CommPop />}
                destroyTooltipOnHide
                getPopupContainer={() => document.getElementById("imgBox")!}
              >
                <MoneyType style={{ fontSize: 20 }} onClick={() => {}} />
              </Popover>
            </div>
          </div>
        ))
      ) : (
        <Spin />
      )}
    </div>
  );
};

export default Publish;
