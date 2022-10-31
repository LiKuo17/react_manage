import { useEffect } from "react";
import styles from "./login.module.scss";
import initLoginBg from "./init";
import { Button, Input, Space } from "antd";

const view = () => {
  // 加载完这个组件之后
  useEffect(() => {
    initLoginBg();
    window.onresize = function () {
      initLoginBg();
    };
  }, []);
  return (
    <div className={styles.loginPage}>
      <canvas id="canvas" style={{ display: "block" }}></canvas>
      <div className={styles.loginBox + " loginbox"}>
        <div className={styles.title}>
          <h1>JSKUO&nbsp;·&nbsp;通用后台系统</h1>
          <p>Strive Everyday</p>
        </div>
        <div className="from">
          <Space direction="vertical" size="large" style={{ display: "flex" }}>
            <Input placeholder="用户名" className="ipt" />
            <Input.Password placeholder="密码" className="ipt" />
            <Button type="primary" block>
              登录
            </Button>
          </Space>
        </div>
      </div>
      登录页
    </div>
  );
};
export default view;
