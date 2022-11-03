import { ChangeEvent, useEffect, useState } from "react";
import styles from "./login.module.scss";
import initLoginBg from "./init";
import { Button, Input, Space, message } from "antd";
import './login.less'
import { CaptchaAPI, LoginAPI } from "@/request/API";
import { useNavigate } from "react-router-dom";
const view = () => {
  let navigateTo = useNavigate()
  // 加载完这个组件之后
  useEffect(() => {
    initLoginBg();
    getCaptchaImg()
    window.onresize = function () {
      initLoginBg();
    };
  }, []);

  //获取用户输入的信息
  const [usernameVal, setUsernameVal] = useState("")  //用户名
  const [passwordVal, setPasswordVal] = useState("")  //密码
  const [captchaVal, setCaptchaVal] = useState("")   //验证码

  //定义一个变量保存验证码图片信息
  const [captchaImg,setCaptchaImg] = useState(" ")

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
  const gotoLogin = async () => {
    console.log(usernameVal,passwordVal,captchaVal);
    if(!usernameVal.trim() || !passwordVal.trim() || !captchaVal.trim()){
      message.warning("请完整输入信息")
      return
    }
    const uuid= localStorage.getItem("uuid")
    let loginRes = await LoginAPI({
      username: usernameVal,
      password: passwordVal,
      uuid: uuid as string,
      code: captchaVal
    })
    if(loginRes.code === 200) {
      // 1.提示登录成功
      message.success("登录成功!")
      // 2.保存token
      localStorage.setItem("token",loginRes.token)
      // 3.重定向跳转到首页
      // useNavigate("/")
      navigateTo("/page1")
      //4.删除uuid
      localStorage.removeItem("uuid")
    }
  }

  const getCaptchaImg = async () => {
    // CaptchaAPI().then(res => {
    //   console.log(res);
    // })
    let captchaAPIRes = await CaptchaAPI()
    console.log(captchaAPIRes);
    if(captchaAPIRes.code === 200){
    // 1.将图片的数据显示在img上面
      setCaptchaImg("data:image/gif;base64," + captchaAPIRes.img)
    //2.本地保存uuid,给登录的时候用
      localStorage.setItem("uuid",captchaAPIRes.uuid)
    }
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
            <Input placeholder="验证码"  onChange={captchaChange} />
              <div className="captchaImg" onClick={getCaptchaImg}>
                <img height="38" src={captchaImg} alt="" />
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
