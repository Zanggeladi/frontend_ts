//和用户相关的状态管理

import {createSlice} from "@reduxjs/toolkit";
// import login from "@/pages/Login";
import {removeToken} from "@/utils";
import {setToken as _setToken, getToken as _getToken} from "@/utils";
import {loginAPI, getProfileAPI} from "@/apis/user";

const userStore = createSlice({
    name:"user",
    //数据状态
    initialState:{
        token:_getToken() || '',
        userInfo:{}
    },
    //同步修改方法
    reducers:{
        setToken(state, action){
            state.token = action.payload
            //在localStorage中也存一份
            _setToken(action.payload)
        },
        setUserInfo(state, action){
            state.userInfo = action.payload
        },
        clearUserInfo(state){
            state.token = ''
            state.userInfo = {}
            removeToken()
        }
    }
})

//解构出actionCreator
const {setToken, setUserInfo, clearUserInfo} = userStore.actions

//解构出reducer函数
const userRuducer = userStore.reducer


//异步方法 完成登录并获取到token
const fetchLogin = (loginForm) =>{
    return async (dispatch) =>{
        //1.发送异步请求
        const res = await loginAPI(loginForm)
        //2.通过提交同步action的方式，来把获取到的token存入
        dispatch(setToken(res.data.token))
    }
}

//异步方法 获取用户信息
const fetchUserInfo = () =>{
    return async (dispatch) =>{
        const res = await getProfileAPI()
        dispatch(setUserInfo(res.data))
    }
}



export { fetchLogin, fetchUserInfo, clearUserInfo }

export default userRuducer