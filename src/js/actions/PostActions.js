/**
 * Created by shitengteng on 2016/12/30.
 */

import {
    REQUEST_POSTS,
    DELETE_DATA,
    ACCESS_TO_LOISTICS,
    CHANGE_NOTES,
    SEND_WECHAT_REQUEST,
    REQUEST_ORDER_QUANTITY
} from './actionsTypes'

export const onRequestPosts = (url,data) => ({type: REQUEST_POSTS,url,data})

export const onLoisticsPosts = (url,data) => ({type: ACCESS_TO_LOISTICS,url,data})

export const onChangeNotes = (value,index) => ({type: CHANGE_NOTES,value,index})

export const onSendWechatRequest = (path,data,path2,data2,page) => ({type: SEND_WECHAT_REQUEST,path,data,path2,data2,page})