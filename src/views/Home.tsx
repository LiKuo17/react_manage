


import { Breadcrumb, Layout  } from 'antd';
import React, { useState } from 'react';
import { Outlet  } from "react-router-dom"
import MainMenu from '@/components/MainMenu';
const { Header, Content, Footer, Sider } = Layout;


const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* 左边侧边栏 */}
            <Sider collapsible collapsed={collapsed} onCollapse={value => {
                console.log(222222222222);
                console.log('collapsed',collapsed);
                
                // if(value === false) {
                //     let logoName = document.querySelector(".logoName")
                //     console.log('logoName',logoName);
                //     // logoName.setAttribute(className)
                // }
                setCollapsed(value)
            }}>
                <div className="logo" >
                   {
                     collapsed === false ? (<div className='logoName'>JSKUO后台管理系统</div>) : null
                   }
                </div>
                <MainMenu />
            </Sider>
            {/* 右边内容 */}
            <Layout className="site-layout">
                {/* 右边头部 */}
                <Header className="site-layout-background" style={{ paddingLeft: "16px" }} >
                    {/* 面包屑 */}
                    <Breadcrumb style={{ lineHeight: "64px" }}>
                        <Breadcrumb.Item>面包屑</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                {/* 右边盒子内内容 */}
                <Content style={{ margin: '16px 16px 0 ' }} className="site-layout-background">
                    {/* 窗口部分 */}

                    <Outlet />
                </Content>
                {/* 右边底部 */}
                <Footer style={{ textAlign: 'center', padding: 0, lineHeight: "48px" }}>Ant Design ©2022 Created by JSKUO</Footer>
            </Layout>
        </Layout>
    );
};

export default App;