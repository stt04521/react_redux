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
//
import { hashHistory } from 'react-router'

// import { createHistory } from 'history';
// import { useRouterHistory } from 'react-router'


// const browserHistory = useRouterHistory(createHistory)({
//     basename: '/jymbms'
// });

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
    RECEIVE_POSTS,
    CLOSE_THE_WINDOW,
    REQUEST_ORDER_QUANTITY,
    GET_A_SINGLE_NUMBER
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
    yield put({type: CLOSE_THE_WINDOW})

    if( json.status=="orderisoperated"||json.status=="success"){
        // yield  put({type: GET_DATA_SUCCESS,json,success:action.success,name:action.name})
        hashHistory.push({
            pathname:action.url,
            state:action.state
        })
    }


}

export function* watchGetData() {
    yield* takeLatest(GET_DATA_START,GetData)
}

//发送请求并弹窗重新刷新页面


function* OpenTheWindow(action) {
    const json = yield call(GetDataApi,action.path,action.data)
    yield  put({type: OPEN_THE_WINDOW,message:json})
    yield call(delay, 2000)
    yield put({type: CLOSE_THE_WINDOW})
    if( json.status=="orderisoperated"||json.status=="success"){
        yield  put({type: REQUEST_POSTS,url:action.path2,data:action.data2,name:action.name,time:'timer'})
    }
}

export function* watchDeleteData() {
    yield* takeLatest(SEND_DELETE_REQUEST,OpenTheWindow)
}
//发送请求后配置微信 并且 保存用户与经销商id


function configuration(posts) {
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

     //yield call(configuration,posts)
    const user = yield call(GetDataApi,action.path2,action.data2)


    if(user){

        localStorage.setItem("openid",user.openId)
        sessionStorage.setItem("user",JSON.stringify(user));

        hashHistory.push({
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

//页面初始获取 订单数量
function add(value) {
    return value.jiuyangNum+value.taobaoNum

}

function* sendOrder(action) {
    const [order,changeorder,sale]=
        yield[
            call(GetDataApi,'/order/list',action.data),
        call(GetDataApi,`/changeorder/changeorderList`),
        call(GetDataApi,`/sale/getsaleList`,action.data)]
    const [orderNum,changeNum,saleNum]=
        yield[
            call(add,order),
            call(add,changeorder),
               call(add,sale)]
    yield  put({type: GET_A_SINGLE_NUMBER,name:"orderNum",num:orderNum})
    yield  put({type: GET_A_SINGLE_NUMBER,name:"grabASingleNum",num:changeNum})
    yield  put({type: GET_A_SINGLE_NUMBER,name:"customerNum",num:saleNum})
}




export function* watchOrdernum() {
    while(true) {
        // const requestChan = yield actionChannel(REQUEST_ORDER_QUANTITY, buffers.sliding(1))
        const  action= yield take(REQUEST_ORDER_QUANTITY)
        yield call(sendOrder,action)

    }

}