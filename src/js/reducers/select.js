/**
 * Created by shitengteng on 2017/1/7.
 */

import {
    SELECT_RECEIVE_DATA,
    CHECK_ALL,
    SELECT_CANCEL,
    SELECT_THE_RADIO,
    CANCEL_THE_RADIO
} from '../actions/actionsTypes'

import { createReducer } from 'redux-immutablejs'
import Immutable from 'immutable';

const  init=Immutable.fromJS({
    items:[],
    isCheckAll:false//是否全选状态
})


export default createReducer(init,{
    [SELECT_RECEIVE_DATA]:(state,action)=>state.merge({
        items:Immutable.fromJS(action.json)
    }),
    [CHECK_ALL]:(state,action)=>state.mergeDeep({
        items:state.get('items').map(item=>{
            return item.set("checked",action.flag)
            })
        ,
        isCheckAll:action.flag
    })
    ,
    [SELECT_THE_RADIO]:(state,action)=>{

     return state.mergeDeep({
         isCheckAll:state.get('items').size===(action.flag?state.get('items').filter(value=>value.get("checked")).size+1:state.get('items').filter(value=>value.get("checked")).size-1),
        items:state.get('items').updateIn([action.id,'checked'],value=>!value)

    })

    },

})