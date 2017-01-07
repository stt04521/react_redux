
/**
 * Created by shitengteng on 2016/12/30.
 */
// saga 模块化引入
import { fork } from 'redux-saga/effects'
import { watchPost } from './posts'
import {watchGetData} from  './requestData'
import {prompt,watchTimer} from  './synchronous'

export default function* rootSaga() {
    yield [
        fork(watchGetData),
        fork(watchPost),
        fork(prompt),
        fork(watchTimer)
    ]
}