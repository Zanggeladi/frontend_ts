//在此进行路由配置
import {createBrowserRouter} from "react-router-dom";

import {AuthRoute} from '@/components/AuthRoute'

import Login from "@/pages/Login";
import GeekLayout from "@/pages/Layout";
import Home from "@/pages/Home";
import Article from "@/pages/Article";
import Publish from "@/pages/Publish";
import Show from "@/pages/Show";
import TaskSubmission from "@/pages/TaskSubmission";

//配置路由实例

const router = createBrowserRouter([
    {
        path:"/",
        element:<AuthRoute> <GeekLayout/> </AuthRoute>,
        children:[
            {
                index:true,
                element:<Home />
            },
            {
                path:'article',
                element:<Article />
            },
            {
                path:'publish',
                element:<Publish />
            },
            {
                path:'show',
                element:<Show />
            },
            {
                path:'tasksubmission',
                element:<TaskSubmission />
            }
        ]
    },
    {
        path:"/login",
        element:<Login />
    }
])

export default router