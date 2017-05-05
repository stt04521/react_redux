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
    END,
} from 'redux-saga'

import {
    getState,
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
    RESET,
    TIMER_RECEIVE_DATA,
    TIMER_TAOBAO_DATA,
    UPDATE_JY_TIME,
    UPDATE_CT_TIME,
    STOP_CT,
    STOP_JY
} from '../actions/actionsTypes'


// prompt
// function* openPrompt() {
//     yield call(delay,2000);
//     yield put({type: CLOSE_THE_WINDOW})
// }
// export function* prompt() {
//
//     while( yield take(OPEN_THE_WINDOW) ){
//         yield fork(openPrompt)
//     }
// }

//timer

// function* timer() {
//     try {
//         while(true) {
//             yield call(delay, 1000)
//             yield put({type: TIMER})
//             yield put({type: RESET})
//         }
//     } finally {
//         if (yield cancelled()) {
//             console.log('噢，竟然取消了。。。。')
//         }
//     }
// }

function data(json) {

    let arr=json.map(item=>{
        let flag;

       let t=Math.abs(Number(new Date(item.fhTime.replace(/\s/, 'T')))-Number(new Date()));
        if(t==0){
            flag =false
        }
       let h =Math.floor(t/1000/60/60);
       let m=Math.floor(t/1000/60%60);
       let s=Math.floor(t/1000%60);
        if(m<10)
            m="0"+m;
        if(s<10)
            s="0"+s;
        let str=h+":"+m+":"+s;
        return {time:str,flag:flag||item.timeFlg};
    })

    return arr
}

function* result(json) {
    try {
        while(true) {
            yield call(delay, 1000)
            const date = yield call(data,json)

            yield put({type: UPDATE_JY_TIME,json:date})
        }
    } finally {
        if (yield cancelled()) {
            console.log('噢，竟然取消了。。。。')
        }
    }


}

export function* watchTimer(){
    while ( true) {
        const {json}=yield take(TIMER_RECEIVE_DATA);
        const bgTask = yield fork(result,json);
        yield take(STOP);
        yield cancel(bgTask);

    }
}

function* result2(json) {

    try {
        while(true) {
            yield call(delay, 1000)
            const date = yield call(data,json)
            yield put({type:  UPDATE_CT_TIME,json:date})
        }
    } finally {
        if (yield cancelled()) {
            console.log('噢，竟然取消了。。。。')
        }
    }

}
export function* watchCTTimer(){
    while ( true) {
        const {json}=yield take(TIMER_TAOBAO_DATA)
        const bgTask = yield call(result2,json)
        yield take(STOP);
        yield cancel(bgTask);

    }
}
