
/**
 * Created by shitengteng on 2016/12/30.
 */
// saga 模块化引入
import { fork } from 'redux-saga/effects'
import { watchPost,watchCourier,} from './posts'
import {watchGetData,watchDeleteData,watchSendWechat,watchOrdernum} from  './requestData'
import {prompt,watchTimer,watchCTTimer} from  './synchronous'
import {watchPostData} from './postsData'
export default function* rootSaga() {
    yield [
        fork(watchGetData),
        fork(watchDeleteData),
        fork(watchPost),
        fork(watchOrdernum),
        fork(watchPostData),
        fork(watchTimer),
        fork(watchCTTimer),
        fork(watchCourier),
        fork(watchSendWechat)
    ]
}