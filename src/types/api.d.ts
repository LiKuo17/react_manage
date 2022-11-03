//这个文件专门定义请求的类型 和 响应的类型

//验证码的响应类型约束
interface captchaAPIRes {
  msg: string;
  img: string;
  code: number;
  captchaEnabled: boolean;
  uuid: string;
}


//登录的请求参数类型约束
interface loginAPIReq {
    username: string;
    password: string;
    uuid: string;
    code: string;
}

//登录的响应数据类型约束
interface loginAPIRes {
    msg: string;
    code: number;
    token: string;
}
  