//封装和文章相关的接口函数
import {request} from "@/utils";


//1.获取文章频道列表
export function getChannelAPI(){
    return request({
        url:'/channels',
        method:'GET'
    })
}

//2.创建文章，提交收集到的表单数据
export function createArticleAPI(data){
    return request({
        url:'/mp/articles',
        method:'POST',
        data
    })
}

