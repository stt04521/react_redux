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
    CLOSE_THE_WINDOW
} from '../actions/actionsTypes'

function* openPrompt() {
    yield call(delay,2000);
    yield put({type: CLOSE_THE_WINDOW})
}


export function* prompt() {

    while( yield take(OPEN_THE_WINDOW) ){
        yield fork(openPrompt)
    }
}


