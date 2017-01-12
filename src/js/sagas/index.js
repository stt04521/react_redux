
/**
 * Created by shitengteng on 2016/12/30.
 */
// saga 模块化引入
import { fork } from 'redux-saga/effects'
import { watchPost,watchCourier} from './posts'
import {watchGetData,watchDeleteData} from  './requestData'
import {prompt,watchTimer} from  './synchronous'
import {watchPostData} from './postsData'
export default function* rootSaga() {
    yield [
        fork(watchGetData),
        fork(watchDeleteData),
        fork(watchPost),
        fork(prompt),
        fork(watchPostData),
        fork(watchTimer),
        fork(watchCourier)

    ]
}