/**
 * Created by Administrator on 2017/1/4.
 */


import { START, STOP, RESET } from './actionsTypes'

export const onStart = (seconds,flag,name) => ({ type: START,seconds,flag,name})
export const onStop = () => ({ type: STOP })
export const onReset = () => ({ type: RESET })