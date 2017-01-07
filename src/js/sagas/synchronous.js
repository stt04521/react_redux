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

import {
    OPEN_THE_WINDOW,
    CLOSE_THE_WINDOW,
    TIMER,
    START,
    STOP,
    RESET
} from '../actions/actionsTypes'


//prompt
function* openPrompt() {
    yield call(delay,2000);
    yield put({type: CLOSE_THE_WINDOW})
}
export function* prompt() {

    while( yield take(OPEN_THE_WINDOW) ){
        yield fork(openPrompt)
    }
}

//timer

function* timer() {
    try {
        while(true) {
            yield call(delay, 1000)
            yield put({type: TIMER})
            yield put({type: RESET})
        }
    } finally {
        if (yield cancelled()) {
            console.log('噢，竟然取消了。。。。')
        }
    }
}

export function* watchTimer(){
    while ( yield take(START) ) {
        const bgTask = yield fork(timer)
        yield take(STOP)
        yield cancel(bgTask)
    }
}