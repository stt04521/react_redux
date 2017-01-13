/**
 * Created by shitengteng on 2017/1/3.
 */

import {
    takeEvery,
    delay,
    takeLatest,
    buffers,
    channel,
    eventChannel,
    END
} from 'redux-saga'
import WxUtil from '../until/wxUtil'

import { browserHistory } from 'react-router'

import {
    put,
    call,
    take,
    fork,
    select,
    actionChannel,
    cancel,
    cancelled
} from 'redux-saga/effects'

import moment from 'moment'
import {Tool} from '../until/Tool'
import fetch from 'isomorphic-fetch'
import {
    GET_DATA_START,
    GET_DATA_SUCCESS,
    SEND_DELETE_REQUEST,
    DELETE_DATA,
    OPEN_THE_WINDOW,
    TEST_DISPATCH,
    REQUEST_POSTS,
    SEND_WECHAT_REQUEST,
    RECEIVE_POSTS
} from '../actions/actionsTypes'


// 获取完数据后跳转页面！
function GetDataApi(path,postData) {
    let url = Tool.target+path+Tool.paramType(postData)
    return fetch(url)
        .then(response => response.json())
        .then(json =>Promise.resolve(json))
}

function* GetData(action) {
    const json = yield call(GetDataApi,action.path,action.data)
    yield  put({type: OPEN_THE_WINDOW,message:json})
    yield call(delay, 2000)
    if( json.status=="orderisoperated"||json.status=="success"){
        // yield  put({type: GET_DATA_SUCCESS,json,success:action.success,name:action.name})
        browserHistory.push({
            pathname:action.url,
            state:action.state
        })
    }


}

export function* watchGetData() {

    yield takeEvery(GET_DATA_START, GetData);
}

//发送请求并弹窗重新刷新页面
function GetDataApi1(path,postData) {
    let url = Tool.target+path+Tool.paramType(postData)
    return fetch(url)
        .then(response => response.json())
        .then(json =>Promise.resolve(json))
}

function* OpenTheWindow(action) {
    const json = yield call(GetDataApi1,action.path,action.data)
    yield  put({type: OPEN_THE_WINDOW,message:json})

    if( json.status=="orderisoperated"||json.status=="success"){
        yield  put({type: REQUEST_POSTS,url:action.path2,data:action.data2})
    }
}

export function* watchDeleteData() {
    while(true) {
        const action = yield take(SEND_DELETE_REQUEST)
        const  type=yield call(OpenTheWindow, action)

    }

}
//发送请求后配置微信 并且 保存用户与经销商id
function GetDataApi2(path,postData) {
    let url = Tool.target+path+Tool.paramType(postData)
    return fetch(url)
        .then(response => response.json())
        .then(json =>Promise.resolve(json))
}

function configuration(posts) {
    console.log(posts)
    sessionStorage.setItem("adver",JSON.stringify(posts));
    WxUtil.useWxJs();
    wx.ready(function() {
        wx.hideMenuItems({
            // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
            menuList: ["menuItem:share:qq", "menuItem:share:weiboApp",
                "menuItem:share:facebook", "menuItem:favorite",
                "menuItem:share:QZone", "menuItem:favorite",
                "menuItem:copyUrl", "menuItem:openWithQQBrowser",
                "menuItem:openWithSafari", "menuItem:share:email", "chooseWXPay"]
        });
    })
}

function* sendWechat(action) {
    const posts = yield call(GetDataApi,action.path,action.data)
     yield call(configuration,posts)
    const user = yield call(GetDataApi,action.path2,action.data2)
    if(user){
        localStorage.setItem("openid",user.openId)
        sessionStorage.setItem("user",JSON.stringify(user));
        browserHistory.push({
            pathname:'/index',
            state:''
        })
    }

}



export function* watchSendWechat() {
    while(true) {
        const action = yield take(SEND_WECHAT_REQUEST)
        const  type=yield call(sendWechat, action)

    }

}