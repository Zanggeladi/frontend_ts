// //测试一下token的注入情况
// import {request} from "@/utils";
// import {useEffect} from "react";
//
//
// const Layout = () => {
//     useEffect(() => {
//         request.get('/user/profile')
//     },[])
//     return (
//         <div>this is a Layout</div>
//     )
// }
//
// export default Layout

import { Layout, Menu, Popconfirm } from 'antd'
import {
    HomeOutlined,
    DiffOutlined,
    EditOutlined,
    LogoutOutlined,
} from '@ant-design/icons'
import './index.scss'
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {clearUserInfo, fetchUserInfo} from "@/store/modules/user";

const { Header, Sider } = Layout


// 菜单是由Menu组件根据items的信息生成的，具体过程我们看不见，其中的key值会传递到event中
const items = [
    {
        label: '首页',
        key: '/',
        icon: <HomeOutlined />,
    },
    {
        label: '文章管理',
        key: '/article',
        icon: <DiffOutlined />,
    },
    {
        label: '创建文章',
        key: '/publish',
        icon: <EditOutlined />,
    },{
        label: '结果展示',
        key: '/show',
        icon: <DiffOutlined />,
    },{
        label: '创建任务',
        key: '/tasksubmission',
        icon: <EditOutlined />,
    }
]

const GeekLayout = () => {
    const navigate = useNavigate()
    function onMenuClick(event){
        // console.log('点击了菜单',event)
        navigate(event.key)
    }

    const location = useLocation()
    const selectedKey = location.pathname

    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(fetchUserInfo())
    }, [dispatch])
    const userName = useSelector(state => state.user.userInfo.name)

    const onConfirm = () =>{
        console.log('确认退出')
        dispatch(clearUserInfo())
        navigate('/login')
    }

    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <div className="user-info">
                    <span className="user-name">{userName}</span>
                    <span className="user-logout">
            {/*确认框*/}
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消" onConfirm={onConfirm}>
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
                </div>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        theme="dark"
                        // defaultSelectedKeys={['/']}默认高亮设置
                        //根据key匹配item中的，进行高亮
                        selectedKeys={selectedKey}
                        items={items}
                        onClick={onMenuClick}
                        style={{ height: '100%', borderRight: 0 }}></Menu>
                </Sider>
                <Layout className="layout-content" style={{ padding: 20 }}>
                    {/*二级路由的出口，即二级路由组件的渲染位置*/}
                    <Outlet />
                </Layout>
            </Layout>
        </Layout>
    )
}
export default GeekLayout