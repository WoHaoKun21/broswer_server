import React, { useEffect, useState } from "react";
import { Tabs, Rate, Progress, Modal, Form, Input } from "antd";
import styles from "./index.module.scss";
import moment from "moment";

interface ICommPopProps {}

const CommPop: React.FC<ICommPopProps> = () => {
  const [subLoading, setSubLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const [form] = Form.useForm();

  const add = () => {
    form.validateFields().then((value) => {
      setSubLoading(true);
      setOpen(false);
      form.resetFields();
      setSubLoading(false);
    });
  };

  useEffect(() => {
    return () => {
      setShow(false);
    };
  }, []);

  return (
    <div className={styles.popContainer}>
      {!show && (
        <div className={styles.popTop}>
          <div className={styles.popLeftImg}>
            <img src="https://p.qqan.com/up/2021-7/16272658313934827.png" />
          </div>
          <div className={styles.popRightBox}>
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane tab="Test" key="1">
                <div className={styles.payItem}>￥1/天</div>
                <div className={styles.payItem}>￥5/周</div>
                <div className={styles.payItem}>￥20/月</div>
                <div className={styles.payItem}>￥40/永久解锁</div>
              </Tabs.TabPane>
              <Tabs.TabPane tab="超级会员" key="2">
                <div className={styles.payItem}>￥0.5/天</div>
                <div className={styles.payItem}>￥3/周</div>
                <div className={styles.payItem}>￥15/月</div>
                <div className={styles.payItem}>￥20/永久解锁</div>
              </Tabs.TabPane>
            </Tabs>
          </div>
        </div>
      )}
      <div
        className={styles.popBottom}
        style={{ borderBottom: show ? "1px solid #f4f4f4" : "none" }}
      >
        <div className={styles.title}>
          <p>评分及评论</p>
          <span onClick={() => setShow(!show)}>
            {!show ? "查看全部" : "收起全部"}
          </span>
        </div>
        <div className={styles.content}>
          <div className={styles.score}>
            <p>4.8</p>
            <span>满分5分</span>
          </div>
          <div className={styles.starBox}>
            <div className={styles.starItem}>
              <Rate
                allowHalf
                disabled
                value={5}
                style={{ width: "auto", fontSize: 10, marginRight: "auto" }}
              />
              <Progress
                percent={100}
                showInfo={false}
                size={[165, 5]}
                strokeColor="#828282"
                style={{ width: "auto" }}
              />
            </div>
            <div className={styles.starItem}>
              <Rate
                allowHalf
                disabled
                value={4}
                style={{ width: "auto", fontSize: 10, marginRight: "auto" }}
              />
              <Progress
                percent={80}
                showInfo={false}
                size={[165, 5]}
                strokeColor="#828282"
                style={{ width: "auto" }}
              />
            </div>
            <div className={styles.starItem}>
              <Rate
                allowHalf
                disabled
                value={3}
                style={{ width: "auto", fontSize: 10, marginRight: "auto" }}
              />
              <Progress
                percent={60}
                showInfo={false}
                size={[165, 5]}
                strokeColor="#828282"
                style={{ width: "auto" }}
              />
            </div>
            <div className={styles.starItem}>
              <Rate
                allowHalf
                disabled
                value={2}
                style={{ width: "auto", fontSize: 10, marginRight: "auto" }}
              />
              <Progress
                percent={40}
                showInfo={false}
                size={[165, 5]}
                strokeColor="#828282"
                style={{ width: "auto" }}
              />
            </div>
            <div className={styles.starItem}>
              <Rate
                allowHalf
                disabled
                value={1}
                style={{ width: "auto", fontSize: 10, marginRight: "auto" }}
              />
              <Progress
                percent={20}
                showInfo={false}
                size={[165, 5]}
                strokeColor="#828282"
                style={{ width: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
      {show && (
        <div className={styles.popComment}>
          <div className={styles.title} onClick={() => setOpen(true)}>
            撰写评论
          </div>
          <div className={styles.commentBox}>
            <div className={styles.commentItem}>
              <div className={styles.evalua}>
                <span>体验不错</span>
                <span style={{ color: "#d5d5d5" }}>
                  {moment().format("MM月DD日")}
                </span>
              </div>
              <div className={styles.score}>
                <Rate
                  allowHalf
                  disabled
                  value={5}
                  style={{ width: "auto", fontSize: 10, marginRight: "auto" }}
                />
                <p style={{ color: "#d5d5d5" }}>admin</p>
              </div>
              <div>声音特别好听，音质特别好</div>
            </div>
            <div className={styles.commentItem}>
              <div className={styles.evalua}>
                <span>体验不错</span>
                <span style={{ color: "#d5d5d5" }}>
                  {moment().format("MM月DD日")}
                </span>
              </div>
              <div className={styles.score}>
                <Rate
                  allowHalf
                  disabled
                  value={5}
                  style={{ width: "auto", fontSize: 10, marginRight: "auto" }}
                />
                <p style={{ color: "#d5d5d5" }}>admin</p>
              </div>
              <div>声音特别好听，音质特别好</div>
            </div>
            <div className={styles.commentItem}>
              <div className={styles.evalua}>
                <span>体验不错</span>
                <span style={{ color: "#d5d5d5" }}>
                  {moment().format("MM月DD日")}
                </span>
              </div>
              <div className={styles.score}>
                <Rate
                  allowHalf
                  disabled
                  value={5}
                  style={{ width: "auto", fontSize: 10, marginRight: "auto" }}
                />
                <p style={{ color: "#d5d5d5" }}>admin</p>
              </div>
              <div>声音特别好听，音质特别好</div>
            </div>
          </div>
        </div>
      )}

      {open && (
        <Modal
          centered
          open={true}
          title="撰写评论"
          onOk={() => add()}
          onCancel={() => {
            setOpen(false);
            form.resetFields();
          }}
          okButtonProps={{ loading: subLoading }}
          transitionName=""
          maskTransitionName=""
        >
          <Form form={form}>
            <Form.Item
              name="title"
              rules={[{ required: true, message: "标题不能为空" }]}
            >
              <Input placeholder="请输入标题" />
            </Form.Item>
            <Form.Item name="content">
              <Input.TextArea placeholder="内容（选填）" />
            </Form.Item>
          </Form>
        </Modal>
      )}
    </div>
  );
};

export default CommPop;
