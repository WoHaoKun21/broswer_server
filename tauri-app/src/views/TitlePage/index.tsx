import { useState } from "react";
import { Button, Collapse } from "antd";
import classNames from "classnames";
import { BottomType, DirecTionType, TopType } from "@/component/Icons";
import styles from "./index.module.scss";

const { Panel } = Collapse;

const TitlePage = () => {
  const [active, setActive] = useState<"today" | "month" | "year">("today");
  const [activeTwo, setActiveTwo] = useState<"num" | "show">("num");

  return (
    <div className={styles.container}>
      <Collapse
        accordion
        destroyInactivePanel // 收起后销毁面板
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) => {
          return (
            <DirecTionType
              style={{ fontSize: 20 }}
              rotate={isActive ? 180 : 0}
            />
          );
        }}
      >
        <Panel header="收益中心" key="1">
          <div className={styles.income}>
            <div className={styles.info}>
              <div className={styles.title}>
                <div>收益数据概览</div>
                <div className={styles.time}>
                  <p
                    onClick={() => setActive("today")}
                    className={classNames([
                      active === "today" && styles.active,
                    ])}
                  >
                    当日
                  </p>
                  <p
                    onClick={() => setActive("month")}
                    className={classNames([
                      active === "month" && styles.active,
                    ])}
                  >
                    30日
                  </p>
                  <p
                    onClick={() => setActive("year")}
                    className={classNames([active === "year" && styles.active])}
                  >
                    近一年
                  </p>
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.item}>
                  <p>
                    {active === "today"
                      ? "当日总收益"
                      : active === "month"
                      ? "近30日总收益"
                      : active === "year"
                      ? "近一年总收益"
                      : "-"}
                  </p>
                  <span>0.00元</span>
                </div>
                <div className={styles.item}>
                  <p>
                    {active === "today"
                      ? "较前日"
                      : active === "month"
                      ? "较前30日"
                      : active === "year"
                      ? "较前一年"
                      : "-"}
                  </p>
                  <span>+0.00元</span>
                </div>
                <div className={styles.item}>
                  <p>可提现收益</p>
                  <span>0.00元</span>
                </div>
                <div className={styles.item}>去提现</div>
              </div>
            </div>
            <div className={styles.infoDate}>
              <div className={styles.title}>
                <div>Test</div>
                <div className={styles.time}>
                  <p
                    onClick={() => setActiveTwo("num")}
                    className={classNames([
                      activeTwo === "num" && styles.active,
                    ])}
                  >
                    数量
                  </p>
                  <p
                    onClick={() => setActiveTwo("show")}
                    className={classNames([
                      activeTwo === "show" && styles.active,
                    ])}
                  >
                    收益
                  </p>
                </div>
              </div>
              <div className={styles.dataContent}>
                <div className={styles.item}>
                  <p>一天</p>
                  <span>20</span>
                </div>
                <div className={styles.item}>
                  <p>一周</p>
                  <span>1</span>
                </div>
                <div className={styles.item}>
                  <p>一月</p>
                  <span>23</span>
                </div>
                <div className={styles.item}>
                  <p>永久</p>
                  <span>30</span>
                </div>
                <div className={styles.item}>
                  <p>统计</p>
                  <span>74</span>
                </div>
              </div>
            </div>
            <div className={styles.author}>
              <div className={styles.authorLeft}>
                <p>声音达人</p>
                <div>
                  通过上传训练达人的声音，开放授权赚取佣金。
                  <span
                    title="页面跳转"
                    onClick={() => {
                      console.log("跳转指定页面");
                    }}
                  >
                    了解更多&gt;
                  </span>
                </div>
              </div>
              <Button>成为达人</Button>
            </div>
          </div>
        </Panel>
        <Panel header="创作中心" key="2">
          <div className={styles.create}>
            <div className={styles.btn}>录制声音</div>
            <div className={styles.btn}>上传练习</div>
          </div>
        </Panel>
        <Panel header="我的声音" key="3">
          <div className={styles.sound}>
            {Array.from({ length: 15 }, (_, index) => (
              <div className={styles.row} key={index}>
                <div className={styles.rowItem}>
                  <div className={styles.imgBox}>
                    <img
                      src="https://p.qqan.com/up/2021-7/16272658313934827.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.itemText}>
                    <p>test</p>
                    <p>
                      <TopType style={{ color: "#000", fontSize: 20 }} />
                    </p>
                    <p>
                      <BottomType style={{ color: "#000", fontSize: 24 }} />
                    </p>
                  </div>
                </div>
                <div className={styles.rowItem}>
                  <div className={styles.imgBox}>
                    <img
                      src="https://p.qqan.com/up/2021-7/16272658313934827.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.itemText}>
                    <p>test</p>
                    <p>
                      <TopType style={{ color: "#000", fontSize: 20 }} />
                    </p>
                    <p>
                      <BottomType style={{ color: "#000", fontSize: 24 }} />
                    </p>
                  </div>
                </div>
                <div className={styles.rowItem}>
                  <div className={styles.imgBox}>
                    <img
                      src="https://p.qqan.com/up/2021-7/16272658313934827.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.itemText}>
                    <p>test</p>
                    <p>
                      <TopType style={{ color: "#000", fontSize: 20 }} />
                    </p>
                    <p>
                      <BottomType style={{ color: "#000", fontSize: 24 }} />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};

export default TitlePage;
