import { Input, Select, Slider, Tabs } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import styles from "./index.module.scss";

const SettingPage = () => {
  
  const onKeyDown = (e) => {
    e.preventDefault(); // 停止默认动作
    // shift + * 组合键
    if (e.shiftKey) {
      e.target.value = `SHIFT + ${e.key.toUpperCase()}`;
    }
    // ctrl + * 组合键
    if (e.ctrlKey) {
      e.target.value = `CTRL + ${e.key.toUpperCase()}`;
    }
    // alt + * 组合键
    if (e.altKey) {
      e.target.value = `ALT + ${e.key.toUpperCase()}`;
    }
    // F1~F12 按键
    if (e.keyCode >= 112 && e.keyCode <= 123) {
      e.target.value = `F${e.keyCode - 111}`;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabBox}>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="音频设置" key="1">
            <div className={styles.setAudioBox}>
              <div className={styles.audioItem}>
                <p>输入设置</p>
                <div className={styles.box}>
                  <span style={{ marginRight: 20 }}>设备</span>
                  <Select
                    style={{ width: "70%", marginRight: 10 }}
                    placeholder="请选择快捷键"
                  >
                    <Select.Option value={1}>输入设备1</Select.Option>
                    <Select.Option value={2}>输入设备2</Select.Option>
                  </Select>
                  <ReloadOutlined />
                </div>
                <div className={styles.box}>
                  <span style={{ marginRight: 20 }}>音量</span>
                  <Slider
                    style={{ width: "70%" }}
                    defaultValue={50}
                    min={0}
                    max={100}
                  />
                </div>
              </div>

              <div className={styles.audioItem}>
                <p>输出设置</p>
                <div className={styles.box}>
                  <span style={{ marginRight: 20 }}>设备</span>
                  <Select
                    style={{ width: "70%", marginRight: 10 }}
                    placeholder="请选择快捷键"
                  >
                    <Select.Option value={1}>输出设备1</Select.Option>
                    <Select.Option value={2}>输出设备2</Select.Option>
                  </Select>
                  <ReloadOutlined />
                </div>
                <div className={styles.box}>
                  <span style={{ marginRight: 20 }}>音量</span>
                  <Slider
                    style={{ width: "70%" }}
                    defaultValue={50}
                    min={0}
                    max={100}
                  />
                </div>
              </div>
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="快捷按键" key="2">
            <div className={styles.setQuickBox}>
              <div className={styles.boxItem}>
                <span>变音开关</span>
                <Input
                  style={{ width: 140 }}
                  placeholder="请输入快捷键"
                  onKeyDown={onKeyDown}
                />
              </div>
              <div className={styles.boxItem}>
                <span>按键语音</span>
                <Input
                  style={{ width: 140 }}
                  placeholder="请输入快捷键"
                  onKeyDown={onKeyDown}
                />
              </div>
              <div className={styles.boxItem}>
                <span>耳返开关</span>
                <Input
                  style={{ width: 140 }}
                  placeholder="请输入快捷键"
                  onKeyDown={onKeyDown}
                />
              </div>
              <div className={styles.boxItem}>
                <span>录音</span>
                <Input
                  style={{ width: 140 }}
                  placeholder="请输入快捷键"
                  onKeyDown={onKeyDown}
                />
              </div>
              <div className={styles.boxItem}>
                <span>快捷变音1</span>
                <Select style={{ width: 160 }} placeholder="请选择快捷键">
                  <Select.Option value={1}>快捷键1</Select.Option>
                  <Select.Option value={2}>快捷键2</Select.Option>
                </Select>
                <Input
                  style={{ width: 140 }}
                  placeholder="请输入快捷键"
                  onKeyDown={onKeyDown}
                />
              </div>
              <div className={styles.boxItem}>
                <span>快捷变音2</span>
                <Select style={{ width: 160 }} placeholder="请选择快捷键">
                  <Select.Option value={1}>快捷键1</Select.Option>
                  <Select.Option value={2}>快捷键2</Select.Option>
                </Select>
                <Input
                  style={{ width: 140 }}
                  placeholder="请输入快捷键"
                  onKeyDown={onKeyDown}
                />
              </div>
              <div className={styles.boxItem}>
                <span>快捷变音3</span>
                <Select style={{ width: 160 }} placeholder="请选择快捷键">
                  <Select.Option value={1}>快捷键1</Select.Option>
                  <Select.Option value={2}>快捷键2</Select.Option>
                </Select>
                <Input
                  style={{ width: 140 }}
                  placeholder="请输入快捷键"
                  onKeyDown={onKeyDown}
                />
              </div>
              <div className={styles.boxItem}>
                <span>快捷变音4</span>
                <Select style={{ width: 160 }} placeholder="请选择快捷键">
                  <Select.Option value={1}>快捷键1</Select.Option>
                  <Select.Option value={2}>快捷键2</Select.Option>
                </Select>
                <Input
                  style={{ width: 140 }}
                  placeholder="请输入快捷键"
                  onKeyDown={onKeyDown}
                />
              </div>
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="常规设置" key="3">
            常规设置内容
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default SettingPage;
