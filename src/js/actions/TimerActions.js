/**
 * Created by Administrator on 2017/1/4.
 */


import {STOP,STOP_CT, RESET,TIMER_RECEIVE_DATA,TIMER_TAOBAO_DATA} from './actionsTypes'

export  const onReceiveTaobao=(json)=>({type:TIMER_TAOBAO_DATA, json})
export  const onReceiveTimer=(json)=>({type:TIMER_RECEIVE_DATA, json})

export const onStop = ()=>({ type:STOP})
export const onStopCt = () => ({ type: STOP_CT })
export const onReset = () => ({ type: RESET })