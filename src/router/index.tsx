//函数形式的写法
import React, { lazy } from "react"
import Home from "../views/Home"
// import About from "../views/About"
// import User from "@/views/User";
const About = lazy(()=>import("../views/Page301"))
const User = lazy(()=>import("../views/User"))
const Page1 = lazy(()=>import("../views/page1"))
const Page2 = lazy(()=>import("../views/page2"))
const Page301 = lazy(()=>import("../views/Page301"))
const Page501 = lazy(()=>import("../views/Page501"))
//重定向组件
import { Navigate } from "react-router-dom";

//懒加载模式需要添加一个Loading组件

//抽取Loading组件函数
const withLoadingComponent = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
        {/* <About /> */}
    </React.Suspense>
)

const routes = [
    {
        path: "/",
        element: <Navigate to="/page1" />
    },
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/page1",
                element: withLoadingComponent(<Page1 />)
            },
            {
                path: "/page2",
                element: withLoadingComponent(<Page2 />)
            },
            {
                path: "/page3/page301",
                element: withLoadingComponent(<Page301 />)
            },
            {
                path: "/page5/page501",
                element: withLoadingComponent(<Page501 />)
            },
        ]
    },
    {
        path: '*',
        element: <Navigate to="/page1" />
    },
    // {
    //     path: "/about",
    //     element: withLoadingComponent(<About />)
    // },
    // {
    //     path: "/user",
    //     element: withLoadingComponent(<User />)
    // },
    
]
export default routes;