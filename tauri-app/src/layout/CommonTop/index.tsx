import { useEffect } from "react";
import { appWindow } from "@tauri-apps/api/window";
import {
  CloseOutlined,
  ExpandOutlined,
  MinusOutlined,
} from "@ant-design/icons";

import styles from "./index.module.scss";

const CommonTop = () => {
  useEffect(() => {
    document
      .getElementById("titlebar-minimize")!
      .addEventListener("click", () => appWindow.minimize());
    document
      .getElementById("titlebar-maximize")!
      .addEventListener("click", () => appWindow.toggleMaximize());
    document
      .getElementById("titlebar-close")!
      .addEventListener("click", () => appWindow.close());
  }, []);

  return (
    <div className={styles.mainHeader} data-tauri-drag-region>
      <div className={styles.titlebarButton} id="titlebar-minimize">
        <MinusOutlined />
      </div>
      <div className={styles.titlebarButton} id="titlebar-maximize">
        <ExpandOutlined />
      </div>
      <div className={styles.titlebarButton} id="titlebar-close">
        <CloseOutlined />
      </div>
    </div>
  );
};

export default CommonTop;
