import React from 'react'
import ReactDOM from 'react-dom/client'

//正确的样式引入顺序
//样式初始化一般放在最前
import "reset-css"

//UI框架的样式

//全局样式
import "@/assets/styles/global.scss"
// import ""
//直接用@会报错，必须在vite.config.ts进行路径别名进行配置才能用

//组件的样式
import App from './App'
import { BrowserRouter } from "react-router-dom"
// import Router from "./router/index"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <Router /> */}
    </BrowserRouter>
  </React.StrictMode>
)
