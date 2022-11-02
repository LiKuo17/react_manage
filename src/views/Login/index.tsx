import { ChangeEvent, useEffect, useState } from "react";
import styles from "./login.module.scss";
import initLoginBg from "./init";
import { Button, Input, Space } from "antd";
import './login.less'

const view = () => {
  // 加载完这个组件之后
  useEffect(() => {
    initLoginBg();
    window.onresize = function () {
      initLoginBg();
    };
  }, []);

  //获取用户输入的信息
  const [usernameVal, setUsernameVal] = useState("")  //用户名
  const [passwordVal, setPasswordVal] = useState("")  //密码
  const [captchaVal, setCaptchaVal] = useState("")   //验证码
  const usernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    //获取用户输入的用户名
    setUsernameVal(e.target.value)
  }
  const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
    //获取用户输入的密码
    setPasswordVal(e.target.value)
  }
  const captchaChange = (e: ChangeEvent<HTMLInputElement>) => {
    //获取用户输入的验证码
    setCaptchaVal(e.target.value)
  }
  //点击登录
  const gotoLogin = () => {
  console.log(usernameVal,passwordVal,captchaVal);
      
  }


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
            <Input placeholder="用户名" className="ipt" onChange={usernameChange} />
            <Input.Password placeholder="密码" className="ipt" onChange={passwordChange} />
            <div className="captchaBox">
            <Input placeholder="验证码" onChange={captchaChange} />
              <div className="captchaImg">
                <img height="38" src="data:image/gif;base64,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" alt="" />
              </div>
            </div>
            <Button type="primary" className="loginBtn" onClick={gotoLogin} block>
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
