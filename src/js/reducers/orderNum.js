/**
 * Created by shitengteng on 2017/1/16.
 */

import {
    REQUEST_ORDER_QUANTITY,
    GET_A_SINGLE_NUMBER
} from '../actions/actionsTypes'

import { createReducer } from 'redux-immutablejs'
import Immutable from 'immutable';


const  init=Immutable.fromJS({
    orderNum:0,
    grabASingleNum:0,
    customerNum:0
})

export default createReducer(init,{

    [GET_A_SINGLE_NUMBER]:(state,action)=>state.merge({
        [action.name]:action.num
    })
})