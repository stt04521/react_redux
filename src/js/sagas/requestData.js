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
    TEST_DISPATCH
} from '../actions/actionsTypes'


// 手动获取数据，开始！
function GetDataApi(path,postData) {
    let url = Tool.target+path+Tool.paramType(postData)
    return fetch(url)
        .then(response => response.json())
        .then(json =>Promise.resolve(json))
}

function* GetData(action) {
    const json = yield call(GetDataApi,action.path,action.data)
    yield  put({type: GET_DATA_SUCCESS,json,success:action.success,name:action.name})
}

export function* watchGetData() {

    yield takeEvery(GET_DATA_START, GetData);
}
