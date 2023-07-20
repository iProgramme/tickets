import { Link, Outlet, useLocation, useNavigate } from 'umi';
import {
    Menu,
    Breadcrumb,
    ConfigProvider,
    Badge,
    Dropdown,
} from 'antd'
import zhCN from 'antd/locale/zh_CN';
import { useEffect, useState } from 'react'

// 所有菜单
const items = [
    {
        label: '板块',
        key: '/',
    },
    {
        label: '密钥管理',
        key: '/aaa',
        children: [
            {
                label: '生命周期管理',
                key: '/bbb'
            },
        ]
    },
]
export default function Layout() {
    const location = useLocation();
    const navigate = useNavigate()
    const onClick = e => {
        const keyPath = e.keyPath.reverse();
        navigate(keyPath.join(""))
    }
    return (
        <>
            <Menu
                onClick={onClick}
                style={{
                    width: 256,
                }}
                mode="inline"
                theme="dark"
                items={items}
            />
            <div className='page-detail'>
                <ConfigProvider locale={zhCN}>
                    <Outlet />
                </ConfigProvider>
            </div>
        </>
    );
}
