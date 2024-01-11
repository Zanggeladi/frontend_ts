//封装高阶组件
//核心逻辑：有token/无token    来判断跳转到哪个界面


import {getToken} from "@/utils";
import {Navigate} from "react-router-dom";

function AuthRoute({children}){
    const token = getToken()
    if(token){
        //正常跳转
        return <>{children}</>
    }else{
        //强制跳转回登录界面
        console.log('发生了一次强制跳转')
        return <Navigate to={'/login'} replace />
    }
}

export {AuthRoute}