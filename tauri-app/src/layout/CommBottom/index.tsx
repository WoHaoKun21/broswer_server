import { HeartOutlined } from "@ant-design/icons";
import {
  DirecTionType,
  EarType,
  MicroPhoneType,
  RecordType,
  ToneType,
} from "@/component/Icons";
import { Form, Radio, Slider, Switch } from "antd";
import classNames from "classnames";
import styles from "../index.module.scss";

const CommBottom = () => {
  const [form] = Form.useForm();
  return (
    <div className={styles.bottomToolbar}>
      <div className={classNames([styles.toolbarItem, styles.toolbarAvatar])}>
        <img src="https://p.qqan.com/up/2021-7/16272658313934827.png" alt="" />
        {/* 替换为你的头像图片路径 */}
      </div>
      <div className={classNames([styles.toolbarItem, styles.toolbarText])}>
        <span>Test</span>
      </div>
      <div className={classNames([styles.toolbarItem, styles.toolbarIcon])}>
        <HeartOutlined className={styles.faHeart} />
      </div>
      {/* 底部工具 */}
      <div className={styles.toolbarButtons}>
        <button className={styles.toolbarButton} id="slider">
          <MicroPhoneType style={{ fontSize: 24 }} />
          <div className={styles.slider}>
            <Slider vertical defaultValue={30} min={0} max={100} />
          </div>
        </button>
        <button className={styles.toolbarButton}>
          <ToneType style={{ fontSize: 24 }} />
          <div className={styles.control}>
            <Form
              form={form}
              colon={false}
              wrapperCol={{ span: 18 }}
              labelCol={{ span: 15 }}
            >
              <Form.Item name="aj" initialValue={0}>
                <Radio.Group>
                  <Radio value={0}>按键语音</Radio>
                  <Radio value={1}>自由语音</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item name="mkfjz" label="麦克风降噪">
                <Switch />
              </Form.Item>
              <Form.Item name="hsxc" label="回声消除">
                <Switch />
              </Form.Item>
            </Form>
            <div className={styles.heightUrl}>
              高级
              <DirecTionType rotate={90} />
            </div>
          </div>
        </button>
        <button className={styles.toolbarButton}>
          <EarType style={{ fontSize: 24 }} />
        </button>
        <button className={styles.toolbarButton}>
          <RecordType style={{ fontSize: 24 }} />
        </button>
      </div>
    </div>
  );
};

export default CommBottom;
