/**
 * Created by shitengteng on 2017/1/9.
 */
import {
    LOGISTICS_RECEIVE_DATA,
    SELECT_LOGISTICS_COMPANY,
    NUMBER_OF_LOGISTICS,
    REDUCTION_SELECTION,
    MAIL_FROM_MENTIONING,
    CONTACT_INFORMATION
} from '../actions/actionsTypes'

import { createReducer } from 'redux-immutablejs'
import Immutable from 'immutable';

const  init=Immutable.fromJS({
    items:[],
    show:{
        "courierName":"请选择物流公司",
        "courierCode":"物流公司编码"
    },
    Number:"",
    send_type:"邮寄",
    online:"自己联系"
})


export default createReducer(init,{
    [LOGISTICS_RECEIVE_DATA]:(state,action)=>state.merge({
        items:Immutable.fromJS(action.json)
    }),
    [SELECT_LOGISTICS_COMPANY]:(state,action)=>state.mergeDeep({
        show:state.get('items').filter((item,index)=>{
            return index==action.index
        }).get(0)
    }),
    [NUMBER_OF_LOGISTICS]:(state,action)=>state.merge({
        Number:action.value
    }),
    [REDUCTION_SELECTION]:(state,action)=>state.merge({
        show:{
            "courierName":"请选择物流公司",
            "courierCode":"物流公司编码"
        },
        Number:""
    }),
    [MAIL_FROM_MENTIONING]:(state,action)=>state.merge({
        send_type:action.mail=="2"?"自提":"邮寄"
    }),
    [CONTACT_INFORMATION]:(state,action)=>state.merge({
        online:action.Types=="2"?"在线下单":"自己联系"
    })
})