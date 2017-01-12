/**
 * Created by shitengteng on 2017/1/9.
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
    POST_DATA_SUCCESS,
    POST_DATA_START
} from '../actions/actionsTypes'


// 手动获取数据，开始！
function PostDataApi(path,postData) {
    let url = Tool.target+path
    return fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(response => response.json())
        .then(json =>Promise.resolve(json))
}

function* PostData(action) {
    const json = yield call(PostDataApi,action.path,action.data)
    yield  put({type: POST_DATA_SUCCESS,json,success:action.success,name:action.name})
}

export function* watchPostData() {

    yield takeEvery(POST_DATA_START, PostData);
}