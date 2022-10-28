
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate, useLocation } from "react-router-dom"
import React, { useState } from 'react';

type MenuItem = Required<MenuProps>['items'][number];

//登录请求到数据之后,就可以跟items这个数组进行匹配
const items: MenuItem[] = [
    {
        label: "爸爸 1",
        key: '/page1',
        icon: <PieChartOutlined />
    },
    {
        label: "爸爸 2",
        key: '/page2',
        icon: <DesktopOutlined />
    },
    {
        label: "爸爸 3",
        key: '/page3',
        icon: <UserOutlined />,
        children: [
            {
                label: "儿子 1",
                key: "/page3/page301"
            },
            {
                label: "儿子 2",
                key: "/page3/page302"
            },
            {
                label: "儿子 3",
                key: "/page3/page303"
            }
        ]
    },
    {
        label: "爸爸 4",
        key: '/page4',
        icon: <UserOutlined />,
        children: [
            {
                label: "儿子 1",
                key: "/page4/page401"
            },
            {
                label: "儿子 2",
                key: "/page4/page402"
            },
           
        ]
    },
    
]

const Comp: React.FC = () => {
    const navigateTo = useNavigate()
    //可以获取当前路由
    const currentRoute = useLocation()
    console.log('currentRoute',currentRoute);
    
    const menuClick = (e: { key: string }) => {
        //点击跳转到对应的路由 编程式导航跳转,利用到一个hook
        navigateTo(e.key)
    }

    // 拿着currentRoute.pathname跟items数组的每一项的children的key值进行对比,如果找到了相等了,就要他上一级的key
    // 这个key给到openKeys数组的元素,作为初始值

    const [openKeys, setOpenKeys] = useState(['']);

    const handleOpenChange = (keys: string[]) => {
        // 展开和回收侧边栏某项菜单的时候执行这里的代码
        // const arr = keys.slice(keys.length-1, keys.length)

        setOpenKeys([keys[keys.length - 1]])

    }


    return (
        <Menu
            // 点击菜单展开的回调
            onOpenChange={handleOpenChange}
            theme="dark"
            //控制侧边栏菜单高亮
            defaultSelectedKeys={[currentRoute.pathname]}
            mode="inline"
            items={items}
            onClick={menuClick}
            // 当前菜单展开项的数组
            openKeys={openKeys} />
    )
}

export default Comp;