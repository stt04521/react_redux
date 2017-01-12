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
    SELECT_RECEIVE_DATA
} from '../actions/actionsTypes'

//


// 异步获取数据，开始！
function fetchPostsApi(path,postData) {
    let url = Tool.target+path+Tool.paramType(postData)
    return fetch(url)
        .then(response => response.json())
        .then(json =>Promise.resolve(json))
}

function* fetchPosts(action) {
    const posts = yield call(fetchPostsApi,action.url,action.data)
    if(posts.shopList){

        yield put({type: SELECT_RECEIVE_DATA,json:posts.shopList})
    }
    yield put({type: RECEIVE_POSTS, posts, receivedAt: moment().format("HH:mm:ss")})
}

export function* watchPost() {
    yield takeEvery(REQUEST_POSTS, fetchPosts);
}

function* fetchCourier(action) {
    const posts = yield call(fetchPostsApi,action.url,action.data)
    yield put({type: LOGISTICS_RECEIVE_DATA,json:posts})
}

export function* watchCourier() {
    yield takeEvery(ACCESS_TO_LOISTICS, fetchCourier);
}