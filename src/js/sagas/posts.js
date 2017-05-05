/**
 * Created by shitengteng on 2016/12/30.
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
    REQUEST_POSTS,
    RECEIVE_POSTS,
    ACCESS_TO_LOISTICS,
    SUCCESS_TO_LOISTICS,
    LOGISTICS_RECEIVE_DATA,
    SELECT_RECEIVE_DATA,
    GET_A_SINGLE_NUMBER,
    TIMER_RECEIVE_DATA,
    TIMER_TAOBAO_DATA
} from '../actions/actionsTypes'
import {getOrderNum} from './selectors'
//


// 异步获取数据，开始！
function fetchPostsApi(path,postData) {
    let url = Tool.target+path+Tool.paramType(postData)
    return fetch(url)
        .then(response => response.json())
        .then(json =>Promise.resolve(json))
}
//获取订单数量
function add(value) {
    return value.jiuyangNum+value.taobaoNum


}



function* fetchPosts(action) {
    const posts = yield call(fetchPostsApi,action.url,action.data)
    //获取定时器数据
    if(action.time){
        if(posts.jiuyangList){
            yield put({type: TIMER_RECEIVE_DATA,json:posts.jiuyangList})
        }

        if(posts.cuntaoList){
            yield put({type: TIMER_TAOBAO_DATA,json:posts.cuntaoList})
        }


    }
    //获取全选数据
    if(posts.shopList){

        yield put({type: SELECT_RECEIVE_DATA,json:posts.shopList})
    }
    //获取订单数量
    if(action.name){
         const Num =yield call(add,posts)
        yield  put({type: GET_A_SINGLE_NUMBER,name:action.name,num:Num})
    }
    if(action.name=="orderNum"){
        const orderNum = yield select(getOrderNum)
        const  Gnum=orderNum.toJS().grabASingleNum
        yield  put({type: GET_A_SINGLE_NUMBER,name:"grabASingleNum",num:Gnum+1})
    }

    yield put({type: RECEIVE_POSTS, posts, receivedAt: moment().format("HH:mm:ss")})
}

export function* watchPost() {
    yield takeLatest(REQUEST_POSTS, fetchPosts);
}

function* fetchCourier(action) {
    const posts = yield call(fetchPostsApi,action.url,action.data)
    yield put({type: LOGISTICS_RECEIVE_DATA,json:posts})
}

export function* watchCourier() {
    yield takeEvery(ACCESS_TO_LOISTICS, fetchCourier);
}