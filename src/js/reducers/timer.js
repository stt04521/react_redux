/**
 * Created by shitengteng on 2017/1/4.
 */


import { STOP,STOP_CT, RESET, TIMER,TIMER_RECEIVE_DATA,TIMER_TAOBAO_DATA,UPDATE_JY_TIME,UPDATE_CT_TIME} from '../actions/actionsTypes'
import { createReducer } from 'redux-immutablejs'
import Immutable from 'immutable';

const init = Immutable.fromJS({
    items:'',
    taobao:''
})

export default createReducer(init,{
    [TIMER_TAOBAO_DATA]:(state,action)=>state.merge({
        taobao:action.json
    }),
    [TIMER_RECEIVE_DATA]:(state,action)=>state.merge({
        items:action.json
    }),
    [UPDATE_JY_TIME]:(state,action)=>state.mergeDeep({
        items:state.get('items').map((item,index)=>{
        const {time,flag} =action.json[index]
            return item.set("fhTime",time).set("timeFlg",flag)
        })
    }),
    [UPDATE_CT_TIME]:(state,action)=>state.mergeDeep({
        taobao:state.get('taobao').map((item,index)=>{
            const {time,flag} =action.json[index]
            return item.set("fhTime",time).set("timeFlg",flag)
        })
    }),
    [STOP]:(state,action)=>state,
    [RESET]:(state,action)=>state.merge({
        flag:state.get('seconds')==0?false:state.get('flag')
    }),
    [TIMER]:(state,action)=>state.mergeDeep({
        seconds:state.get('flag')?(state.get('seconds') - 1):(state.get('seconds') + 1)
    })
})